## Purpose

Test if Strip payment is successfull after setting up API from Lama tutorial

## Steps

- clone
- npm i
- insert your personal client stripe api in components/Pay.js
- end point predefined 'http://localhost:5000/api/checkout/payment'
- npm start 
- navigate to 'http://localhost:5000/pay' and click checkout button
- insert an adress
- insert card credentials 4242 4242 4242 4242 - 08/24 - 123
- debug in web developer tools console if any problem occurs
- check your stripe dashboard for succeeded payments
