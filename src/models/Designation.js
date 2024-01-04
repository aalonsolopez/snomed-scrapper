/**
 * Designation model.
 * @class Designation
 */
export default class Designation {
    constructor(type = '', language = '', value = '') {
        this.type = type;
        this.language = language;
        this.value = value;
    }

    /**
     * Returns the type of the Designation.
     * @returns {string} type
     */
    getType() {
        return this.type;
    }

    /**
     * Returns the language of the Designation.
     * @returns {string} language
     */
    getLanguage() {
        return this.language;
    }

    /**
     * Returns the value of the Designation.
     * @returns {string} value
     */
    getValue() {
        return this.value;
    }

    /**
     * Sets the type of the Designation.
     * @param {string} type - The type of the Designation.
     */
    setType(type) {
        this.type = type;
    }

    /**
     * Sets the language of the Designation.
     * @param {string} language - The language of the Designation.
     */
    setLanguage(language) {
        this.language = language;
    }

    /**
     * @param {string} value - The value of the Designation.
     * @returns {string} value
     */
    setValue(value) {
        this.value = value;
    }
}
