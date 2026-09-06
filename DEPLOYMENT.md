# Deployment Handover

## Railway

| Field | Value |
|---|---|
| Workspace | Mohamed zak's Projects (personal workspace) — see note below |
| Project | `Prmote` (existing shared project; other services: `the-han-cafe-website`, `slough-automotives-website`, `Muscle-Massacre-crm`, `Postgres`, `PRMOTE`) |
| Service | `klassmarquees-website` |
| Production URL | _pending — filled in once the domain is generated_ |
| GitHub repository | `qaptures-creator/klassmarquees` |
| Deploy branch | `claude/klassmarquees-build-deploy-1w5zs6` |
| Final commit SHA | _pending — filled in after the last push_ |
| Build/deploy status | _pending_ |

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
| `NEXT_PUBLIC_SITE_URL` | _pending — set once the domain is generated_ |

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

_This section is completed at the end of the deployment — see the final
message in this session for the live confirmation, or re-check
`mcp__Railway__list-deployments` / `get-logs` for the current state._
