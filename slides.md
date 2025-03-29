---
theme: ./
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: DFINITY Theme Demo
---

# DFINITY Theme for Slidev

A beautiful theme inspired by Internet Computer branding

<div class="pt-12">
  <Button @click="$slidev.nav.next">Start Presentation</Button>
</div>

---
layout: section
---

# Theme Features

<div class="description">
Explore the components and layouts available in this theme
</div>

---
layout: default
---

# Default Layout

This is the default layout with a particle background.

- Bullet points work as expected
- With proper styling and indentation

```js
// Code blocks are styled with proper syntax highlighting
function hello() {
  console.log('Hello, Internet Computer!');
}
```

---
layout: two-cols
---

::left::

# Two Column Layout

This layout splits the content into two columns.

<GradientCard>
This is a gradient card component that can be used to highlight content.
</GradientCard>

::right::

<FeatureBox title="Feature Box">
This is a feature box component that can be used to showcase features.
</FeatureBox>

<div class="mt-4">
  <GradientText size="lg">Gradient Text</GradientText>
</div>

---
layout: code
---

# Code Layout

```ts
actor {
  public func greet(name : Text) : async Text {
    return "Hello, " # name # "! Welcome to Internet Computer.";
  };
}
```

<Callout type="info" title="Information">
This is a callout component that can be used to highlight important information.
</Callout>

---

# Component Showcase

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <GradientText size="md">Gradient Text Component</GradientText>
    <p class="mt-2">Text with gradient effect using DFINITY colors</p>
  </div>
  
  <div>
    <Button>Primary Button</Button>
    <Button variant="secondary" class="ml-2">Secondary</Button>
    <p class="mt-2">Styled buttons with DFINITY colors</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-6">
  <Callout type="tip" title="Pro Tip">
    Callouts can be used to highlight tips, warnings, or information.
  </Callout>
  
  <CodeBlock title="example.js" language="javascript">
    console.log('Hello ICP!');
  </CodeBlock>
</div>

---
layout: section
---

# Thank You!

<div class="description">
DFINITY Theme for Slidev - Inspired by Internet Computer branding
</div>
