# Cloudflare / Lovable Bun Lockfile Fix Prompt

Gebruik deze prompt voor projecten die falen op:

```text
bun install --frozen-lockfile
error: lockfile had changes, but lockfile is frozen
```

```text
Ik krijg bij deployen via Cloudflare/Lovable deze fout:

bun install --frozen-lockfile
error: lockfile had changes, but lockfile is frozen

Los dit project lokaal op zonder git history te herschrijven. Controleer eerst welke lockfile gebruikt wordt (`bun.lock` of `bun.lockb`) en welke Bun-versie de deploy gebruikt. Draai daarna lokaal dezelfde Bun-versie als in de deploy-log, voer `bun install` uit om de lockfile te synchroniseren, en controleer met:

bun install --frozen-lockfile
bun run build

Commit alleen de noodzakelijke gewijzigde bestanden, meestal `bun.lock`, `bun.lockb` of eventueel gegenereerde TanStack route-bestanden. Push daarna normaal naar de huidige branch. Gebruik geen force push, rebase, amend of squash, omdat dit Lovable-projectgeschiedenis kan breken.

Geef aan:
- welke Bun-versie is gebruikt
- welke bestanden gewijzigd zijn
- of `bun install --frozen-lockfile` slaagde
- of de build slaagde
- welke commit is gepusht
```

Kortere versie:

```text
Fix de Cloudflare/Lovable Bun deploy error `lockfile had changes, but lockfile is frozen`. Gebruik dezelfde Bun-versie als in de deploy-log, draai `bun install`, verifieer met `bun install --frozen-lockfile` en `bun run build`, commit alleen noodzakelijke lockfile/generated wijzigingen, en push normaal zonder history rewrite.
```
