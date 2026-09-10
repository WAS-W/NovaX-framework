import { createElement } from "./component.js"

export function TextField(props = {}, style) {
    return createElement("input",props, style)    
}

export function TextArea(props = {},style) {
    return createElement("textarea",props,style)
}

export function Form(props = {}, style, ...childs) {
    const new_props = { ...props, childs: childs.flat() }
    return createElement("form",new_props,style)
}

export function Select(props = {}, style, ...childs) {
    const new_props = { ...props, childs: childs.flat() }
    return createElement("select",new_props,style)
}

export function Option(props = {},style) {
    return createElement("option",props,style)
}

export function Image(props = {},style) {
    return createElement("img",props,style)
}

export function Audio(props = {},style) {
    return createElement("audio",props,style)
}

export function Vedio(props = {},style) {
    return createElement("video",props,style)
}