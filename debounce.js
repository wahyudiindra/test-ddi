function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
function search(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch("search 1");
debouncedSearch("search 2");
debouncedSearch("search 3");
debouncedSearch("search 4");
debouncedSearch("search 5");
