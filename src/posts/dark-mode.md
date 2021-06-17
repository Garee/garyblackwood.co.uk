---
path: "/blog/dark-mode-preference-detection"
date: "2021-06-17"
title: "Dark Mode Preference Detection"
tags: ["dark mode", "javascript", "css", "webdev", "prefers-color-scheme"]
cover:
description: "An article that describes how to detect a user's dark mode preference."
---

If you're anything like me, you always enable the dark mode within your operating system and applications. Did you know that there is a [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) that allows you query whether a user prefers dark mode?

The [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS media feature can be used to detect whether a user has requested a light or dark theme. In combination with CSS variables, this allows us to support dynamically switching between multiple themes.

```css
/* No preference */
:root {
    --fg-color: white;
    --bg-color: black;
}

/* The dark theme is preferred */
@media (prefers-color-scheme: dark) {
    :root {
        --fg-color: white;
        --bg-color: black;
    }
}

/* The light theme is preferred */
@media (prefers-color-scheme: light) {
    :root {
        --fg-color: black;
        --bg-color: white;
    }
}
```

It is also possible to query this preference using JavaScript using [window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

```javascript
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("Dark mode rocks 🎉");
}
```

The `window.matchMedia` function returns a [`MediaQueryList`](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) object that allows us to react to media change events.

```javascript
const media = window.matchMedia("(prefers-color-scheme: dark)");
media.addListener((e) => {
    console.log(`Dark mode is ${e.matches ? "on" : "off"}`);
});
```

At the time of writing, other than Opera Mini, this feature is supported in all major modern browsers. Check out [caniuse.com](https://caniuse.com/prefers-color-scheme) for a comprehensive list.

This website has a light and a dark theme. It chooses one automatically based on your preference and can be overridden using the theme toggle icon button in the site footer. Give it a try!
