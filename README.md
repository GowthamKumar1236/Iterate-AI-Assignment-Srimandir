# Sri Mandir Clone

This project is a clone of the Sri Mandir website, providing an end-to-end flow from the home page to booking a pooja. The application is built using React.js for the frontend.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Routes](#routes)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/sri-mandir-clone.git
   cd sri-mandir-clone

2. Install dependencies:
    npm install

3. Start the development server:
    npm start

4. Open your browser and navigate to http://localhost:3000.

## Usage

- Navigate to the home page to see the welcome message.

- Click on "Go to Profile" to go to your profile page.

- Click on "Book Pooja Now" to start the booking process.

- Follow the steps to select a pooja, enter details, and complete the booking.

## Components

`App.js`
The main component that sets up the routes using React Router.

`HomePage.js`
Displays the welcome message and a link to the profile page.

`Profile.js`
Displays the profile page with a link to the pooja booking page.

`BookPooja.js`
Allows the user to select a pooja and proceed to the details page.

`PoojaDetails.js`
Collects the user's phone number and name before proceeding to the checkout page.

`Checkout.js`
Displays the final checkout page with a button to confirm the booking.

`Confirmation.js`
Displays a success message after the booking is confirmed.

## Routes

- `/`: Home page

- `/profile`: Profile page

- `/book-pooja`: Pooja booking page

- `/pooja-details`: Pooja details form

- `/checkout`: Checkout page

- `/confirmation`: Booking confirmation page