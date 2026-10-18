"""Visual acceptance of the existing portfolio plus its IncidentOPS entry."""

import json
import hashlib
import os
from pathlib import Path

from playwright.sync_api import sync_playwright

base = os.getenv('PORTFOLIO_URL', 'http://127.0.0.1:3100')
output = Path(os.getenv('PORTFOLIO_EVIDENCE', '../portfolio-evidence')).resolve()
output.mkdir(parents=True, exist_ok=True)
errors = []
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(device_scale_factor=2)
    page.on('pageerror', lambda error: errors.append(str(error)))
    for name,width,height in [('desktop',1440,900),('mobile',390,844)]:
        page.set_viewport_size({'width':width,'height':height})
        page.goto(base,wait_until='networkidle')
        assert page.locator('header').get_by_role('link',name='GitHub',exact=True).evaluate('(el)=>getComputedStyle(el).color') == 'rgb(255, 255, 255)'
        page.locator('#incidentops').evaluate('(el)=>window.scrollTo({top:el.getBoundingClientRect().top+scrollY-96,behavior:"instant"})')
        assert page.get_by_role('heading',name='Calorie Compass',exact=True).count() == 1
        assert page.get_by_role('heading',name='Stride Fitness',exact=True).count() == 1
        assert page.locator('#incidentops img').count() == 4
        for image in page.locator('#incidentops img').all():
            image.scroll_into_view_if_needed()
            page.wait_for_function(
                '(alt)=> {const image=Array.from(document.querySelectorAll("#incidentops img")).find(i=>i.alt===alt); return image?.complete && image.naturalWidth>0}',
                arg=image.get_attribute('alt'),
            )
        page.locator('#incidentops').scroll_into_view_if_needed()
        assert page.locator('#incidentops img').evaluate_all('(images)=>images.every(i=>i.complete && i.naturalWidth>0 && i.alt.length>20)')
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        assert page.locator('#incidentops').get_by_role('link',name='IncidentOPS on GitHub',exact=True).get_attribute('href') == 'https://github.com/TyCodes101/incidentops'
        assert page.locator('#incidentops').get_by_role('link',name='Try IncidentOPS',exact=True).get_attribute('href') == 'https://incidentops-public-demo.vercel.app'
        for link in page.locator('#incidentops figure a').all():
            assert page.request.get(base + link.get_attribute('href')).status == 200
        page.locator('#incidentops').evaluate('(el)=>window.scrollTo({top:el.getBoundingClientRect().top+scrollY-96,behavior:"instant"})')
        page.screenshot(path=str(output / f'portfolio-after-{name}.png'))
        if name == 'desktop':
            page.locator('#incidentops').screenshot(path=str(output / f'portfolio-feature-{name}.png'))
        else:
            page.screenshot(path=str(output / f'portfolio-feature-{name}.png'))
            page.locator('#incidentops figure').first.scroll_into_view_if_needed()
            page.screenshot(path=str(output / 'portfolio-gallery-mobile.png'))
    page.goto(base+'/resume',wait_until='networkidle')
    assert page.locator('h1').is_visible()
    assert 'software engineering intern' in page.locator('body').inner_text().lower()
    pdf = page.request.get(base+'/Tyler-Cox-Resume.pdf')
    assert pdf.status == 200
    assert hashlib.sha256(pdf.body()).hexdigest() == '0b84fbb715c3b5b86002bce11a870d379aa0de0d1b16a87f923ce8b1cc60271b'
    page.screenshot(path=str(output / 'portfolio-resume-mobile.png'))
    assert not errors,errors
    browser.close()
output.joinpath('portfolio-browser.json').write_text(json.dumps({
    'status':'PASS','base':base,'viewports':['1440x900','390x844'],
    'checks':['featured entry','four real screenshots loaded','full-size screenshot links','repository and verified live links','existing projects preserved','published resume route and exact PDF SHA256','visible header GitHub label','no horizontal overflow','no JS page errors']
},indent=2))
print('PASS: portfolio desktop/mobile screenshots, links, existing content and resume')
