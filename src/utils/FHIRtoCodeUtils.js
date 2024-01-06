import NotValidFHIRResourceExc from '../errors/NotValidFHIRResourceError.js';
import Designation from '../models/Designation.js';
import SnomedCode from '../models/SnomedCTCodeModel.js';

/**
 * Class containing methods for converting FHIR Objects to SnomedCode Objects.
 * @class FHIRtoCodeUtils
 */
export default class FHIRtoCodeUtils {
    /**
     * From a FHIR Object, returns a SnomedCode Object.
     * @param {object} snomedFhirObject - A valid FHIR Object.
     * @returns {SnomedCode}
     */
    static fullFHIRToSnomedCode(snomedFhirObject) {
        const snomedCode = new SnomedCode(
            FHIRtoCodeUtils.getCodeFromFhirObject(snomedFhirObject),
            FHIRtoCodeUtils.getDesignationFromFhirObject(snomedFhirObject),
            FHIRtoCodeUtils.getChildsFromFhirObject(snomedFhirObject),
        );

        return snomedCode;
    }

    /**
     * Function that returns the code from a FHIR Object.
     * @param {object} snomedFhirObject - A valid FHIR Object.
     * @returns {string}
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

    /**
     * Function that returns all the designations from a FHIR Object.
     * @param {object} snomedFhirObject - A valid FHIR Object.
     * @returns {Designation[]}
     */
    static getDesignationFromFhirObject(snomedFhirObject) {
        const designations = [];
        snomedFhirObject.parameter.forEach((parameter) => {
            if (parameter.name === 'designation') {
                const designation = new Designation();
                parameter.part.forEach((part) => {
                    switch (part.name) {
                    case 'use':
                        designation.setType(part.valueCoding.display);
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

    /**
     * Function that returns all the childs from a FHIR Object.
     * @param {object} snomedFhirObject - A valid FHIR Object.
     * @returns {SnomedCode[]}
     */
    static getChildsFromFhirObject(snomedFhirObject) {
        const childs = [];
        snomedFhirObject.parameter.forEach((parameter) => {
            if (parameter.name === 'property') {
                if (parameter.part[0].valueString === 'child') {
                    const child = new SnomedCode(parameter.part[1].valueCode);
                    childs.push(child);
                }
            }
        });

        return childs;
    }
}
