import HTTPUtils from './utils/HTTPUtils.js';
import FHIRtoCodeUtils from './utils/FHIRtoCodeUtils.js';

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

    let child = new SnomedCode();
    for (child of baseCode.childs) {
        let childFhirResponse = await HTTPUtils.getSnomedCodeFhirFile(child.code);
        let childCode = FHIRtoCodeUtils.fullFHIRToSnomedCode(childFhirResponse);
        child = childCode;
    }

    console.log(baseCode);
}

main();
