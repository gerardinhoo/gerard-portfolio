import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { findProjectBySlug } from '../../data/projects';

export const metadata: Metadata = {
  title: 'PitchPulse26 \u2014 Flagship Case Study \u00b7 Gerard Eklu',
  description:
    'A full-stack World Cup prediction platform on serverless AWS with Terraform, Route 53 DNS, CloudWatch monitoring, and a documented rollback path.',
  alternates: { canonical: '/work/pitchpulse26' },
};

export default function PitchPulse26CaseStudy() {
  const project = findProjectBySlug('pitchpulse26');

  return (
    <article className='bg-slate-950 text-slate-100 pt-28 md:pt-32 pb-20 md:pb-24'>
      <div className='max-w-3xl mx-auto px-6 md:px-10'>
        {/* Breadcrumb */}
        <Link
          href='/work'
          className='inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300'
        >
          &larr; Back to Work
        </Link>

        {/* 1. Hero */}
        <header className='mt-6'>
          <span className='inline-block mb-3 rounded-full bg-orange-500/20 text-orange-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider'>
            <span aria-hidden='true'>★</span> Flagship Project
          </span>
          <h1 className='font-heading text-4xl md:text-5xl font-semibold text-slate-50 leading-tight'>
            PitchPulse26 &mdash; A production World Cup prediction platform,
            end&#8209;to&#8209;end.
          </h1>
          <p className='mt-4 text-lg md:text-xl text-orange-300/90 leading-relaxed'>
            A full-stack World Cup prediction platform on serverless AWS with
            Terraform, Route 53 DNS, CloudWatch monitoring, and a documented
            rollback path.
          </p>

          <div className='mt-7 flex flex-wrap items-center gap-3'>
            {project?.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
              >
                GitHub
                <ExternalLink size={14} aria-hidden='true' />
                <span className='sr-only'>(opens in new tab)</span>
              </a>
            )}
            {project?.live && (
              <a
                href={project.live}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
              >
                Live App
                <ExternalLink size={14} aria-hidden='true' />
                <span className='sr-only'>(opens in new tab)</span>
              </a>
            )}
          </div>
        </header>

        {/* Hero diagram */}
        <ArchitectureHero />

        {/* 2. The problem */}
        <Section eyebrow='01' title='The Problem'>
          <p>
            Build a complete prediction platform that real users can sign up
            for, predict on, and trust to lock at kickoff &mdash; not a demo,
            not a toy. That meant owning every layer: a typed React frontend,
            a Node API with proper auth and validation, a relational schema
            that survives result updates, infrastructure as code, a real CI/CD
            pipeline, and the monitoring and rollback path required to
            operate it.
          </p>
        </Section>

        {/* 3. Product experience */}
        <Section eyebrow='02' title='Product Experience'>
          <p>
            The strongest proof that this is a real product is that the core
            user flows are visible in the UI: making predictions, tracking
            personal progress, setting official results as an admin, and seeing
            scored outcomes reflected on the leaderboard.
          </p>
          <ScreenshotFigure
            src='/pitchpulse26/matches-overview.png'
            alt='PitchPulse26 matches page showing personal dashboard progress cards and quick navigation filters by status and group.'
            title='Matches Workflow'
            caption='The Matches page combines prediction workflow, user progress, and quick navigation by match status and group so the user can find upcoming picks without losing their place.'
          />
          <ScreenshotFigure
            src='/pitchpulse26/admin-results.png'
            alt='PitchPulse26 admin page showing pending matches with score inputs for setting official results.'
            title='Admin Result Entry'
            caption='Admin users can set official match results, which then move matches into a completed state and drive downstream standings and leaderboard scoring.'
          />
          <ScreenshotFigure
            src='/pitchpulse26/leaderboard.png'
            alt='PitchPulse26 leaderboard page showing scoring rules, the current user standing, and ranked players with points.'
            title='Leaderboard Feedback Loop'
            caption='Leaderboard standings are derived from scored matches and prediction accuracy, with the current user context kept visible so the product payoff is easy to understand.'
          />
        </Section>

        {/* 4. System architecture */}
        <Section eyebrow='03' title='System Architecture'>
          <p>
            The runtime is fully serverless on AWS. The React + TypeScript
            client is delivered through AWS Amplify; the API is a Node + Express
            app fronted by API Gateway and executed on Lambda; data lives in a
            serverless PostgreSQL database on Neon, accessed via Prisma using
            the <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>@prisma/adapter-neon</code> driver
            over WebSocket so cold starts stay cheap.
          </p>
          <ArchitectureDiagram />
          <p>
            The custom domain was purchased through Namecheap, while DNS is
            managed in Route 53 through a hosted zone that points the public
            frontend domain to Amplify.
          </p>
          <p>
            CloudWatch holds dashboards, alarms, and structured logs. SSM
            Parameter Store provides runtime configuration. GitHub Actions
            handles CI/CD, while Amplify deploys the frontend from the `main`
            branch and the backend deploy workflow packages and updates Lambda.
          </p>
        </Section>

        {/* 5. Tech decisions */}
        <Section eyebrow='04' title='Tech Decisions & Tradeoffs'>
          <div className='space-y-6'>
            <Decision
              title='Lambda + API Gateway over ECS'
              body='Traffic is bursty around match windows and idle in
                between. Lambda costs nothing when nobody is predicting, scales
                instantly under bursts, and removes a class of capacity
                planning work I did not need at this scale. The tradeoff is
                cold-start latency, which the Neon WebSocket adapter and
                Express boot time keep within an acceptable budget.'
            />
            <Decision
              title='Neon Postgres over RDS'
              body='I needed Postgres semantics (transactions, indexes, real
                joins) without paying for an idle RDS instance 24/7 or
                provisioning a proxy. Neon scales to zero, supports branching
                for migrations, and lets the same Prisma schema run unchanged
                in production.'
            />
            <Decision
              title='Prisma + adapter-neon over node-postgres'
              body='Prisma gives me a typed schema and migration tooling. The
                Neon adapter speaks the WebSocket protocol Lambda needs to
                avoid TCP cold connect overhead. Together they keep the
                serverless story clean from data layer up.'
            />
            <Decision
              title='Amplify over CloudFront + S3 directly'
              body='Amplify gives me CI integration, preview branches, and HTTPS
                without me wiring CloudFront, an OAC, and a deploy pipeline
                for a static SPA. The cost is some loss of fine-grained
                control, which I am happy to trade for time at this stage.'
            />
            <Decision
              title='Backward-compatible Prisma migrations'
              body='Database rollbacks in production are dangerous. I avoid
                them by writing migrations that are forward-only and
                backward-compatible &mdash; the previous code version still
                runs against the new schema. Application rollback then becomes
                "redeploy the previous Lambda artifact," not "restore the
                database."'
            />
          </div>
        </Section>

        {/* 6. CI/CD */}
        <Section eyebrow='05' title='CI/CD Pipeline'>
          <p>
            GitHub Actions builds, tests, packages, and deploys on every push
            to <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>main</code>.
            The backend workflow runs tests, packages a Lambda artifact, uploads
            it to S3, updates Lambda, and verifies the deployment with a health
            check. Frontend delivery is handled through Amplify Git integration.
          </p>
          <PipelineDiagram />
          <p>
            The Lambda artifact is uploaded to S3 with a versioned key so
            rollback is just a redeploy of the previous artifact &mdash; no
            rebuild required.
          </p>
        </Section>

        {/* 7. Reliability & observability */}
        <Section eyebrow='06' title='Reliability & Observability'>
          <p>
            CloudWatch is the source of truth in production. The dashboard
            and alarms are managed by Terraform under{' '}
            <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>infra/monitoring.tf</code>{' '}
            so the alerting story ships with the infrastructure, not after it.
          </p>

          <h3 className='mt-6 font-heading text-base uppercase tracking-[0.2em] text-cyan-400'>
            Dashboard <span className='text-slate-400 normal-case tracking-normal'>&mdash; pitchpulse26-prod-overview</span>
          </h3>
          <ul className='mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs'>
            {[
              'Lambda Invocations',
              'Lambda Errors',
              'Lambda Duration',
              'API Gateway 4xx',
              'API Gateway 5xx',
              'API Gateway Count',
            ].map((widget) => (
              <li
                key={widget}
                className='rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-300'
              >
                {widget}
              </li>
            ))}
          </ul>

          <h3 className='mt-8 font-heading text-base uppercase tracking-[0.2em] text-cyan-400'>
            Alarms
          </h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li className='rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-300'>
              <code className='text-cyan-300'>pitchpulse26-lambda-errors</code>{' '}
              &mdash; fires on any unhandled Lambda exceptions during a
              rolling window.
            </li>
            <li className='rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-300'>
              <code className='text-cyan-300'>pitchpulse26-api-5xx</code>{' '}
              &mdash; fires on API Gateway 5xx responses, the user-visible
              failure mode.
            </li>
            <li className='rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-slate-300'>
              <code className='text-cyan-300'>pitchpulse26-lambda-duration-high</code>{' '}
              &mdash; catches latency regressions before users do.
            </li>
          </ul>

          <h3 className='mt-8 font-heading text-base uppercase tracking-[0.2em] text-cyan-400'>
            Log Groups <span className='text-slate-400 normal-case tracking-normal'>&mdash; 14 day retention</span>
          </h3>
          <ul className='mt-3 space-y-2 text-sm font-mono'>
            <li className='rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-slate-300'>
              /aws/lambda/pitchpulse26-api
            </li>
            <li className='rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-slate-300'>
              /aws/apigateway/pitchpulse26
            </li>
          </ul>

          <ScreenshotFigure
            src='/pitchpulse26/cloudwatch-dashboard.png'
            alt='CloudWatch dashboard for PitchPulse26 showing Lambda invocations, errors, duration, and API Gateway 4xx metrics.'
            title='Production Monitoring'
            caption='Production monitoring is handled through a CloudWatch dashboard tracking Lambda invocations, errors, duration, and API Gateway failure signals so deployment and runtime issues are visible quickly.'
          />
        </Section>

        {/* 8. Rollback */}
        <Section eyebrow='07' title='Production Rollback'>
          <p>
            Production incidents need a known-good escape hatch. The rollback
            runbook lives in the repo at{' '}
            <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>docs/runbooks/deployment-rollback.md</code>{' '}
            and follows three rules:
          </p>
          <ul className='mt-4 space-y-3 text-sm md:text-base text-slate-300'>
            <Bullet>
              <strong className='text-slate-100'>Frontend:</strong> roll back
              through Amplify deployment history, or revert the bad commit on{' '}
              <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>main</code>{' '}
              and let CI redeploy.
            </Bullet>
            <Bullet>
              <strong className='text-slate-100'>Backend:</strong> redeploy
              the last known-good Lambda artifact from S3. No rebuild.
            </Bullet>
            <Bullet>
              <strong className='text-slate-100'>Database:</strong> avoid DB
              rollback entirely by keeping migrations
              backward-compatible. Code rollback alone is enough.
            </Bullet>
          </ul>
          <p className='mt-4 text-sm text-slate-400 italic'>
            Alarms without runbooks generate noise, not action. This one is
            written before the alarm fires, not after.
          </p>
        </Section>

        {/* 9. Security */}
        <Section eyebrow='08' title='Security Posture'>
          <ul className='space-y-3 text-sm md:text-base text-slate-300'>
            <Bullet>
              JWT authentication, 1-day expiry, secret loaded from environment.
            </Bullet>
            <Bullet>
              Passwords hashed with bcrypt (cost 10).
            </Bullet>
            <Bullet>
              Role-based access control: <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>user</code>{' '}
              and <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>admin</code>; admin
              endpoints gate result-setting.
            </Bullet>
            <Bullet>
              Email verification gating &mdash; unverified users cannot submit
              predictions.
            </Bullet>
            <Bullet>
              Zod input validation on every endpoint; Helmet for HTTP
              security headers; CORS restricted to the configured origin.
            </Bullet>
            <Bullet>
              Rate limiting on auth endpoints (20 requests / 15 minutes) and
              a 10kb request body cap to blunt abuse.
            </Bullet>
            <Bullet>
              Prediction lockout enforced at API and UI layers after kickoff.
            </Bullet>
          </ul>
        </Section>

        {/* 10. Outcomes */}
        <Section eyebrow='09' title='Outcomes & Operating Targets'>
          <p>
            The goal is not to claim production scale that does not exist; the
            goal is to operate against explicit targets I would defend in a
            review.
          </p>
          <dl className='mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm'>
            <Stat
              label='Lambda error rate'
              value='&lt; 1%'
              note='alarm trips above this'
            />
            <Stat
              label='API 5xx rate'
              value='&lt; 0.5%'
              note='user-visible failures'
            />
            <Stat
              label='Time to rollback'
              value='&lt; 5 min'
              note='via S3-archived Lambda artifact'
            />
            <Stat
              label='Log retention'
              value='14 days'
              note='cost / compliance lever'
            />
            <Stat
              label='Cold-start budget'
              value='&lt; 1.5s p95'
              note='Neon WS adapter assumed'
            />
            <Stat
              label='Predictions / match'
              value='1 per user'
              note='enforced by unique constraint'
            />
          </dl>
        </Section>

        {/* 11. What's next */}
        <Section eyebrow='10' title="What I'd Do Next">
          <ul className='space-y-3 text-sm md:text-base text-slate-300'>
            <Bullet>
              Add canary deploys via Lambda alias weighting (10% &rarr; 100%)
              so deploys are revertible without a redeploy.
            </Bullet>
            <Bullet>
              Refactor the Matches page to reduce orchestration complexity and
              split critical data loads from secondary UI context.
            </Bullet>
            <Bullet>
              Move to RDS Proxy or pgBouncer if concurrent prediction load
              starts to saturate Neon connections during a kickoff window.
            </Bullet>
            <Bullet>
              Add Sentry on the client to catch frontend errors I currently
              do not see in CloudWatch.
            </Bullet>
            <Bullet>
              Author a k6 load test that hits{' '}
              <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>/api/matches</code>{' '}
              and{' '}
              <code className='px-1 py-0.5 rounded bg-slate-900 text-cyan-300 text-[12px]'>/api/predictions</code>{' '}
              under realistic match-window load and capture p95 latency
              alongside cold-start rate.
            </Bullet>
          </ul>
        </Section>

        {/* Footer CTAs */}
        <section className='mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 text-center'>
          <p className='font-heading text-xl text-slate-50'>
            Want the full source?
          </p>
          <p className='mt-2 text-sm text-slate-400'>
            Frontend, server, Terraform, and runbooks all live in one repo.
          </p>
          <div className='mt-5 flex flex-wrap justify-center gap-3'>
            {project?.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-1.5 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300'
              >
                Open GitHub
                <ExternalLink size={14} aria-hidden='true' />
                <span className='sr-only'>(opens in new tab)</span>
              </a>
            )}
            <Link
              href='/work'
              className='inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-400 transition'
            >
              More Work
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

/* ---------- Local building blocks ---------- */

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='mt-14 md:mt-16'>
      <p className='text-xs font-medium tracking-[0.25em] uppercase text-cyan-400'>
        {eyebrow}
      </p>
      <h2 className='mt-2 font-heading text-2xl md:text-3xl font-semibold text-slate-50'>
        {title}
      </h2>
      <div className='mt-5 text-base md:text-[17px] leading-relaxed text-slate-300 space-y-4'>
        {children}
      </div>
    </section>
  );
}

function Decision({ title, body }: { title: string; body: string }) {
  return (
    <div className='rounded-xl border border-slate-800 bg-slate-900/40 p-5'>
      <h3 className='font-heading text-lg text-slate-50'>{title}</h3>
      <p className='mt-2 text-sm md:text-[15px] leading-relaxed text-slate-300'>
        {body}
      </p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex items-start gap-3'>
      <span
        aria-hidden='true'
        className='mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0'
      />
      <span>{children}</span>
    </li>
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className='rounded-xl border border-slate-800 bg-slate-900/60 p-4'>
      <dt className='text-[10px] uppercase tracking-[0.2em] text-slate-500'>
        {label}
      </dt>
      <dd
        className='mt-2 font-heading text-xl text-slate-50'
        dangerouslySetInnerHTML={{ __html: value }}
      />
      {note && (
        <p className='mt-1 text-[11px] text-slate-400'>{note}</p>
      )}
    </div>
  );
}

function ScreenshotFigure({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title: string;
  caption: string;
}) {
  return (
    <figure className='mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40'>
      <div className='border-b border-slate-800 px-4 py-3'>
        <p className='text-[10px] uppercase tracking-[0.25em] text-cyan-400'>
          {title}
        </p>
      </div>
      <div className='bg-slate-950/60 p-2 md:p-3'>
        <Image
          src={src}
          alt={alt}
          width={1365}
          height={768}
          className='h-auto w-full rounded-xl border border-slate-800'
        />
      </div>
      <figcaption className='px-4 py-4 text-sm leading-relaxed text-slate-400'>
        {caption}
      </figcaption>
    </figure>
  );
}

/* ---------- Inline diagrams ---------- */

function ArchitectureHero() {
  return (
    <div
      role='img'
      aria-label='High-level architecture: user traffic resolves through Route 53 to Amplify, the React app talks to API Gateway and Lambda, Prisma connects to Neon PostgreSQL, and CloudWatch, SSM, and GitHub Actions support runtime operations.'
      className='mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8'
    >
      <p className='text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-4'>
        Runtime overview
      </p>
      <div className='grid grid-cols-1 gap-4 text-center text-xs md:text-sm'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-4 md:items-center'>
          <DiagramNode label='User Browser' />
          <DiagramNode label='Route 53 (DNS)' tone='cyan' />
          <DiagramNode label='AWS Amplify' tone='cyan' />
          <DiagramNode label='React + TypeScript Frontend' tone='cyan' />
        </div>
        <DiagramArrow direction='down' />
        <div className='grid grid-cols-1 gap-3 md:grid-cols-4 md:items-center'>
          <DiagramNode label='API Gateway' tone='cyan' />
          <DiagramNode label='AWS Lambda' tone='cyan' />
          <DiagramNode label='Express API' tone='cyan' />
          <DiagramNode label='Prisma ORM' tone='cyan' />
        </div>
        <DiagramArrow direction='down' />
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:items-center'>
          <SidecarNode label='Namecheap (Registrar)' />
          <DiagramNode label='Neon PostgreSQL' tone='orange' />
          <SidecarNode label='SSM + CloudWatch' />
        </div>
      </div>
      <div className='mt-5 grid grid-cols-2 gap-2 text-center text-[11px] md:grid-cols-4'>
        <SidecarNode label='GitHub Actions' />
        <SidecarNode label='S3 Lambda Artifacts' />
        <SidecarNode label='Rollback Runbook' />
        <SidecarNode label='CloudWatch Alarms' />
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div
      role='img'
      aria-label='Detailed architecture flow showing DNS, frontend delivery, backend runtime, database access, and operational support services for PitchPulse26.'
      className='my-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6'
    >
      <p className='text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-4'>
        High-level system architecture
      </p>
      <div className='space-y-6'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch text-xs md:text-sm'>
          <DiagramColumn
            title='Access'
            nodes={[
              { label: 'User Browser' },
              { label: 'Namecheap (Registrar)', tone: 'muted' },
              { label: 'Route 53 Hosted Zone', tone: 'cyan' },
            ]}
          />
          <DiagramArrow direction='right' />
          <DiagramColumn
            title='Frontend'
            nodes={[
              { label: 'AWS Amplify', tone: 'cyan' },
              { label: 'React + TypeScript + Vite', tone: 'cyan' },
              { label: 'Custom domain: www.pitchpulse26.com', tone: 'muted' },
            ]}
          />
          <DiagramArrow direction='right' />
          <DiagramColumn
            title='API & Data'
            nodes={[
              { label: 'API Gateway', tone: 'cyan' },
              { label: 'Lambda + Express API', tone: 'cyan' },
              { label: 'Prisma ORM', tone: 'cyan' },
              { label: 'Neon PostgreSQL', tone: 'orange' },
            ]}
          />
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 text-xs md:text-sm'>
          <DiagramColumn
            title='Configuration & Observability'
            nodes={[
              { label: 'SSM Parameter Store', tone: 'muted' },
              { label: 'CloudWatch Logs', tone: 'muted' },
              { label: 'Dashboard + Alarms', tone: 'muted' },
            ]}
          />
          <DiagramColumn
            title='Delivery & Recovery'
            nodes={[
              { label: 'GitHub Actions CI/CD', tone: 'muted' },
              { label: 'S3 Versioned Lambda Artifacts', tone: 'muted' },
              { label: 'Documented Rollback Runbook', tone: 'muted' },
            ]}
          />
        </div>

        <div className='rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs md:text-sm text-slate-300'>
          <p className='text-slate-500 uppercase tracking-wider text-[10px] mb-2'>
            Primary request path
          </p>
          <p className='leading-relaxed'>
            User Browser <span className='text-slate-500'>&rarr;</span> Route 53{' '}
            <span className='text-slate-500'>&rarr;</span> Amplify{' '}
            <span className='text-slate-500'>&rarr;</span> React frontend{' '}
            <span className='text-slate-500'>&rarr;</span> API Gateway{' '}
            <span className='text-slate-500'>&rarr;</span> Lambda / Express{' '}
            <span className='text-slate-500'>&rarr;</span> Prisma{' '}
            <span className='text-slate-500'>&rarr;</span> Neon PostgreSQL
          </p>
        </div>
      </div>
    </div>
  );
}

function PipelineDiagram() {
  const stages = [
    'git push',
    'Build + Test',
    'Lambda artifact \u2192 S3',
    'Terraform apply',
    'Deploy Lambda + Amplify',
  ];
  return (
    <div
      role='img'
      aria-label='CI/CD pipeline stages from git push through deployment.'
      className='my-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6'
    >
      <p className='text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-4'>
        GitHub Actions pipeline
      </p>
      <ol className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs md:text-[13px]'>
        {stages.map((stage, i) => (
          <li key={stage} className='flex items-center gap-3 md:flex-col md:gap-2 md:flex-1'>
            <DiagramNode label={stage} tone={i === 0 ? 'default' : i === stages.length - 1 ? 'orange' : 'cyan'} />
            {i < stages.length - 1 && (
              <span
                aria-hidden='true'
                className='text-slate-600 md:hidden'
              >
                &darr;
              </span>
            )}
            {i < stages.length - 1 && (
              <span
                aria-hidden='true'
                className='hidden md:inline text-slate-600 self-center'
              >
                &rarr;
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function DiagramNode({
  label,
  tone = 'default',
}: {
  label: string;
  tone?: 'default' | 'cyan' | 'orange' | 'muted';
}) {
  const tones = {
    default: 'border-slate-700 bg-slate-900 text-slate-200',
    cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200',
    orange: 'border-orange-500/40 bg-orange-500/10 text-orange-200',
    muted: 'border-slate-800 bg-slate-950/40 text-slate-400',
  } as const;
  return (
    <div
      className={`rounded-lg border px-3 py-2 ${tones[tone]} font-medium`}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
}

function DiagramArrow({
  direction,
}: {
  direction: 'down' | 'right';
}) {
  return (
    <span
      aria-hidden='true'
      className={`mx-auto block text-slate-600 text-lg leading-none ${
        direction === 'right' ? 'hidden md:block self-center' : ''
      }`}
    >
      {direction === 'right' ? '\u2192' : '\u2193'}
    </span>
  );
}

function SidecarNode({ label }: { label: string }) {
  return (
    <div className='rounded-lg border border-slate-800 bg-slate-950/40 px-2 py-1.5 text-slate-400'>
      {label}
    </div>
  );
}

function DiagramColumn({
  title,
  nodes,
}: {
  title: string;
  nodes: Array<{
    label: string;
    tone?: 'default' | 'cyan' | 'orange' | 'muted';
  }>;
}) {
  return (
    <div className='rounded-xl border border-slate-800 bg-slate-900/40 p-4'>
      <p className='text-slate-500 uppercase tracking-wider text-[10px] mb-3'>
        {title}
      </p>
      <div className='space-y-2'>
        {nodes.map((node) => (
          <DiagramNode
            key={node.label}
            label={node.label}
            tone={node.tone ?? 'default'}
          />
        ))}
      </div>
    </div>
  );
}
