# NovaX.JS - Framework 🚀

Developed and Created by **sohyp**.

**NovaX.JS** is an ultra-lightweight, zero-dependency Frontend Framework written in pure Vanilla JavaScript (ES6 Modules). It allows you to build modern component-based single-page web applications (SPA) directly in the browser without Node.js, npm, Webpack, or any build tools.

---

## 🌟 Key Features

- **No Node.js / Build Tools Required:** Native ES Modules (`import/export`) running directly in any modern web browser.
- **Ultra-Lightweight (~1KB gzipped):** Extremely small memory footprint — can easily run on low-spec hardware (e.g., 1GB RAM machines or embedded devices).
- **Pure JavaScript Paradigm:** Construct UI component trees using pure JavaScript functions without needing JSX, compilers, or template engine overhead.
- **Built-in Reactive Helpers:** Native state management (`textState`, `elementsState`) backed by `Object.defineProperty`.
- **Built-in Router:** Lightweight client-side hash routing (`routerx`).
- **Zero Configuration:** Drop the files into your project and start coding immediately.

---

## ⚔️ Comparison: NovaX.JS vs. React vs. Angular

| Feature / Metric | NovaX.JS | React | Angular |
| :--- | :--- | :--- | :--- |
| **Node.js Required?** | ❌ **No** | 🟢 Yes (npm/build pipeline) | 🟢 Yes (Angular CLI/Node) |
| **Bundle Size** | ⚡ **~1 KB** | ~130 KB+ (React + ReactDOM) | ~500 KB+ |
| **RAM Usage / Footprint** | ⚡ **Ultra-low (Runs on < 1GB RAM)** | Moderate - High | High |
| **Setup & Build Step** | ⚡ **Zero (Instant browser load)** | Babel, Webpack / Vite, JSX | TypeScript, Angular Compiler |
| **Syntax Style** | Pure JS Function Calls | JSX (HTML-in-JS) | HTML Templates + TypeScript |
| **Learning Curve** | ⚡ **10 Minutes (Just JS)** | Moderate | High |

---

## 📦 Getting Started
If you have a GIT you can download it by this command "git clone https://github.com/WAS-W/NovaX-framework/tree/master"

Let's see example for NovaX.JS
```js
import { Box, Text, Button } from "@components/index.js"
import { getElement } from "@effects/effect.js"

function App() {
    return Box(
        {},
        Text ({},{ text: "click the button to start NovaX.js"},"color: #00AFFF;font-size: 20px"),
        Button ({},{ text:"click me",onPress:() => { alert("hello from NovaX.js") },"border-radius: 10px;")
        "background-color: grey;"
    )
}
```
## End And Advice
- Your Files Can Be Worked by *.nvx and when you build it will be compiled to JS Code But With some diffrences
- if started and want to build or sea result you can write this command "./novax -build -run APP_NAME.nvx"
- when you want to deploy you just will deploy files in /dist
- If You haven't trusted yet about NovaX.js to build your projects, I am sure you will trust when you know that ' NovaX.JS Documentation Has built on it'
