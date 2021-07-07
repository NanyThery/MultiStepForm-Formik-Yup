# What is this repo about?

This is an example of a multistep form built with Formik and using Yup for validations. It features an Auth0 validation. 

In order for this repo to work, you need to set up your AuthO account and register your app. Once you have that, create a .env file with your enviroment variables for it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies

- React > with create-react-app
- [Orbit.kiwi](https://orbit.kiwi/) > as components design framework
- [Styled-Components](https://styled-components.com/) > as atomic design framework
- [Formik](https://styled-components.com/) > for form handling
- [Yup](https://yarnpkg.com/package/yup) > for extra field validation handling with Formik
- [Auth0 SDK](https://auth0.com/) > for authentication

## Local deployment

1. Clone repository
2. Run `yarn install`
3. Add `.env` file provided to the root directory of the project (you need to set up Auth0 accout first)
4. Run `yarn start`

In order for the Auth0 to run properly the app must be run on localhost:3000.
