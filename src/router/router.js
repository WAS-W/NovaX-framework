export function routerx(routes, El) {
    function render() {
        const current_path = window.location.hash.slice(1) || '/';
        const routeComponent = routes[current_path] || routes['404'];

        El.innerHTML = '';
        if (routeComponent) {
            const node = typeof routeComponent === 'function' ? routeComponent() : routeComponent;
            El.appendChild(node);
        }
    }
    window.onhashchange = render;
    window.onload = render;
}