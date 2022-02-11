import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51KJ1plAc3I4SyaX0EGoj2HgL6AYyFJfXriNJ1MTNiIvMkVtdgiIPBHpldY49vQjDCGsMmLnZGXhs3bP5d0L2rrPn00wCnB3C0o');

ReactDOM.render(
<Elements stripe={stripePromise}>
<App />
</Elements>, 
document.getElementById('root'));