export default class NotValidFHIRResourceError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotValidFHIRResourceError';
    }
}
