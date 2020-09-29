# Boostrap custom

## Grid

This is a modified version of bootstrap-grid.css

I removed hardcoded breakpoints.
And created scss variables, easy to interact with in js (vue mixins).

Just define your breakpoints in a variables.scss

```scss
//Bootstrap4 default breakpoints
$breakpoints: (
  "xs": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
);
@import "@areskul/minimal-grid/breakpoints.scss";
```

## Reboot

Replaced hardcoded colors by "inherit".

# Text alignement

When I use a grid i expect my text to be aligned as well.
So here are a few text alignement properties.

You can combine it with breakpoint values in Vue with Class binding.

```html
<div :class="{ 'text-center' : md  }">
  Text centered on md devices
</div>
```

```scss
@import "@areskul/minimal-grid/breakpoints.scss";
```
