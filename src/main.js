import HTTPUtils from './utils/HTTPUtils.js';
import FHIRtoCodeUtils from './utils/FHIRtoCodeUtils.js';
import SnomedCode from './models/SnomedCTCodeModel.js';

/**
 * Main function.
 * @async
 */
async function main() {
    /**
     * The FHIR Response.
     * @type {object}
     */
    const FhirResponse = await HTTPUtils.getSnomedCodeFhirFile('404684003');

    /**
     * The base code.
     * @type {SnomedCode}
     */
    const baseCode = FHIRtoCodeUtils.fullFHIRToSnomedCode(FhirResponse);

    baseCode.getChilds().forEach((child) => {
        console.log(child);
    });
}

main();
