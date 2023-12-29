# Emerald Calculator - Frontend

This is a simple calculator that determines the ROI of managing a property with Emerald Stay. Its intended use is for prosepctive property owners who want to find out how much of a return they can make on their investment if they use Emerald Stay as a property management agency.

## How is ROI Calculated? 📝

In the case of this project, 3 inputs and 1 parameter was provided:

Inputs
- Purchase price of the property
- Monthly rent amount
- Annual rental fee

Restrictions
- Agency fees on the rent: 1st year 30%, 2nd year 25%, then 20% for the following years.

This logic was translated and utilised in the server repo and explained in the read me.

## How to get started with this app 🚩

The frontend is an app built with:

- Angular 17
- Angular Material
- Tailwind

To get started, clone this repo and cd into the app directory.

```bash
cd client
```

Install node version 18.3.0 if you do not already have it. I prefer using NVM for this.

```bash
# to check what your current node version is
node -v

nvm install v18.3.0
```

Allow the installation to finish. It can take some time so go grab a coffee ☕.

Once that is complete, within your directory, install the app dependancies

```bash
npm install
```

Once completed, you should be able to launch the frontend on localhost:4200

```bash
npm run dev
```

## App architecture - Microservices ⚙️

As this app has been built with microservices in mind, you will need to clone and configure the server repo in order to have a functioning app.

Clone the server repo [here](https://github.com/IliaZolas/emerald-server).

## Project Management 🚧

This project was managed using [Linear](https://linear.app/) and was synced with Github for automated issue and pull request tracking.

## Conclusion 👨‍🚀

I enjoyed building this project and have some thoughts on how it could be more practical

- User should be able to input a desired time period
- Error margin could be considered regarding fluctuation in market
- Deeper sanitisation could be implemented

Thank you for your time. If you are satisfied with this application, please get in touch!

Ilia 🍻

