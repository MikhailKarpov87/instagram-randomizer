# Instagram Randomizer App

<img width="40%" src="https://s3.eu-central-1.amazonaws.com/github--projects/instagram-randomizer/instagram-randomizer.jpg" />

React/Redux App created for picking Instagram random profile(s) from specified list.

_App features:_

- Picking specified number of random profiles from specified list
- List of profiles could be pasted directly from Instagram web interface
- App is getting images directly from Instagram page without using Instagram API

[Demo](https://rndmizer.space/)

### Installation

- You should have [Node](https://nodejs.org/en/) installed
- Download or `git clone` this repository
- `npm install` to install dependencies
- `npm start` to start local dev server
- `npm run build` for production build

### App restrictions

- Recommended profiles number is up to 1000. Though app could possibly work with more than 1000 profiles. Any feedback is welcome.

- App doesn't use Instagram API, so it is relying on Instagram's web page structure for getting profile images. With changing of this structure on Instagram side app could stop working properly. Function for getting profiles images from Instagram could be found and modified at `/src/helpers.js | getProfileImageURL()`.

- Because all request for getting profile images are sent directly from browser, you need to make sure that pages of all users from specified profiles list are accessible from this browser (i.e. you are not blocked by this user, etc).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
