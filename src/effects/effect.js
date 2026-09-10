export function getElement(element_name, isList = false, code_list) {
    if (isList) {
        const elements = document.querySelectorAll(element_name);
        if (typeof code_list === 'function') {
            elements.forEach(el => code_list(el));
        }
        return elements;
    } else {
        return document.querySelector(element_name);
    }
}