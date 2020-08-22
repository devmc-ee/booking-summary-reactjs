import React from 'react';
import {Formik, Form} from 'formik';
import BookingSummary from "./BookingSummary";

import './App.css';
import {Button} from "@material-ui/core";

function App() {

	const initValues = {
		services: [
			{
				serviceBase: "th",
				serviceOption: "th1"
			},
          {
            serviceBase: "f",
            serviceOption: "f05"
          },
          {
            serviceBase: "h",
            serviceOption: "h05"
          },
          {
            serviceBase: "b",
            serviceOption: "b05"
          },

		],
        servicesTotalCost: 60,
		appointment: {
			date: "2020-09-20",
			time: "12:00"
		},
		contacts: {
			name: 'Jonh',
			email: 'john@mail.com',
			telephone: '5555555',
			countryCode: 'EE',
			forAnother: 'true',
			anotherName: 'Aleks'
		},
		payment: {
			method: 'giftCard',
			addInfo: "LTG10101"
		},
		comments: ''
	};

	return (
		<div className="App">
			<Formik initialValues={initValues} onSubmit={(values)=>alert(JSON.stringify(values, null, 2))}>
				{formik => (
					<Form className="appForm">


						<BookingSummary/>
                      <Button
                          href=""  type="submit" variant="contained" color="primary" disableRipple={false}
                      > Next </Button>
                     <pre> {JSON.stringify(formik.values, null, 2)}</pre>

					</Form>

				)
				}
			</Formik>

		</div>
	);
}

export default App;
