# Nodalia web: design system

The site applies the Nodalia Design Language (NDL, from `nodalia-design`) to the web. It is a
Nodalia-specific direction, not a copy of any other site, and it was not derived from a set of
reference sites. Tokens live at the top of `assets/styles.css`; pages use the names, never raw values.

## Principles

1. **Islands on a canvas.** Content sits on rounded white (light) or raised (dark) surfaces over a
   neutral window colour. Depth comes from the surface step and a soft shadow, not from effects.
2. **Bold type does the work.** Large Sora headlines, calm Inter text. No decoration competes with them.
3. **One accent per app, used for meaning.** Links, focus, status and the app's own signature. Never as a wash.
4. **No decorative gradients, glows, blurred halos or gradient text.** Product screenshots and the
   per-app signatures (identity.js) are the only places with richer imagery.
5. **Light and dark are equal.** The site follows the system and the header button overrides it (`data-theme`
   on `<html>`, saved in `localStorage`). Screenshot stages are always dark islands in either theme.
6. **Say what exists.** Real screenshots, real versions, real limits. No simulated windows or invented numbers.

## Colour

| Role | Light | Dark | Use |
|---|---|---|---|
| `--bg` (surface.window) | `#E4E6EB` | `#0B0C10` | page canvas |
| `--bg-2` (surface.sunken) | `#ECEEF2` | `#101116` | alternating bands |
| `--surface` (surface.panel) | `#FFFFFF` | `#15171E` | islands, cards, panels |
| `--surface-2` | `#F6F7F9` | `#1D2029` | nested fills, chips |
| `--ink` | `#15171E` | `#EEF0F4` | headlines, primary buttons (fill) |
| `--on-ink` | `#FFFFFF` | `#0C0D13` | text on primary buttons |
| `--text` | `#444A5C` | `#B4B8C6` | body |
| `--muted` / `--soft` | `#575E72` / `#6A7186` | `#9DA2B3` / `#7E8295` | secondary text, metadata |
| `--line` / `--line-2` | ink at 10% / 18% | white at 8% / 16% | hairlines, borders |
| `--ok` / `--warn` | `#1E7A4A` / `#8A5A0B` | `#8FD9B2` / `#E2C08A` | status text |
| `--accent` | app ramp `-l` | app ramp `-d` | links, focus ring, tags, signatures |

Each app sets its accent through `.accent-<name>` (`--accent-l/-d`, `--accent-fill-*`, `--accent-subtle-*`),
taken from the NDL accent ramps. The `-l` values meet 4.5:1 on white and the `-d` values on `#15171E`; use
the text variant for text and the fill variant for buttons and dots. Translucent colours are built from the
channel variables (`--fg`, `--shade`, `--bg-rgb`) so they follow the theme.

## Typography

- **Sora** (display, 600): h1–h3, large numbers, wordmark-like titles. Tracking −0.035em, balanced wrapping.
- **Inter** (text, 400/500/600): everything else. Both self-hosted, variable, latin subset, SIL OFL 1.1.
- **Monospace** (system stack): versions, specs, shortcuts, code.

| Step | Size | Line height | Use |
|---|---|---|---|
| Hero title | `clamp(44px, 6vw, 84px)` | 1.0 | home h1 |
| Section title | `clamp(34px, 4.4vw, 60px)` | 1.1 | h2 |
| Card title | 22–28px | 1.15 | tiles, panels |
| Lead | 18–21px | 1.65 | hero and section intros |
| Body | 16px | 1.7 | prose, max ~68ch |
| Small / meta | 13–14px | 1.5 | tags, metadata, footers |
| Mono | 12–13px | 1.5 | versions, specs |

## Spacing and layout

- 4px base. Common steps: 8, 12, 16, 24, 32, 48, 72, 104.
- Container 1200px (`--max`), 32px side gutter (24px on phones). Sections breathe with 88–112px vertical padding.
- The home page is an index of six families (System, Office, Creative, Engineering, Enterprise, Everyday).
  Each family is a 6-column tile grid; tiles span 2 columns, and the 2-, 5- and 7-app families use wider tiles
  so no row is left orphaned.
- Layout never scrolls horizontally at 390px; wide content (code, tab strips) scrolls inside its own container.

## Shape and depth

- Radius: 10px (controls), 16px (cards), 22–28px (islands, showcase), 999px (tags, pills).
- Borders: 1px `--line`/`--line-2` on islands in dark; light islands rely on the white-on-grey step plus a soft shadow.
- Shadow: one soft, large and low-opacity shadow for raised islands, scaled by `--sh` (0.2 light, 1 dark). None on text.

## Components

- **Buttons.** Primary: `--ink` fill, `--on-ink` text. Secondary: `--surface` with `--line-2` border. Quiet text link
  with arrow. 46px high, 11px radius, hover shifts fill (no scale), visible 2px accent focus ring.
- **Theme toggle** and **language picker** sit in the top bar; both are keyboard operable and labelled.
- **Top bar.** Sticky, translucent window colour with a hairline; wordmark swaps between white and black variants.
- **Suite index (home hero).** Six rows: family name, the apps' icons, arrow; anchors to the family section.
- **App tile.** Screenshot on top (with the status tag overlaid), app icon + name + category, one-line promise,
  short description, platforms and a "Conocer …" link. Accent colours the link only.
- **Showcase.** Tabs per app over a dark stage with the real screenshot; auto-advances, pauses on interaction,
  respects `prefers-reduced-motion`.
- **Release strip.** Monospace list of the latest versions, read from GitHub at build time and refreshed in the browser.
- **Download button.** Detects the OS: Apple + DMG on macOS, penguin + AppImage on Linux, installer on Windows.
  Versions and URLs are never edited by hand.
- **Product page.** Hero with signature, download panel, guided three-step demonstration, features, status, footer.

## Imagery and icons

- App icons are the Nodalia portraits (a historical figure per app) from `getnodalia/foundation/brand/`.
- Screenshots are real, in Spanish, light and dark where the app has both, self-hosted in `assets/screens/<app>/`
  (1440px JPEG) with translated alt text. Demo content in them must be calm and beautiful.
- UI icons are inline SVG, 24px grid, rounded line style at 1.6–2px stroke; filled for brand marks only.
- No stock photography, emoji as icons, or illustrations that say nothing.

## Motion

Motion is native CSS, layered on top of a page that already reads without it. Every effect sits behind
`@supports` and `prefers-reduced-motion: no-preference`; without them the page shows its final state.

- **Between pages.** Cross-document view transitions (`@view-transition { navigation: auto }`): the top bar
  stays put, content cross-fades, and an app's icon morphs from its home tile to its product page
  (`view-transition-name: vt-<app>`).
- **On scroll.** Scroll-driven animations (`animation-timeline: view()` / `scroll()`), all on the
  compositor: a native progress line under the top bar, tile entrances and a slight screenshot drift,
  sticky family headings, and the light/dark wipe (a `clip-path` driven by a named view timeline).
- **Numbers.** The facts strip counts up with an `@property` integer; the markup holds the final value.
- **Hero and marquee.** One staged entrance for the giant headline; the portrait strip scrolls slowly and
  pauses on hover and focus, with masked edges.
- Durations are 200-500ms ease-out for hover and reveal. Nothing animates forever except the marquee,
  which stops under `prefers-reduced-motion`. Content is visible without JavaScript.

## Home page rhythm

Hero (giant Sora headline, suite index) → portrait strip → release strip → light/dark wipe over real
Lienzo, Toma and Torno screenshots (radio tabs, `:has()`, no JavaScript) → facts → five families.

## Accessibility

Text contrast ≥ 4.5:1 in both themes, visible focus on every control, landmarks and heading order, `lang` per
page, `aria-pressed` on the theme toggle, translated labels, no meaning by colour alone.
