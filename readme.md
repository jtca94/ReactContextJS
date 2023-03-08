# React App with Home and Favoritos Pages using reactContext

This React App has two pages, Home and Favoritos. In the Home page, an array of pictures is displayed, each with a SVG component that works as a like button. When the user clicks on the button, the picture is added to the liked pictures list using React Context. The user can then navigate to the Favoritos page to see their liked pictures. If the user clicks on the like button again, the picture is removed from the list and will not be displayed on the Favoritos page. On the Context folder you can see the file used to consume the api and the logic to display the array of pictures in Home and Favoritos

## Setup

To run the app, follow these steps:

1. Clone the repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the app.

## Usage

Once the app is running, you can navigate to the Home or Favoritos page using the navigation bar. In the Home page, you can click on the like button to add a picture to your liked pictures list. The number of likes is displayed on the button. When you navigate to the Favoritos page, you will see the list of liked pictures. Clicking on the like button again will remove the picture from the list.

## Technologies

This app is built with:

- React
- React Router
- React Context
- CSS

