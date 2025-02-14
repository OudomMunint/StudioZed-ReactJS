<h2 align="center">
  A Studio Zed project made with React Js<br/>
  Feel free to use it as a template for your own projects!<br/>
  <a href="https://studiozed.netlify.app/" target="_blank">Visit Studio Zed!</a>
  
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</h2>

<br/>

<h3 align="center">
    <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
    <a href="https://github.com/OudomMunint/StudioZed-ReactJS/issues">Report Bug</a> &nbsp; &nbsp;
</h3>

### Maintenance:
![maintenance-status](https://img.shields.io/badge/maintenance-passively--maintained-yellowgreen.svg)

### Deploy status:
[![Netlify Status](https://api.netlify.com/api/v1/badges/90886fb8-9a2a-4a28-b66e-6c38af5d8ce9/deploy-status)](https://app.netlify.com/sites/studiozed/deploys)
[![CodeQL](https://github.com/OudomMunint/StudioZed-ReactJS/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/OudomMunint/StudioZed-ReactJS/actions/workflows/github-code-scanning/codeql)
[![PROD Build + Release](https://github.com/OudomMunint/StudioZed-ReactJS/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/OudomMunint/StudioZed-ReactJS/actions/workflows/main.yml)

## Tech Stack
This project was built using these technologies.

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
- ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
- ![ESLint](https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- [![Webpack](https://img.shields.io/badge/Webpack-2ea44f?style=for-the-badge&logo=webpack&logoColor=light+blue)](https://)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## Getting Started
- Install <a href="https://nodejs.org/en/download/" target="_blank">`Node Js`</a> and <a href="https://git-scm.com/downloads" target="_blank">`Git`</a> globally on ur machine.
- Clone, download or fork this repository.
- Open the project with your IDE, use "Open Folder method"
- Delete all files that have a ".lock" as file extension.
- Open a terminal inside your IDE workspace.
- `CD` into the project's directory.
- Run `npm install`.
- Run `npm start`.

## Running an optimized build
- Run `npm install`.
- Run `npm run build` to create an optimized build.
- Run `install -g serve` to install serve globally.
- Run `serve -s build` to serve the optimized build.
- From the terminal, you can see the local address & network address to view the build, copy and paste it in your browser.

## Running tests
- Run `npm run test` to run tests.
- There are 1 test suite and 5 tests in total.
- Testing setup can be found in `setupTests.js` & all tests are in `App.test.js`.
- Tests are written using Jest & React Testing Library.
- All 5 Tests are currently integrated into the `CI/CD` pipeline.
- Example of test output:
```bash
  PASS  src/App.test.js
  √ Test home page content (525 ms)
  √ Find contact form (156 ms)                                                                
  √ Find form submit button (38 ms)                                                            
  √ Test web vitals (2 ms)                                                                 
  √ Test AboutPage (30 ms)                                                                      

Test Suites: 1 passed, 1 total                                                                   
Tests:       5 passed, 5 total                                                               
Snapshots:   0 total
Time:        4.137 s
  ```
## Forms
- The implementation of the contact form is integrated with `Netlify forms`.
- Learn how to set up `Netlify forms` [here](https://docs.netlify.com/forms/setup/).

## Known Issues
- Security issues found in dependencies but are low risk to this project, See dependabot alert [#26](https://github.com/OudomMunint/StudioZed-ReactJS/security/dependabot/26),  alert [#12](https://github.com/OudomMunint/StudioZed-ReactJS/security/dependabot/12).
- For more information, see the [Security Tab](https://github.com/OudomMunint/StudioZed-ReactJS/security/dependabot).