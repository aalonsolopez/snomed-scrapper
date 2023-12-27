import HTTPUtils from './utils/HTTPUtils.js';
async function main() {
    const FhirResponse = await HTTPUtils.getSnomedCodeFhirFile("404684003");
    console.log(FhirResponse);
}


main();