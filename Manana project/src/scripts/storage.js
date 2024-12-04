export class Storage {
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static clear() {
        localStorage.clear();
    }

    static removeItem(key) {
        localStorage.removeItem(key);
    }
}



////////////////    validation.js     ////////////
export class ValidationError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = "ValidationError";
        this.code = code;
    }
}

////////////////        utils.js   ////////////////

export function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
