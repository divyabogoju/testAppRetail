Retail Test Application - Case Study.
============

My Retail Application - Case Study runs [React.js](https://reactjs.org/), [Redux](https://redux.js.org/) with the help of [react-redux](https://redux.js.org/basics/usagewithreact) on a [Spring Boot Web](https://spring.io/projects/spring-boot) backend.  
Automation testing boilerplate using WebdriverIO tests with [Cucumber](https://cucumber.io/) is added in.
Javascript Unit testing using [jest](https://jestjs.io/) is supported.
H2 database support is available through spring boot.

## Requirements

To build this project you will need Java8 and Maven

**To install java 8**
```bash
brew tap caskroom/versions
brew cask install java8
```

**To install Maven**
```bash
brew install maven
```

## Quick start

To start the server using npm
 ```
 npm run local-server
 ```
This command should run the maven command to build the code and deploy it on an embedded tomcat container. While building the code, maven will try to install the node version for you it goes wth node 9.2.0. 

Maven will, 
1. Run `npm install` to install all the dependencies in the `package.json`.
2. Build the webpack bundles.
3. Run the jest unit tests.
4. Deploy the code to an embedded tomcat container.

The application will be running on <http://localhost:8080>

## Running Automation Tests

To run the automation test suite.

- Start the local server, if not already started.
```
npm run local-server
```

- Then run:
```
npm run automation-tests
```
## Continuous Delivery
https://upload.wikimedia.org/wikipedia/commons/c/c3/Continuous_Delivery_process_diagram.svg
