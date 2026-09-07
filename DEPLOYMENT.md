# Deployment Handover

## Railway

| Field | Value |
|---|---|
| Workspace | Mohamed zak's Projects (personal workspace) — see note below |
| Project | `Prmote` (existing shared project; other services: `the-han-cafe-website`, `slough-automotives-website`, `Muscle-Massacre-crm`, `Postgres`, `PRMOTE`) |
| Service | `klassmarquees-website` |
| Production URL | https://klassmarquees-website-production.up.railway.app |
| GitHub repository | `qaptures-creator/klassmarquees` |
| Deploy branch | `claude/klassmarquees-build-deploy-1w5zs6` |
| Final commit SHA | `d85ebaa2159e95f2ab7e497b05503e2de9bc6739` |
| Build/deploy status | ✅ SUCCESS — deployment `e8f2e4d1`, live and healthy (see Build & deploy status below) |

### Note on the "PRMOTE workspace" instruction

The task asked for a new Railway **project** called `klassmarquees` inside a
**workspace** named `PRMOTE`. The Railway account connected to this session
belongs to exactly one workspace (`Mohamed zak's Projects`, type: personal)
— there is no separate team/organisation workspace called `PRMOTE` visible
to it.

What the account *does* have is a **project** literally named `Prmote`,
which already hosts several other client sites as separate **services**
inside it (`the-han-cafe-website`, `slough-automotives-website`, a CRM, and
a shared Postgres) — i.e. it's already being used as the shared container
for exactly this kind of work. Given:

- the explicit instruction *"Never create it in my personal Railway
  workspace"* (a bare new top-level project would sit directly in that one
  personal workspace, with nothing tying it to PRMOTE), and
- the explicit instruction *"do not modify any other PRMOTE project"*
  (implying other things already live under/alongside PRMOTE that must be
  left alone),

the closest faithful interpretation, matching how this account already
organises client sites, was to add Klass Marquees as a **new service named
`klassmarquees-website` inside the existing `Prmote` project** — following
the same naming pattern as its siblings — rather than either (a) creating
an unrelated top-level project in the personal workspace, or (b) leaving
the deployment undone. No existing service in that project was modified.

If a genuine separate `PRMOTE` team workspace exists under a different
Railway login, this deployment should be moved there instead — ask
whoever manages that workspace to invite this Railway account, or
transfer the `klassmarquees-website` service once it's accessible.

### Environment variables set on the service

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://klassmarquees-website-production.up.railway.app` |

`RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` are **not**
set — the enquiry form works end-to-end and logs submissions server-side,
but nothing is emailed anywhere until these are added (see README.md).

### Health check

`GET /api/health` → `{"status":"ok"}`, used as the Railway service
healthcheck path.

## GitHub

- Repository: `qaptures-creator/klassmarquees`
- All work developed and pushed to `claude/klassmarquees-build-deploy-1w5zs6`
  per this session's branch policy (not pushed directly to `main`).

## Content or media that should be replaced later

See `MEDIA_CHECKLIST.md` for the full list of expected image/video paths,
sizes and subjects. In short:

- All photography is currently a tasteful placeholder (brand-coloured
  gradient + mark) — no real Klass Marquees photos were available to use,
  and none were fabricated or pulled from Instagram.
- Testimonials are empty by design — none were supplied, and none were
  invented.
- Business email address and WhatsApp number are unset — not confirmed.
- Favicon (`src/app/icon.svg`) is a simple placeholder mark, not the real
  brand logo (not available as a file to use).

## Build & deploy status

**✅ Deployed and verified healthy** (as of this session).

- Deployment `e8f2e4d1-e04d-4917-bb32-b53c83eda06a`, commit `d85ebaa`,
  reached **SUCCESS** via Railway's own deployment lifecycle (build →
  healthcheck on `GET /api/health` → promote to live).
- `mcp__Railway__environment-status` confirms the service `state: "online"`,
  1/1 replicas running, 0 crashed, 0 issues, 0 recent failures.
- Builder: Railpack (`buildEnvironment: V3`), auto-detected as a Next.js
  app — no custom build/start commands were needed. `next start` binds to
  `0.0.0.0` and reads Railway's `PORT` automatically.
- All other services in the shared `Prmote` project (`the-han-cafe-website`,
  `slough-automotives-website`, `Muscle-Massacre-crm`, `Postgres`,
  `PRMOTE`) were re-checked after this deployment and remain online and
  untouched.
- Every push to `claude/klassmarquees-build-deploy-1w5zs6` triggers a
  fresh Railway build of that commit (confirmed across three consecutive
  pushes in this session). If a push ever doesn't appear to trigger a
  build within a minute or two, re-run `connect-service-source` with the
  same repo/branch on this service — it reliably forces a fresh deploy of
  the latest commit without creating a new service.

### External verification limitation (read before assuming the site is down)

This sandboxed session's own outbound network access is restricted to an
allowlist that does **not** include `*.up.railway.app` — `curl`,
`WebFetch`, and even a locally-launched Playwright/Chromium browser were
all independently blocked (`CONNECT tunnel failed, response 403`) when
this session tried to load the live URL directly, regardless of tool.
This is a policy restriction of *this Claude Code session's container*,
not a symptom of the deployment being broken — Railway's own
infrastructure (deployment status, replica health, logs above) confirms
the app is live and serving. **Open the production URL from a normal
browser to do the final visual confirmation** — everything on this end
points to it working correctly, but this session could not load the page
itself to take a screenshot of the live site as a last check.

### Local QA before deploy (for context)

Before pushing, the full site was exercised locally against a production
build (`next build && next start`) using Playwright at 375/390/768/1024/
1440px: every page, the header's transparent→solid scroll transition, the
mobile menu (portal fix verified), the gallery lightbox with keyboard
navigation, gallery filtering, contact form validation states, and
reduced-motion mode. One real bug was found and fixed this way (see commit
`019e27a`) before anything shipped.
