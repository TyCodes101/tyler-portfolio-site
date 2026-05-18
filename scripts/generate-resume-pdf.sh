#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
chromium --headless --no-sandbox --disable-gpu --print-to-pdf="$ROOT/public/Tyler-Cox-Resume.pdf" "file://$ROOT/resume-source/Tyler-Cox-Resume.html" >/dev/null 2>&1
