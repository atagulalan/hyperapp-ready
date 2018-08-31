function index(obj, is, value) {
    if (typeof is === 'string')
        return index(obj, is.split('.'), value);
    else if (is.length === 1 && value !== undefined)
        return obj[is[0]] = value;
    else if (is.length === 0)
        return obj;
    else {
        if (obj[is[0]] === undefined) { return -1; }
        return index(obj[is[0]], is.slice(1), value);
    }
}

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

export const deepMerge = (target, ...sources) => {
    if (!sources.length) return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return deepMerge(target, ...sources);
}

export const stash = (ref, state) => {  
    let a = {};
    let refArray = ref.split('.');
    let oldPersist = JSON.parse(localStorage.getItem('persist'));
    if (!oldPersist) { oldPersist = {} }
    //console.log("state: ", JSON.stringify(state, null, 4));
    //console.log("oldPersist:", JSON.stringify(oldPersist, null, 4))
    let lastObj = refArray.slice(-1).join();
    let isObject = index(state, lastObj)===-1;
    for (let i = 0; i < refArray.length; i++) {
        let main = [];
        for (let j = 0; j <= i; j++) { main.push(refArray[j]); }
        let path = main.join(".");
        index(a, path, refArray.length === i + 1 ? isObject ? state : state[lastObj] : {});
    }
    //console.log("a:", JSON.stringify(a, null, 4))
    localStorage.setItem('persist', JSON.stringify(deepMerge(oldPersist, a)));
    //console.log("LocalStorage:", storage);
}

export const storage = JSON.parse(localStorage.getItem('persist')); 