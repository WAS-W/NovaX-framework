import { createElement } from "./component.js";

export function Box(style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("div", finalProps, style)
}

export function Header (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("header", finalProps, style)
}

export function Nav (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("nav", finalProps, style)
}

export function Main (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("main", finalProps, style)
}

export function Section (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("section", finalProps, style)
}

export function Artic (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("article", finalProps, style)
}

export function Aside (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("aside", finalProps, style)
}

export function Footer (style,props = {} ,...childs) {
    const finalProps = { ...props, childs: childs.flat() };
    return createElement("footer", finalProps, style)
}