# Synonym-API

> This backend service is written in Node.js using Express framework.

Synonym API has only two APIs which are implemented in [app.js][df1]
  - **POST - Add synonyms** (e.g   [BASE_URL/synonyms][df1]  )
    Body request looks like: 
```sh
  "data":["beautiful": "attractive", "pretty", "lovely", "stunning"]
```
  - **GET - Find synonyms for entered word** (e.g [BASE_URL/synonyms?searchSynonym="pretty"][df1])
 > 

# Requirements
You will need a Unix shell to run the bash commands. On Mac and Linux you can use Terminal to run the commands with no problems. On Windows, you will want to use either Git Bash, Linux for Windows, Cmder, or some other Unix shell.

You will also need to have [Node.js](https://nodejs.org/) and npm installed.

To check if you have Node installed, open your terminal and run:
```sh
$ node -v
```
To check if you have npm installed, open your terminal and run:
```sh
$ npm -v
```
With that out of the way, you can set up the project!

# Run locally

Install dependencies:
```sh
$ npm start
```
Run the API:
```sh
$ npm start
```
**Note**: you can also use **yarn** if you have it installed.