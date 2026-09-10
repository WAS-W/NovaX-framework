export function textState(object_name, key, text, el) {
    let element = el
    if (element) element.textContent = text

    Object.defineProperty(object_name, key, {
        get() {
            return text;
        },
        set(new_text) {
            let txt = new_text
            if (txt) element.textContent = new_text
        }
    });
}

export function elementsState(obj_name, key, code, element) {
    let el = element;
    if (el) el.innerHTML = code

    Object.defineProperty(obj_name, key, {
        get() {
            return code;
        },
        set(new_els) {
            let els = new_els
            if (els) el.innerHTML = els
        }
    });
}

