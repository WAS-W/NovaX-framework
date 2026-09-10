import { createElement } from "./component.js";


export function ListEl(props = {}, style) {
    return createElement("li",props, style)
}

export function RandomList(props = {}, style, ...childs) {
    const new_props = { ...props, childs: childs.flat() }
    return createElement("ul",new_props,style)
}

export function OrganizedList(props = {},style, ...childs) {
    const new_props = { ...props, childs: childs.flat() }
    return createElement("ol",new_props,style)
}

export function MenuList(props = {},style, ...childs) {
    const new_props = { ...props, childs: childs.flat() }
    return createElement("menu",new_props,style)
}
