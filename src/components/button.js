import { createElement } from "./component.js"

export function Button(props = {}, style) {
    return createElement("button",props, style)    
}

