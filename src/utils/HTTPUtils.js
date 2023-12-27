import 'dotenv/config';

export default class HTTPUtils {
    /**
     * @param {string} snomedCode
     * @returns {*} responseJson
     */
    static getSnomedCodeFhirFile(snomedCode) {
        return fetch(`${process.env.SERVER_URL}/fhir/CodeSystem/$lookup?system=${process.env.SYSTEM_URL}&code=${snomedCode}`, {
            headers: {
                'Accept-Language': 'en-US',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => responseJson)
            .catch((error) => {
                console.error(error);
            });
    }
}
