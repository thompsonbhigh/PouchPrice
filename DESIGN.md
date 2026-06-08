---
name: Fresh Utility
colors:
  surface: '#f3fbf5'
  surface-dim: '#d4dcd6'
  surface-bright: '#f3fbf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6ef'
  surface-container: '#e8f0ea'
  surface-container-high: '#e2eae4'
  surface-container-highest: '#dce5de'
  on-surface: '#161d1a'
  on-surface-variant: '#3b4a43'
  inverse-surface: '#2a322e'
  inverse-on-surface: '#eaf3ed'
  outline: '#6b7b73'
  outline-variant: '#bacac1'
  surface-tint: '#006c51'
  primary: '#006c51'
  on-primary: '#ffffff'
  primary-container: '#00d1a0'
  on-primary-container: '#00543e'
  inverse-primary: '#2ee0ad'
  secondary: '#4e5f7d'
  on-secondary: '#ffffff'
  secondary-container: '#cadaff'
  on-secondary-container: '#4f5f7e'
  tertiary: '#006496'
  on-tertiary: '#ffffff'
  tertiary-container: '#71c0fd'
  on-tertiary-container: '#004d76'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#58fdc8'
  primary-fixed-dim: '#2ee0ad'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513c'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b6c7ea'
  on-secondary-fixed: '#081b37'
  on-secondary-fixed-variant: '#374765'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#91cdff'
  on-tertiary-fixed: '#001e31'
  on-tertiary-fixed-variant: '#004b72'
  background: '#f3fbf5'
  on-background: '#161d1a'
  surface-variant: '#dce5de'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  price-display:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 20px
---

## Brand & Style

The brand personality of the design system is defined by three core pillars: **Vibrancy, Precision, and Trust.** As a utility-driven comparison platform, the interface must prioritize rapid information scanning while maintaining a refreshing, modern aesthetic that distances itself from the clinical or traditional tobacco industry.

The design style is **Modern Corporate with a Minty Twist**. It utilizes a "Clean-Room" approach: expansive white space, surgical-grade typography contrast, and subtle depth through tonal layering rather than heavy shadows. The emotional response should be one of "effortless discovery"—users should feel they are using a sophisticated tool that is both light to the touch and heavy on data accuracy.

## Colors

The palette is built on a foundation of "Crisp White" and "Deep Navy" to establish immediate professional trust, punctuated by "Mint Green" to signal freshness and growth (savings).

- **Primary (Mint):** Used for primary actions, price "drops," and success states. It represents the product category's core attribute.
- **Secondary (Deep Navy):** Used for high-contrast headers and navigation elements. It provides the "Reliable" anchor for the brand.
- **Tertiary (Cool Blue):** Used for secondary interactions, info-badges, and price history graphs.
- **Price Alert (Amber):** A specific functional color reserved strictly for "Price Drop" notifications and urgent savings alerts.
- **Neutrals:** A scale of cool slates ensures that text remains sharp and legible against the high-key white backgrounds.

## Typography

This design system employs a dual-font strategy to balance character with utility. **Sora** provides a geometric, tech-forward feel for headings and price points, while **Hanken Grotesk** offers exceptional legibility for dense product data and comparison tables.

Emphasis is placed on the `price-display` role, which should always be the most prominent element in any product card. Use `label-caps` for metadata like "Mg Strength" or "In Stock" status to create a clear hierarchy between product titles and technical specs.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px spacing system ensures visual mathematical harmony.

- **Content Density:** High. This is a utility app, so vertical spacing between product rows should be tight (`md`) to allow users to compare multiple items without excessive scrolling.
- **Margins:** Mobile views should maintain a `md` (16px) side margin. Desktop views use a centered container with a maximum width of 1280px.
- **Grouping:** Use `lg` spacing to separate logical sections (e.g., "Trending Deals" vs "All Brands") and `sm` spacing for elements within a single component (e.g., price vs shipping info).

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** and **Soft Inset Borders** rather than traditional drop shadows. This maintains the "Clean" aesthetic.

- **Level 0 (Background):** The base canvas (`#F8FAFC`).
- **Level 1 (Cards/Sheets):** Pure white (`#FFFFFF`) with a 1px border in a light cool gray. No shadow.
- **Level 2 (Hover/Active):** When a user interacts with a card, apply a very soft, diffused Mint-tinted shadow (`rgba(0, 209, 160, 0.1)`) to lift it slightly.
- **Glassmorphism:** Use background blurs (12px) on top navigation bars to maintain a sense of space and context while scrolling through long lists of products.

## Shapes

The shape language is **Refined-Rounded**. By using `0.5rem` (8px) as the standard radius, the UI feels approachable and modern without becoming overly "bubbly" or juvenile. 

- **Primary Buttons:** Use a standard `rounded` (8px) corner.
- **Search Inputs:** Use `rounded-lg` (16px) to distinguish them from action buttons.
- **Price Tags:** Use a semi-pill shape (left side square, right side rounded) to mimic a physical tag or label.

## Components

### Buttons
Primary buttons use the Mint Green background with Navy text for maximum contrast. Secondary buttons use a Navy outline. All buttons feature a subtle 2px bottom "press" effect on active states.

### Price Alert Chips
Chips used for alerts (e.g., "Price Drop -20%") should use the Alert Amber color as a background with white bold text. These components should include a small "bell" icon to reinforce the alert nature.

### Product Cards
The hero component. It must feature:
1.  High-res product imagery on a light gray inset square.
2.  The `price-display` typography in the top right.
3.  A "Compare" checkbox at the bottom left.
4.  Secondary data points (Strength, Pouch Count) in `label-caps`.

### Input Fields
Search bars should be oversized with a `secondary` blue icon. The focus state should utilize a 2px Mint Green border to signal "Active/Fresh" status.

### Brand Accents
When displaying specific pouch brands, use a vertical color-bar on the left edge of the card that matches the brand's primary color (e.g., Purple for Velo, Blue for ZYN) to help with visual brand recognition.