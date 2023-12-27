# Snomed CT Scrapper (using Snowstorm API)

## Description

This is a simple scrapper for SNOMED CT Codes. It's only purpose is to extract the Clinical Finding codes from a SNOMED CT file server and save them in a JSON file.

> [!NOTE]  
> It will only work with Snowstorm servers. It's not planned to support other FHIR servers.


## Requirements

- [NodeJS](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 8.13.1+


## Execution

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Copy the `.env.example` file to `.env` and fill the variables 
4. Run the script with `pnpm start`