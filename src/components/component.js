export function createElement(tag_name, props, style) {
    if ( tag_name ) {
        const el = document.createElement(tag_name)
        if ( props ) {
            if (props.text) {
                el.textContent = props.text
            }
            if (props.holder) {
                el.placeholder = props.holder
            }
            if (props.onPress) {
                el.onclick = () => {
                    props.onPress()
                }
            }
            if (props.onInput) {
                el.oninput = (e) => props.onInput(e);
            }
            if (props.onChange) {
                el.onchange = (e) => props.onChange(e);
            }
            if (props.onKey) {
                el.onkeydown = (e) => props.onKey(e);
            }
            if (props.onFocus) {
                el.onfocus = (e) => props.onFocus(e);
            }
            if (props.onBlur) {
                el.onblur = (e) => props.onBlur(e);
            }
            if (props.childs) {
                props.childs.forEach(child => {
                    el.appendChild(child)
                });
            }
        }
        if (style) {
            el.setAttribute("style",style)
        }
        return el;
    }
}

export function component(component_name, el) {
    el.innerHTML = ''
    el.appendChild(component_name())
}


