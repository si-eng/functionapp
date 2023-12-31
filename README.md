# Project Info
## Project Name: Greensight_backend

## General Information
**Project Details:** GreenSight helps organizations reduce their carbon footprint through data-driven shipping optimizations. Seamlessly integrated, it provides automated recommendations for sustainable decisions.

## Technologies Used
- Node.js
- TypeScript
- Azure Functions (^4.0.0-alpha.7)
- MSSQL (^16.3.1)
- Sequelize (^6.32.1)
- Sequelize-typescript (^2.1.5)
- SonarQube

## Features
The application consists of several key functional areas, which are outlined below:
- Reporting emissions usage across various criteria for a specific organization
- Recommending alternate distribution channels to reduce overall emissions
- Creating actionable projects based on recommendations or user analysis to track the impact of adjustments

# Setup
## Setup Info
- Node.js version 18.17
- Install Azure CLI along with Azure CLI extension for Visual Studio Code
- Run `npm install` inside the root directory

## Steps
1. Copy `.env.example` file into `.env` and update the local values.
2. Run the command: `npm start` to run the Azure Function locally.

# Usage
## Adding Changes to the Code
- New Azure Functions can be added to the `functions` folder inside the `src` folder.
- Models can be created inside the `model` folder within the `src` folder.
- Helper functions can be created inside the `helper` folder within the `src` folder.
- Sequelize ORM is used to establish connections and query the database.

## Testing Added Code
- Test cases for the backend are located in the `test` folder at the root of the structure.
- To run test cases, use the command: `npm test`.

# Contact
- For environment variables: [Kumar Deepak](mailto:KumarDeepak@mooglelabs.com)
- For access-related concerns: [Singh Paramveer](mailto:singhparamveer@mooglelabs.com)
- Repo owner: [Singh Paramveer](mailto:singhparamveer@mooglelabs.com)