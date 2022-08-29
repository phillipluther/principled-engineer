---
title: 'CSS Relative Units: Rems and Ems, the Stalwart Foundation'
summary: 'The go-to tools in the box, rems and ems are the most common of all relative units in CSS. Both units are relative to `font-size` but vary in subtle ways.'
author: Phillip Luther
published: '2022-08-27T07:00:00.000Z'
tags:
  - CSS
  - Fundamentals
keywords:
  - css relative units
  - rems
  - ems
series: CSS Relative Units
slug: 'rems-ems-css-relative-units'
---

In common practice, rems and ems might as well be the _only_ relative units CSS has to offer. They're everywhere. Rems and ems are ubiquitous with "relative size" in CSS.

They're both built off of the `font-size` property, differentiating themselves on _whose_ `font-size` property they use to derive their size. Despite their common use, there are some subtle nuances to unpack; we'll do that. For the **tl;dr** caveats-be-damned version, though:

- `rem`-based units are relative to the font size of a document's "root" element
- `em`-based units are relative to the font size of the nearest ancestor element,
