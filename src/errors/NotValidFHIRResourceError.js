/**
 * Indicates that the resource is not a valid FHIR resource
 * @class NotValidFHIRResourceError
 * @augments {Error}
 */
export default class NotValidFHIRResourceError extends Error {
    /**
     * Creates an instance of NotValidFHIRResourceError.
     * @param {string} message - The error message.
     */
    constructor(message) {
        super(message);
        this.name = 'NotValidFHIRResourceError';
    }
}
