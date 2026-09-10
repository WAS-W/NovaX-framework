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

export function ForEach(ListName, callback) {
    ListName.forEach((item, index) => callback(item, index))
}

export function useFetch(url, method, headers = {}, DataFunc, ErrFunc ) {
    fetch(url,{
        method: method,
        headers: headers
    })
    .then(res => {
        if (!res.ok) return throw Error(`HTTP Error! status: ${res.status}`)
     })
    .then(data => {
        if (typeof DataFunc === "function") DataFunc(data)
    })
    .catch(err => {
        if (typeof ErrFunc === "function") ErrFunc(err)
    })
}

export function useCopy(text, onSuccess, onERR) {
    window.navigator.clipboard.writeText(text)
        .then(() =>{
            if (typeof onSuccess === "function") onSuccess()
        })
        .catch(err => {
            if (typeof onERR === 'function') onERR(err);
        });
}
