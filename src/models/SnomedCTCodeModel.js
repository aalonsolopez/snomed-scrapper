/**
 * Snomed Code Model
 * @class SnomedCTCodeModel
 */
export default class SnomedCode {
    /**
     * Creates an instance of SnomedCTCodeModel.
     * @constructor
     * @param {string} code - A valid SNOMED CT code.
     * @param {Designation[]} [designation=[]] - The designation of the SNOMED CT code.
     * @param {SnomedCode[]} [childs=[]] - The child codes of the SNOMED CT code.
     */
    constructor(code, designation = [], childs = []) {
        this.code = code;
        this.designation = designation;
        this.childs = childs;
    }

    /**
     * Returns the code of the Snomed Code.
     * @returns {string} code
     */
    getCode() {
        return this.code;
    }

    /**
     * Returns the designation of the Snomed Code.
     * @returns {string} designation
     */
    getDesignation() {
        return this.meanings;
    }

    /**
     * Returns the childs of the Snomed Code.
     * @returns {SnomedCode[]} childs
     */
    getChilds() {
        return this.childs;
    }

    /**
     * Adds a child to the Snomed Code.
     * @param {SnomedCode} child
     */
    appendChild(child) {
        this.childs.push(child);
    }

    /**
     * Adds a designation to the Snomed Code.
     * @param {Designation} designation
     */
    appendDesignation(designation) {
        this.designation.push(designation);
    }

    /**
     * Sets an array of designations to the Snomed Code.
     * @param {Designation[]} designations - The code of the Snomed Code.
     */
    setDesignation(designations) {
        this.designation = designations;
    }
}
