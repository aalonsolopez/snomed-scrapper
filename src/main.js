import HTTPUtils from './utils/HTTPUtils.js';
import FHIRtoCodeUtils from './utils/FHIRtoCodeUtils.js';

/**
 * Main function.
 * @async
 */
async function main() {
    const FhirResponse = await HTTPUtils.getSnomedCodeFhirFile('404684003');
    const testCode = FHIRtoCodeUtils.fullFHIRToSnomedCode(FhirResponse);

    console.log(testCode);
}

main();
