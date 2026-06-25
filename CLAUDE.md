# Entify Design System — Workflow

## Figma → Storybook → GitHub publish workflow

This project's source of truth is Figma. Here is how a design change makes it to a link other people can open.

1. **Figma update.** User updates a component in Figma.
2. **Tell Claude.** User shares the Figma link (or describes what changed). Claude pulls the current design data via the Figma MCP tools (`get_design_context`, `get_variable_defs`, `get_screenshot`, etc.) — no manual copying of values needed.
3. **Claude updates code.** Claude edits the matching React component and its `.stories.tsx` file in `src/components/` to match the new Figma state. Storybook's local dev server (`npm run storybook`, localhost:6006) reflects this immediately.
4. **Push to GitHub.** Once changes look right, they're committed and pushed to `github.com/tunafuna/entify-website`. This repo holds the source code only — it does not by itself show a browsable Storybook.
5. **Publish (planned, not yet set up).** A GitHub Pages deployment will take the *built* Storybook (`npm run build-storybook` output — static HTML/CSS/JS) and publish it at `https://tunafuna.github.io/entify-website/`. Anyone with that link can browse the current component library without running anything locally or needing files shared with them.

Status: steps 1–4 work today. Step 5 (auto-build + GitHub Pages publish on push to `main`) is the next thing to implement.

## Key facts

- Figma is the absolute source of truth — every component, variant, and token should match it exactly.
- The user is a Product Designer with no coding experience. Claude does all implementation; the user provides Figma links/descriptions and direction.
- Local dev: `npm run storybook` → http://localhost:6006
- Build for publishing: `npm run build-storybook` → outputs a static `storybook-static/` folder
