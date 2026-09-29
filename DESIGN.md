---
name: Field Operations & Services Architecture
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system serves field operations, specialized trade technicians, and dispatch directors navigating complex logistical workflows across multi-trade service environments. The visual language blends high-density enterprise utility with the precision of technical instrumentation. 

The aesthetic is grounded in a **Modern Technical / Industrial Precision** style:
- Interfaces favor structural integrity, unambiguous information architecture, and rigorous spatial cadence.
- High-contrast visual cues eliminate cognitive fatigue under varied field conditions (direct sunlight on mobile tablets, low-light mechanical rooms, and high-frequency dispatch control rooms).
- Micro-details mimic precision tools: discrete dividers, calibrated data tables, high-visibility status indicators, and tactical input states designed for zero accidental input.

## Colors

The palette establishes an authoritative, technical atmosphere using deep maritime slates balanced with high-luminance functional signals.

- **Primary Canvas & Chrome:**
  - Base background: `#F8FAFC` (Canvas Slate Light)
  - Surface elevations: `#FFFFFF` (Surface Elevated) and `#F1F5F9` (Surface Recessed / Table Headers)
  - Primary Structural & Text: `#0F172A` (Slate 900) for headers and core branding; `#1E293B` (Slate 800) for high-contrast card structures and primary action buttons.
  - Secondary Text: `#475569` (Slate 600) and Subtle Borders: `#E2E8F0` (Slate 200).

- **Technical Accents & Actions:**
  - Primary Interaction / System Focus: `#2563EB` (Cobalt Technical Blue) for active step indicators, interactive state paths, and primary CTA accents.
  - Secondary Interaction / Trade Specifics: `#0D9488` (Teal Cyan) dedicated to specialized diagnostic tasks, telemetry confirmations, and service validation milestones.

- **Operational Telemetry & Status:**
  - Alert & Pending: `#D97706` (Amber Alert) with `#FEF3C7` container backgrounds for critical dispatches and scheduled maintenance warnings.
  - Success & Complete: `#059669` (Emerald Success) with `#D1FAE5` container backgrounds for resolved job cards and passing audit metrics.
  - Danger & System Halt: `#DC2626` (Red Hazard) for gas leaks, electrical faults, and emergency escalations.

## Typography

Typography prioritizes legibility, scanning velocity, and tabular numeric alignment.

- **Font Pairing:** Inter is utilized across all tiers to maintain absolute neutrality, maximum legibility at small sizes, and flawless rendering on ruggedized field hardware.
- **Tabular Figures:** All numeric readouts, timestamps, telemetry data, and pricing values must enforce tabular figures (`font-variant-numeric: tabular-nums`) to preserve optical column alignments in data grids.
- **Micro-Copy & Technical Badges:** Labels at `11px` and `12px` utilize semibold and bold weights with uppercase tracking (`letterSpacing: 0.04em`) to maintain legibility when rendered inside saturated status badges or alongside technical hardware schematics.

## Layout & Spacing

The layout is built upon an 8pt architectural grid system, optimized for responsive dashboard orchestration and split-view dispatch boards.

- **Desktop (1280px+):** 12-column fluid grid. Outer margins are `2rem`, gutters are `1.5rem`. Complex workflows (e.g., job scheduling, pipeline routing) split into asymmetric panels: a 4-column master list and an 8-column contextual workbench.
- **Tablet (768px - 1279px):** 8-column fluid grid. Margins are `1.5rem`, gutters are `1rem`. Dual-panel layouts convert into off-canvas sliding overlays or vertical accordions.
- **Mobile (< 768px):** 4-column fluid grid. Outer canvas margins drop to `1rem` to maximize horizontal real estate for job cards and technician execution forms. Checklists and form cards stack into single-column vertical flows.
- **Data Density:** Dashboard tables and task lists use a condensed vertical rhythm (`0.5rem` row padding) to allow high scan rates without requiring unnecessary vertical scrolling.

## Elevation & Depth

Visual hierarchy relies on structural containment and crisp boundaries rather than heavy drop shadows:

- **Flat Precision:** Rely primarily on `1px` structural borders (`#E2E8F0`) over tinted surfaces (`#FFFFFF` on `#F8FAFC`).
- **Surface Elevation 1 (Card & Module Resting):**
  - Border: `1px solid #E2E8F0`
  - Shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
- **Surface Elevation 2 (Active Modals, Flyouts, Dispatch Popovers):**
  - Border: `1px solid #CBD5E1`
  - Shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`
- **Surface Elevation 3 (Emergency Drawers & Dragged Work Orders):**
  - Border: `1px solid #94A3B8`
  - Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`

## Shapes

The design system enforces a soft technical geometry (`roundedness: 1`):

- **Standard Containers & Inputs:** `0.25rem` (4px) base border radius. Applies to form controls, action buttons, table cell selections, and technical badges.
- **Panels & Cards:** `0.5rem` (8px) border radius for primary job cards, analytical chart wraps, and modal dialogs.
- **Status Badges & Indicator Dots:** Retain square or soft-square geometries (`0.25rem`) rather than pill shapes to preserve an industrial, instrument-grade appearance.

## Components

### Buttons
- **Primary:** Background `#0F172A`, text `#FFFFFF`, border-radius `0.25rem`, padding `0.5rem 1rem`. Hover: `#1E293B`. Active: `#334155`.
- **Secondary (Technical):** Background `#2563EB`, text `#FFFFFF`. Hover: `#1D4ED8`. Focus outline: 2px offset `#2563EB`.
- **Outline / Ghost:** Background `transparent`, border `1px solid #CBD5E1`, text `#1E293B`. Hover: `#F1F5F9`.

### Badges & Status Indicators
- **Layout:** Inline-flex, horizontal padding `0.5rem`, vertical padding `0.125rem`, border-radius `0.25rem`, typography `label-sm`.
- **Statuses:**
  - *Scheduled / In Progress:* `#EFF6FF` background, `#1D4ED8` text, `#BFDBFE` border.
  - *Pending Parts / Alert:* `#FEF3C7` background, `#B45309` text, `#FDE68A` border.
  - *Service Completed / Certified:* `#ECFDF5` background, `#047857` text, `#A7F3D0` border.
  - *Emergency Outage / Leak:* `#FEF2F2` background, `#B91C1C` text, `#FECACA` border.

### Input Fields & Structured Form Controls
- **Text Inputs & Selects:** Height `40px` (desktop), `48px` (mobile field use). Background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`. Focused state: border `#2563EB`, outer ring `2px solid rgba(37, 99, 235, 0.2)`.
- **Error State:** Border `#DC2626`, error message in `body-sm` (`#DC2626`) directly below.

### Checklist Toggle Chips
- Modular checklist items for step-by-step inspections (e.g., Gas Pressure Test, Tank Disinfection).
- Multi-state block: Height `44px`, display `flex`, alignment `center`, padding `0 0.75rem`, border `1px solid #E2E8F0`, background `#FFFFFF`.
- Selected / Verified state: Background `#F0FDF4`, border `1px solid #059669`, text `#065F46`, paired with an emerald check icon.

### Step Navigators (Multi-Phase Work Orders)
- Segmented linear bar spanning the top of work order detail screens.
- Active steps display a solid `#2563EB` connector line with `#0F172A` text.
- Completed steps display a `#059669` checkmark.
- Upcoming steps render in muted `#94A3B8` with dashed connector lines.

### Data Tables
- Header: Background `#F1F5F9`, text `#475569`, typography `label-md`, border-bottom `1px solid #CBD5E1`.
- Rows: Background `#FFFFFF`, alternating hover state `#F8FAFC`, border-bottom `1px solid #E2E8F0`, cell padding `0.75rem 1rem`. All data cells use `body-md` with `code-tabular` for equipment serials and quantities.