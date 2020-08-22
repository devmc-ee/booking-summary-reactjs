# BookingSummary component
This React component is a part of the [booking form app](https://github.com/devmc-ee/devmcee-booking). It is the
final step of the booking process where customer overviews his order, add some comments and submits the booking 
request.

The Component fetches data from [Formik](https://formik.org/docs/overview) context and displays data with
[Material-UI](https://material-ui.com/) components. The data structure and types are specific for thai massage salon.

Date is formated with [Momentjs](https://momentjs.com/).

Country calling codes are fetched from https://restcountries.eu/ via its API 

Mocked data is set as initial value of the formik form. Translations and some settings imported from DATA.js file.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Start

Clone the repository:
```bash
git clone https://github.com/devmc-ee/booking-summary-reactjs.git
````

Install dependencies
### `yarn install`
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
