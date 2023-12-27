import 'dotenv/config';

export default class HTTPUtils {

    constructor() {}


    /**
     * @param {string} snomedCode 
     * @returns {*} responseJson
     */

    static getSnomedCodeFhirFile(snomedCode) {
        return fetch(`${process.env.SERVER_URL}/fhir/CodeSystem/$lookup?system=${process.env.SYSTEM_URL}&code=${snomedCode}`, {
            headers: {
                'Accept-Language': 'en-US'
            }
        })
        .then(response => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
    }
}