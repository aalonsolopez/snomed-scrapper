/**
 * Class containing methods for handling FHIR Objects and using it's data. TO-DO.
 *
 * @export
 * @class FHIRUtils
 * @typedef {FHIRUtils}
 */
export default class FHIRUtils {
    /**
     * From a FHIR Object, returns a SnomedCode Object.
     *
     * @param {Object} SnomedFhirObject
     * @returns {SnomedCode} SnomedCode
     */
    static fhirToSnomedCode(SnomedFhirObject) {
        const SnomedCode = {
            code: SnomedFhirObject.code,
            meanings: SnomedFhirObject.display,
            childs: [],
        };
        return SnomedCode;
    }
}
