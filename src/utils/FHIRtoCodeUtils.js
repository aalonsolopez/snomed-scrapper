import NotValidFHIRResourceExc from '../errors/NotValidFHIRResourceExc';
import Designation from '../models/Designation';
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
        const designations = [];
        snomedFhirObject.parameter.forEach((parameter) => {
            if (parameter.name === 'designation') {
                const designation = new Designation();
                parameter.part.forEach((part) => {
                    switch (part.name) {
                    case 'use':
                        designation.setType(part.valueCode);
                        break;
                    case 'language':
                        designation.setLanguage(part.valueCode);
                        break;
                    case 'value':
                        designation.setValue(part.valueString);
                        break;
                    default:
                        break;
                    }
                });
                designations.push(designation);
            }
        });

        if (designations.length === 0) {
            throw new NotValidFHIRResourceExc('The FHIR Object does not have designations.');
        } else {
            return designations;
        }
    }
}
