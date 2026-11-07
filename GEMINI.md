# The Artihc Studio — Antigravity Workspace Guidelines

Welcome to The Artihc Studio workspace. This document establishes shared context, coding conventions, and collaboration protocols for developers and AI agents working on this project.

---

## 1. Project Overview & Architecture

- **`frontend/`**: The core web application built with **React 18**, **Vite**, **React Router v6**, and **Lucide React**.
- **`stitch_the_arthic_studio_atelier/`**: Design benchmarks, monograph references, and curated atelier philosophy prototypes (`tectonic_atelier`, `the_artihc_studio_genesis_atelier_philosophy`, etc.).
- **`.agents/skills/`**: Active design and craft skills:
  - `taste`: Aesthetic discernment, quiet luxury, typography, and art direction.
  - `impeccable`: Craft perfection, optical alignment, 8-state component coverage, and zero rough edges.
  - `emilkowalski`: Micro-interactions, spring physics, layout transitions, and high-performance UI motion.

---

## 2. Multi-Developer Collaboration Protocols (Dev 1 & Dev 2)

To ensure seamless parallel work between two developers without merge conflicts or code overwrites:

### A. Branching Strategy
- **Never commit directly to `main`**. The `main` branch is production-ready and protected.
- Feature and task branches must follow clear developer namespaces:
  - Developer 1: `dev1/<feature-name>` (e.g., `dev1/monograph-gallery`)
  - Developer 2: `dev2/<feature-name>` (e.g., `dev2/concierge-form`)
  - Shared hotfixes: `fix/<issue-description>`

### B. Syncing & Conflict Avoidance
- **Start of Day / Feature**: Rebase against the latest `main`:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b dev1/your-feature
  ```
- **Before Submitting / Merging**: Rebase on `origin/main` to keep git history linear and clean:
  ```bash
  git fetch origin
  git rebase origin/main
  ```
- **Modular Boundaries**: Keep changes localized to respective modules (e.g., separating component files, styling modules, and routing configs).

### C. Commit Message Standards
Follow Conventional Commits:
- `feat: <description>` — New features
- `fix: <description>` — Bug fixes
- `style: <description>` — Visual polish / formatting (aligning with `impeccable` & `taste`)
- `refactor: <description>` — Code restructuring without feature changes
- `docs: <description>` — Documentation updates

---

## 3. Engineering & Craft Standards for Antigravity

Whenever Antigravity writes or refactors code:
1. **Apply Workspace Skills**: Reference and adhere to `.agents/skills/taste`, `.agents/skills/impeccable`, and `.agents/skills/emilkowalski`.
2. **Component Completeness**: Always implement full state handling (default, hover, active, focus-visible, loading, empty, error).
3. **Build Verification**: Before marking a task complete or creating a commit, verify that the project builds cleanly:
   ```bash
   cd frontend && npm run build
   ```
4. **Preserve Comments & Docs**: Maintain documentation integrity across all touched files.

