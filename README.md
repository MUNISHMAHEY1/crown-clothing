# Crown Clothing

```diff 
- Still Under development. Will update when development complete and have deployed the final product. 
```  
              
## `Description`
Before we move forward take a look at the website, register yourself with it and try and play around with things. &nbsp; **[LIVE DEMO](https://crown-clothing-private-limited.herokuapp.com/ "LIVE DEMO")** </br></br>
**"_Crown Clothing_"** Crown Clothing Ltd. is an E-commerce Website where you can go and shop for clothing.


## `Visuals`

Desktop View               |  Mobile View
:-------------------------:|:-------------------------:
![Screenshot (206)](https://user-images.githubusercontent.com/47336885/88493158-aa1b5100-cf7d-11ea-8b99-3a073acd3dab.png) |  ![Screenshot 2020-07-26 at 20 00 32](https://user-images.githubusercontent.com/47336885/88493250-1c8c3100-cf7e-11ea-858b-9af4564d63c1.png)


## `Technology Used`
### **_JavaScript, React, Redux, Redux-Saga, React Hooks, Express.js, Node.js, Material UI, HTML5, CSS3, Firebase, SCSS, Styled-Components, Git_**
- **_JavaScript_** as the base developement language.
- Server was built using **_Nodejs and Express_**.
- Database was set using **_[Firebase/ Firestore](https://firebase.google.com/ "Learn more about Firebase")_**.
- **_[Redux](https://redux.js.org/ "Learn more about Redux")_** used for state managemnet.
- **_[Stripe API](https://stripe.com/en-ca "Learn more about stripe")_** used for payments.
- **_[SCSS](https://sass-lang.com/documentation/syntax "Learn more about SCSS")_** used for styling the components.
- **_[Styled Components](https://styled-components.com/ "Learn more about Styled Components")_** used in some components to style the application.
- **_[React Hooks](https://reactjs.org/docs/hooks-intro.html "Learn about React Hooks")_** used in the front-end to avoid using stateful components.
- `Jest` used for Unit Testing. 
- `Heroku` was used to deploy the application.


## `Installation Guide`
### Steps to run in development mode
- Fork the repo and clone it.
- Make sure you have **`npm`** and **`Node.js`** installed in your system.
- Check the libraries and packages needed from **`package.json`** file under the dependencies object.
- In the terminal type **`npm install`** to install the packaged of the application.
- Setup your **_[Firebase](https://firebase.google.com/ "Learn more about Firebase")_** account.
- Setup your **_[Stripe API](https://stripe.com/en-ca "Learn more about stripe")_** account.
- Open **`src/components/stripe-button/StripeCheckoutButton.js`** and replace the publishable key with your stripe publishable key.
- Create **`.env`** file in src and put it in **`.gitignore`**. Now put your stripe screte key in .env file by creating a **`STRIPE_SECRET_KEY`** variable.
- Run **`npm run dev`** to run server or  and client side at the same time.
- Go to http://localhost:3000 to see the application running. **_(Happy Coding)_**
