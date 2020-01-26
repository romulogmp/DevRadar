<p align="center"><strong>DevRadar Omnistack#10 - Rocketseat </strong></p>
<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
</p>

## Install
Setup MongoDB and update the connection url with your `<username>` and `<password>` in the file `index.js`.  

Install all dependcies and run the server with:
```bash
cd backend
yarn install
yarn dev
```
**Frontend**: execute:
```bash
cd frontend
yarn install
yarn start
```
<p align="center"><strong>Insert Devs Form</strong></p>
<img align="center" src="./static/insertPage.PNG"></img>
<br/>
<p align="center"><strong>Edit Form</strong></p>
<p align="center"><img align="center" src="./static/editForm.PNG"></img></p>

**Mobile**: first, setup your server address on the file `src/services/api.js`, and then execute:
```bash
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```
<p align="center"><strong>Mobile - Real time update with WebScokets</strong></p>
<img align="center" src="./static/mobile.gif"></img>

## Backend
Check [backend/README.md](./backend) about the backend achtecture.

## Frontend
Check [web/README.md](./web) abount the frontend patterns.