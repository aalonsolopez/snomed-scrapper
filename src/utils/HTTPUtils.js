import 'dotenv/config';

/**
 * Class containing methods for making HTTP requests related to FHIR.
 * @class HTTPUtils
 * @typedef {HTTPUtils}
 */
export default class HTTPUtils {
    /**
     * @param {string} snomedCode - A valid SNOMED CT code.
     * @returns {Promise<object>} The full FHIR file for the given SNOMED CT code.
     * @description
     * The fuction returns a Promise that resolves to the full FHIR file for the given SNOMED CT code.
     */
    static getSnomedCodeFhirFile(snomedCode) {
        return fetch(`${process.env.SERVER_URL}/fhir/CodeSystem/$lookup?system=${process.env.SYSTEM_URL}&code=${snomedCode}`, {
            headers: {
                'Accept-Language': 'en-US', // Necesarry to get the FHIR file.
            },
        })
            .then((response) => response.json())
            .then((responseJson) => responseJson)
            .catch((error) => {
                console.error(error);
            });
    }
}
