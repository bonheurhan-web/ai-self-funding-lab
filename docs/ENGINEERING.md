# Engineering Standard

This standard applies to every project unless an approved decision record documents an exception.

## Simplicity

- Use the smallest architecture that satisfies the current validated requirement.
- Each project must remain independently buildable, testable, deployable, and removable.
- Promote code into `shared/` only after at least two projects need the same stable behavior.
- Do not place project-specific business logic in `shared/`.

## Naming

- Repositories, directories, routes, and package names: `kebab-case`.
- TypeScript and JavaScript files: `kebab-case`; React components: `PascalCase`.
- Variables and functions: `camelCase`.
- Types and interfaces: `PascalCase`.
- Constants: `UPPER_SNAKE_CASE` only for immutable cross-module constants.
- Tests mirror the source name: `name.test.ts` or `name.spec.ts`.
- Environment variables: `UPPER_SNAKE_CASE`; public variables must include the framework's public prefix.
- Project names must be unique and stable after launch.

## Testing

- Business and transformation logic must be pure where practical and covered by unit tests.
- Every fixed bug requires a regression test.
- User-critical flows require end-to-end tests.
- Tests must be deterministic, isolated, and runnable without production credentials.
- External services must be mocked in unit tests; integration tests must use dedicated test accounts.
- A project may define stricter coverage targets. Company-wide percentage targets are not used as a substitute for meaningful assertions.

## Commits

Use Conventional Commits:

`type(scope): imperative summary`

Allowed types: `feat`, `fix`, `docs`, `test`, `refactor`, `perf`, `build`, `ci`, `chore`, `revert`.

- One logical change per commit.
- Product scope uses the project slug; company infrastructure uses `company`, `dashboard`, or `shared`.
- Never commit secrets, generated dependencies, build output, or unrelated formatting.
- Examples:
  - `docs(company): define portfolio decision gates`
  - `ci(micro-dev-tools): add deployment verification`
  - `fix(shared-seo): escape structured data output`

## CI

Every project CI pipeline must run, in order:

1. Dependency installation from a lockfile.
2. Static analysis and formatting checks.
3. Unit tests.
4. Production build.
5. Relevant integration or end-to-end tests.

Additional rules:

- Pull requests and the default branch must run CI.
- Workflows use path filters so one project does not rebuild the entire portfolio.
- Deployments require a successful production build.
- Production deployment jobs use protected environments.
- Credentials come from platform secret stores and receive minimum required permissions.
- Shared changes run tests for every known consumer.
- CI versions and actions must be pinned to a major version or immutable revision.

## Definition of done

A change is done only when code, tests, documentation, telemetry, and deployment configuration required by that change are complete and verified.
