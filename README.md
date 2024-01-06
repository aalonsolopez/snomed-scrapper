# Snomed CT Scrapper (using Snowstorm API)

## Description

This is a simple scrapper for SNOMED CT Codes. It's only purpose is to extract the Clinical Finding codes from a SNOMED CT file server and save them in a JSON file.

> [!NOTE]
> It will only work with Snowstorm servers. It's not planned to support other FHIR servers.

## Index

- [Requirements](#requirements)
- [Execution](#execution)
- [License](#license)

## Requirements

- [NodeJS](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 8.13.1+


## Execution

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Copy the `.env.example` file to `.env` and fill the variables 
4. Run the script with `pnpm start`

## License

Copyright 2023 Alejandro Alonso López

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.