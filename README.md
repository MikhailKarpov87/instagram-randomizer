# Instagram Randomizer App

React/Redux App created for picking Instagarm random profile(s) from specified list.

<img width="40%" src="https://s3.eu-central-1.amazonaws.com/github--projects/instagram-randomizer/instagram-randomizer.jpg" />

App features:

- Picking specified number of random profiles from specified list
- Profiles list may be pasted directly from Instagram web interface
- App is getting images directly from Instagram page without using Instagram API

[Demo2] - coming soon

### Installation

- You should have [Node](https://nodejs.org/en/) installed
- Download or `git clone` this repo
- `npm install` to start local dev server
- `npm start` to start local dev server
- `npm run build` for production build

### App restrictions

Recommended profiles number is 1-1000. App could possibly work with list of more than 1000 profiles but it was not tested. Any feedback is welcome.

App doesn't use Instagram API, so it has to rely on Instagram web page structure for getting profile images. With changing of this structure on Instagram side app could stop working properly. Profile image parsing function could be found and modified at `/src/helpers.js | getProfileImageURL()`.

Because all request for getting profile images are sent directly from browser, you need to make sure that pages of all users from specified profiles list are accessible from this browser (i.e. you are not blocked by this user, etc).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
