"use client";
import Image from "next/image";
import { useState } from "react";
const screens = [
  {
    file: "overview",
    title: "Overview",
    alt: "IncidentOPS security overview with cases and recent activity, using synthetic data",
  },
  {
    file: "queue",
    title: "Case queue",
    alt: "IncidentOPS searchable case queue with severity, status and assignment columns",
  },
  {
    file: "investigation",
    title: "Investigation",
    alt: "IncidentOPS investigation with notes, properties and chronological audit history",
  },
  {
    file: "analyzer",
    title: "Login analysis",
    alt: "IncidentOPS CSV login-event analyzer with a documented suspicious-login rule",
  },
];
export function ProjectGallery() {
  const [active, setActive] = useState(0);
  const screen = screens[active];
  return (
    <div className="project-gallery">
      <div className="gallery-toolbar">
        <span className="gallery-caption">Inside the application</span>
        <div
          className="gallery-tabs"
          role="group"
          aria-label="Choose an IncidentOPS screenshot"
        >
          {screens.map((item, index) => (
            <button
              key={item.file}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <a
        className="gallery-image"
        href={`/assets/incidentops/${screen.file}.png`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open full-size ${screen.title} screenshot`}
      >
        <Image
          key={screen.file}
          src={`/assets/incidentops/${screen.file}.png`}
          alt={screen.alt}
          width={2880}
          height={2122}
          sizes="(max-width: 760px) 92vw, 90vw"
        />
      </a>
      <p className="gallery-footnote" aria-live="polite">
        {screen.title} · Actual application screenshot · Fictional demo data{" "}
        <span>Click image to view full size ↗</span>
      </p>
    </div>
  );
}
