export default class SnomedCode {
    constructor(code, meanings, childs) {
        this.code = code;
        this.meanings = meanings;
        this.childs = childs;
    }

    getCode() {
        return this.code;
    }

    getMeanings() {
        return this.meanings;
    }

    getChilds() {
        return this.childs;
    }

    appendChild(child) {
        this.childs.push(child);
    }
}
