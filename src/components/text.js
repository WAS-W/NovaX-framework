import { createElement } from "./component.js";

export function Text(props = {}, style) {
    return createElement("p", props, style);    
}

export function Label(props = {}, style) {
    return createElement("label", props, style);
}

export function Heading(level = 1, props = {}, style) {
    const current_level = level >= 1 && level <= 6 ? level : 1;
    return createElement(`h${current_level}`, props, style);
}

export function Span(props = {}, style) {
    return createElement("span", props, style);
}

export function Link(props = {}, style) {
    return createElement("a", props, style);
}

export function BoldStrongText(props = {}, style) {
    return createElement("strong", props, style);
}

export function BoldText(props = {}, style) {
    return createElement("b", props, style);
}

export function MarkText(props = {}, style) {
    return createElement("mark", props, style);
}

export function SmallText(props = {}, style) {
    return createElement("small", props, style);
}