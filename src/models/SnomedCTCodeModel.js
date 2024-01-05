// @ts-check

// eslint-disable-next-line no-unused-vars
import Designation from './Designation.js';

/**
 * Snomed Code Model
 * @class SnomedCTCodeModel
 */
export default class SnomedCode {
    /**
     * A numeric string that uniquely identifies a concept within the terminology. Should be between 6 and 18 digits.
     * @type {string}
     */
    code;

    /**
     * The differents designations of the SNOMED CT code.
     * @type {Designation[]}
     * @see {@link Designation}
     */
    designations;

    /**
     * The child codes of the SNOMED CT code.
     * @type {SnomedCode[]}
     */
    childs;

    /**
     * Creates an instance of SnomedCTCodeModel.
     * @constructor
     * @param {string} code - A valid SNOMED CT code.
     * @param {Designation[]} [designations=[]] - The designation of the SNOMED CT code.
     * @param {SnomedCode[]} [childs=[]] - The child codes of the SNOMED CT code.
     */
    constructor(code, designations = [], childs = []) {
        this.code = code;
        this.designations = designations;
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
     * Sets the code of the Snomed Code.
     * @param {string} code - The code of the Snomed Code.
     */
    setCode(code) {
        this.code = code;
    }

    /**
     * Returns the designation of the Snomed Code.
     * @returns {Designation[]} designation
     */
    getDesignation() {
        return this.designations;
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
        this.designations.push(designation);
    }

    /**
     * Sets an array of designations to the Snomed Code.
     * @param {Designation[]} designations - The code of the Snomed Code.
     */
    setDesignation(designations) {
        this.designations = designations;
    }

    /**
     * Returns true if the Snomed Code has childs.
     * @returns {boolean} hasChilds
     */
    hasChilds() {
        return this.childs.length > 0;
    }
}
