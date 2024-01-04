import NotValidFHIRResourceExc from '../errors/NotValidFHIRResourceExc';
import SnomedCode from '../models/SnomedCTCodeModel';

/**
 * Class containing methods for converting FHIR Objects to SnomedCode Objects.
 *
 * @export
 * @class FHIRtoCodeUtils
 * @typedef {FHIRtoCodeUtils}
 */
export default class FHIRtoCodeUtils {
    /**
     * From a FHIR Object, returns a SnomedCode Object.
     *
     * @param {Object} snomedFhirObject - A valid FHIR Object.
     * @returns {SnomedCode} SnomedCode
     */
    static fullFHIRToSnomedCode(snomedFhirObject) {
        const snomedCode = new SnomedCode(
            FHIRtoCodeUtils.getCodeFromFhirObject(snomedFhirObject),
            FHIRtoCodeUtils.getDesignationFromFhirObject(snomedFhirObject),
            [], // FHIRtoCodeUtils.getChildsFromFhirObject(snomedFhirObject) TO-DO
        );

        return snomedCode;
    }

    /**
     * Function that returns the code from a FHIR Object.
     * @param {Object} snomedFhirObject - A valid FHIR Object.
     * @returns {string} code
     */
    static getCodeFromFhirObject(snomedFhirObject) {
        let code = '';
        snomedFhirObject.parameter.forEach((parameter) => {
            if (parameter.name === 'code') {
                code = parameter.valueString;
            }
        });

        if (code === '') {
            throw new NotValidFHIRResourceExc('The FHIR Object does not have a code.');
        } else if (code.length < 6 || code.length > 18) {
            throw new NotValidFHIRResourceExc('The FHIR Object does not have a valid code.');
        } else {
            return code;
        }
    }

    static getDesignationFromFhirObject(snomedFhirObject) {
        let designation = '';
        snomedFhirObject.parameter.forEach((parameter) => {
            if (parameter.name === 'designation') {
                parameter.part.forEach((part) => {
                    if (part.name === 'value') {
                        designation = part.valueString;
                    }
                });
            }
        });

        if (designation === '') {
            throw new NotValidFHIRResourceExc('The FHIR Object does not have a designation.');
        } else {
            return designation;
        }
    }
}
