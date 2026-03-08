---
paths:
  - "dashboard/**"
  - "infra/**/dash/**"
---

# Dashboard

- Source: `dashboard/`
- Infra (beta, GitOps): `infra/flux/apps/saved-beta/dash/`
- Local dev manifests: `infra/local/dash/`

## Architecture
- Feature-Sliced Design (FSD): `app/` → `src/pages/` → `src/widgets/` → `src/features/` → `src/entities/` → `src/shared/`
- RSC by default; client components only for interactivity/hooks
- React Compiler active — no manual `useMemo`/`useCallback`

## Stack
- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 (no config file, CSS-first)
- shadcn/ui + DiceUI + Base UI; base UI primitives in `src/shared/ui/`
- Auth boundary at `src/proxy.ts`; Auth0 v4
- Consumes TypeScript SDK (`@saved/client` from `sdk-typescript`)
