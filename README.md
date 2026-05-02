# Gerard Eklu Portfolio

Source code for Gerard Eklu's personal portfolio site, built to showcase
flagship product engineering work, cloud/platform projects, and supporting
case studies.

The portfolio is designed to do two things well:
- give recruiters and hiring managers a fast, high-signal overview
- give engineers deeper technical context through project pages and case studies

## What the site highlights

- `PitchPulse26` as the flagship full-stack project
- selected cloud, infrastructure, and CI/CD work
- systems-focused capability areas like IaC, observability, containers, and reliability
- resume, about, and contact sections for quick review

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Main sections

- `/` - homepage with flagship project, selected work, systems teaser, about, resume, and contact
- `/work` - curated project portfolio
- `/work/pitchpulse26` - flagship case study
- `/systems` - capability-oriented systems view
- `/engineering` - product/full-stack engineering work
- `/about` - background and positioning
- `/resume` - resume download/view

## Project structure

```text
gerard-portfolio/
├── app/
│   ├── components/        # homepage, flagship, systems, resume, and shared UI
│   ├── data/              # projects, systems categories, skills
│   ├── work/              # project listing and flagship case study routes
│   ├── systems/           # systems overview and category routes
│   ├── about/
│   ├── engineering/
│   └── resume/
├── public/
│   ├── pitchpulse26/      # screenshots used in the flagship case study
│   └── icons/             # static assets
└── README.md
```

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run lint checks:

```bash
npm run lint
```

## Content model

Project content is primarily driven from:

- [app/data/projects.ts](./app/data/projects.ts)
- [app/data/systems.ts](./app/data/systems.ts)
- [app/data/skills.ts](./app/data/skills.ts)

This keeps high-level portfolio copy centralized and makes it easier to evolve
project positioning without scattering text across the app.

## Case study approach

The portfolio uses a layered presentation model:

- homepage and project cards for quick scanning
- project case studies for deeper technical explanation
- architecture diagrams and screenshots for fast visual understanding

The `PitchPulse26` case study is the current flagship example of this approach,
combining:
- product overview
- system architecture
- deployment and observability story
- screenshots
- tradeoffs and next steps

## Notes

- Internal planning notes and improvement backlog are kept private, not in this repo.
- Supporting project repos may evolve independently from the portfolio copy, but highlighted projects should stay aligned with the evidence shown publicly.

## Future improvements

- expand supporting case studies for selected projects
- continue simplifying top-level navigation and positioning
- add more architecture visuals where they improve scanability
- keep project screenshots curated and high-signal
