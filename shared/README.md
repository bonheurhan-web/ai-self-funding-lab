# Shared

Reusable capabilities shared by multiple projects belong here.

## Admission rule

Code enters `shared/` only when:

1. At least two projects need the same behavior.
2. The behavior has a stable, documented contract.
3. Reuse reduces maintenance without coupling project release cycles.
4. Tests and ownership are defined.

Project-specific business logic stays inside its project.

## Areas

- `ui/` - design tokens and presentation primitives
- `seo/` - metadata, structured data, sitemap, and indexing helpers
- `analytics/` - event contracts and privacy-safe analytics adapters
- `deployment/` - provider-neutral deployment conventions and reusable configuration
- `testing/` - test fixtures, helpers, and shared quality gates
- `components/` - tested framework components used by multiple projects
- `utils/` - small framework-neutral pure utilities

Breaking changes require migration notes and tests for known consumers.
