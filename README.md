# Energo-Sphere

## Table of Contents
1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Implemented Features](#implemented-features)
4. [Unit and Integration Testing](#unit-and-integration-testing)
5. [Required Software for Local Setup](#required-software-for-local-setup)
6. [Database Configuration](#database-configuration)
7. [Database Script Usage](#database-script-usage-two-options)
8. [Demo Video](#demo-video)
9. [User Credentials](#user-credentials)
10. [Statistics](#statistics)

## Project Description
This project involves developing an energy portfolio management and supply application for homes. The system will allow users to manage energy consumption, contracts, and related data through a web-based interface.

> **⚠️ Warning:** The online database might not be accessible anymore. If you encounter issues, please consider setting up a local database.

**Online Database**: [Aiven Console](https://console.aiven.io)

## Technologies Used
- **Angular** (Frontend)
- **Java 17** (Backend)
- **Spring Boot** (Backend)
- **MySQL** (Backend)

## Implemented Features
- [X] CRUD operations for homes
- [X] CRUD operations for users (clients)
- [X] CRUD operations for meters associated with homes
- [X] CRUD operations for meter history
- [X] CRUD operations for contracts (by the provider)
- [X] Retrieval of energy types
- [X] Retrieval of contract types
- [X] Retrieval of provider data
- [X] Retrieval of portfolio data
- [X] Multilingual support (English - French)
- [X] Notification system
- [X] Authentication system
- [X] Visualization and export of consumption data

## Unit and Integration Testing
- [X] Unit testing for controllers
- [X] Integration testing

## Required Software for Local Setup
To run this program on your machine, ensure you have the following:

1. Download **MySQL**
2. Choose the **MySQL Package**
3. Select the **Workbench Package** and use version **8.0.22** (Later versions do not support languages other than English on some OS)
4. Choose the **Connector/J Package**

## Database Configuration
If the online database is not working, you will need to configure the project to use a local database. Follow these steps:

1. Open the file: `Code/PPE/src/main/resources/application.properties`
2. Comment out the following lines:
    ```properties
    spring.datasource.url=jdbc:
    spring.datasource.username=
    spring.datasource.password=
    ```
3. Uncomment the following lines:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/ppe
    spring.datasource.username=root
    spring.datasource.password=1234
    ```
This will switch the project to use the local MySQL database.

## Database Script Usage (Two Options)
- Use the full script
- Use the scripts separately

## Demo Video
You can watch a demo of the application at the following link: [Demo Video](https://youtu.be/uA8XNadRcqo)

## User Credentials
Below are the user credentials available for testing:

| Username                                           | Password  | Role      |
|----------------------------------------------------|-----------|-----------|
| Aspiravi                                           | Provider  | Provider  |
| DATS 24                                            | Provider  | Provider  |
| Ebem                                               | Provider  | Provider  |
| Eneco                                              | Provider  | Provider  |
| Energie.be                                         | Provider  | Provider  |
| Engie                                              | Provider  | Provider  |
| Luminus                                            | Provider  | Provider  |
| Mega                                               | Provider  | Provider  |
| Octa                                               | Provider  | Provider  |
| TotalEnergies                                      | Provider  | Provider  |
| AIEC                                               | Provider  | Provider  |
| AIEM                                               | Provider  | Provider  |
| CIESAC                                             | Provider  | Provider  |
| CILE                                               | Provider  | Provider  |
| IDEN                                               | Provider  | Provider  |
| IEG                                                | Provider  | Provider  |
| INASEP                                             | Provider  | Provider  |
| SWDE                                               | Provider  | Provider  |
| Falafel.Thierry@JeSuisNul.com                      | Customer  | Customer  |
| Monsieur.Inspecteru@JeParleTrop.com                | Customer  | Customer  |
| Gatta.Nicolas@TuMeTrouverasPas.com                 | Customer  | Customer  |
| Vancauwenberghe.Emelien@JeSuisCaché.com            | Customer  | Customer  |

## Statistics
- **Java**: 13,594 lines
- **SQL Script**: 2,381 lines
- **Angular**: 6,960 lines
- **Total**: 22,935 lines
