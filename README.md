# DFINITY-Inspired Slidev Theme

A beautiful theme for [Slidev](https://sli.dev) inspired by the Internet Computer branding and DFINITY design guidelines.

## Features

- 🎨 Based on DFINITY's brand colors and design elements
- 🌙 Dark mode by default with particle background effects
- 🧩 Custom components for enhanced presentations
- 📊 Multiple layout options for different content types
- 🔤 Typography following DFINITY brand guidelines

## Installation

Add the following frontmatter to your `slides.md`:

```yaml
---
theme: slidev-theme-dfinity
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides several layouts for your slides:

- `default`: Basic slide layout with title and content
- `cover`: Title slide with centered content and logo
- `section`: Section divider slide with large title
- `two-cols`: Two-column layout for side-by-side content
- `code`: Layout optimized for code examples

Example:

```md
---
layout: cover
---

# My Presentation
Powered by Slidev and DFINITY theme

---
layout: section
---

# Section Title
Section description goes here

---
layout: two-cols
---

::left::
# Left Column
Content on the left

::right::
# Right Column
Content on the right

---
layout: code
---

# Code Example

```js
console.log('Hello, Internet Computer!');
```
```

## Components

This theme includes several custom components:

### GradientText

```html
<GradientText size="lg">Gradient Text</GradientText>
```

Sizes: `sm`, `md`, `lg`, `xl`

### GradientCard

```html
<GradientCard>
  Card content goes here
</GradientCard>
```

### Button

```html
<Button @click="$slidev.nav.next">Next Slide</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline" size="lg">Large Outline Button</Button>
```

Variants: `primary`, `secondary`, `outline`  
Sizes: `sm`, `md`, `lg`

### Callout

```html
<Callout type="info" title="Information">
  This is an informational callout.
</Callout>
```

Types: `info`, `warning`, `tip`

### FeatureBox

```html
<FeatureBox title="Feature Title" icon="💡">
  Feature description goes here.
</FeatureBox>
```

### CodeBlock

```html
<CodeBlock title="example.js" language="javascript">
  console.log('Hello ICP!');
</CodeBlock>
```

## Customization

You can customize the theme by overriding CSS variables or adding your own styles:

```html
<style>
:root {
  --slidev-theme-primary: #3B00B9;
  --slidev-theme-secondary: #1E005D;
  --slidev-theme-accent: #ED1E79;
}
</style>
```

## Credits

- Theme created based on [DFINITY brand guidelines](https://dfinity.frontify.com/d/pD7yZhsmpqos/internet-computer#/internet-computer/colors)
- Powered by [Slidev](https://sli.dev)
- Inspired by Internet Computer presentation slides
