# React Progressive Web App (PWA)

Progressive Web App (PWA) developed using the ReactJS framework. This app allows users to install the app onto their devices and use it much like any other native web app. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## App Features
* Capture video and audio from device through:
  * [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
  * [HTML5 Input Field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/inpu/file)
* Play recorded video and audio through the use of standard [HTML5 video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

## Available Scripts

In the project directory, you can run:

### `npm run start-sw`
Uses [http-serve](https://www.npmjs.com/package/http-serve) to serve application and enable service worker functionality 


### `npm run predeploy`
Creates or Updates the /build folder

### `npm run deploy`
Deploys contents of /build folder to gh-pages (Git Hub Pages) branch for hosting


> IMPORTANT!: Ensure the following two files are in the root directory. If either of them happen to be missing, please create them with the following contents

```yaml
# filename: .env.production

# /react-pwa = location of github repo containing gh-pages branch
PUBLIC_URL=/react-pwa
```

```yaml
# filename .env.production.local
PUBLIC_URL=
```

