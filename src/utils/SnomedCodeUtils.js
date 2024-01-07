import SnomedCode from '../models/SnomedCTCodeModel';
import HTTPUtils from './HTTPUtils';
import FHIRtoCodeUtils from './FHIRtoCodeUtils';

/**
 * Class containing methods for working with SNOMED CT Codes.
 * @class SnomedCodeUtils
 */
export default class SnomedCodeUtils {
    /**
     * From a SNOMED Code, returns the full information of the code, with childs (with complete info) and designations.
     * @param {SnomedCode} snomedCode - A valid SNOMED Code.
     * @returns {SnomedCode} - A SNOMED Code with full information.
     */
    static getSnomedInfo(snomedCode) {
        return HTTPUtils.getSnomedCodeFhirFile(snomedCode.getCode())
            .then((responseJson) => {
                const snomedFhirObject = responseJson;
                const snomedCodeObject = FHIRtoCodeUtils.fullFHIRToSnomedCode(snomedFhirObject);
                return snomedCodeObject;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
