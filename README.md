# 📋 React Project - IP Tracker

This is a refactor of a Frontend Mentor challenge that can be researched here: https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0.

Here is a brief of the challenge: *Your challenge is to build out this IP Address Tracker app and get it looking as close to the design as possible. To get the IP Address locations, you'll be using the IP Geolocation API by IPify. To generate the map, we recommend using LeafletJS.*

A deployed version of the project can be found here: https://ewreact.netlify.app/
My original project can be found here: https://ipaddressew.netlify.app


## 💻 Technologies Used

* **React:** Frontend library for building the user interface.
* **Tailwind CSS:** Utility-first framework for styling.
* **IP Geolocation API by IPify:** IP Geolocation API allows you to locate and identify website visitors by IP address. IP location helps prevent fraud, customize web experiences, and maintain regulatory compliance.
* **Leaflet:** an open-source JavaScript library for mobile-friendly interactive maps.
* **React Leaflet:** React Leaflet provides bindings between React and Leaflet. It does not replace Leaflet, but leverages it to abstract Leaflet layers as React components.
* **Vite:** A blazing fast frontend build tool powering the next generation of web applications.

## ✨ Features

* **View Current IP Address:** Users can see their own IP Address on the map on the initial page load
* **Search for IP Address:** Users can search for any IP addresses or domains and see the key information and location
* **Responsive Design:** Users can view the optimal layout for each page depending on their device's screen size
* **Interactive Elements:** Users can see hover states for all interactive elements on the page

## ⚙️ Installation

To run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/elysewelsh/ReactProject.git

# Navigate into the directory
cd react-ip-project

# Install dependencies (React, Tailwind, Leaflet, React-Leaflet, etc.)
npm install

# Start the local development server
npm run dev
```

## 📖 References

* **Project References:** 
    - https://medium.com/@timndichu/getting-started-with-leaflet-js-and-react-rendering-a-simple-map-ef9ee0498202
    - https://medium.com/@sankalpa115/usedebounce-hook-in-react-2c71f02ff8d8
    - https://react.dev/learn/updating-objects-in-state
    - https://youtu.be/QgLLC-rgwKI
    - Module 10 FruitSearch activity
    - https://stackoverflow.com/questions/62378796/cannot-destructure-property-of-object-from-context#62378895 (re-named input to query)
    - https://react.dev/warnings/invalid-hook-call-warning
    - https://geo.ipify.org/docs
    - https://react-leaflet.js.org/docs/api-components/
    - https://react-leaflet.js.org/docs/api-map/
    - https://react-leaflet.js.org/docs/start-setup/
    - https://create-react-app.dev/docs/adding-images-fonts-and-files/
    - https://stackabuse.com/importing-images-with-react/
    - https://www.codestudy.net/blog/background-image-in-tailwindcss-using-dynamic-url-react-js/
    - https://tailwindcss.com/
    - https://dev.to/coderc/how-to-add-external-fonts-with-tailwind-css-and-reactjs-4h4g
    - https://medium.com/@rohantgeorge05/goodbye-tailwind-config-js-tailwindcss-v4s-new-css-first-setup-explained-with-react-vite-496aabdd1457

* **To Format README:** These templates gave me formatting advice and inspiration:
     - [Scrimba README template](https://github.com/elysewelsh/lab2.1/blob/main/README.md)
     - [Frontend Mentor README template](https://github.com/elysewelsh/sba3/blob/main/README-template.md)

## 💖 Acknowledgements

* **Monique**
* **Jasmine**
* **Jade**
* **Quinn**

    *Permission has been given to use my repository as reference material to anyone else in class.*

## 🧘 Reflections

Write a 200-300 word reflection discussing your development process, challenges faced, solutions implemented, and potential improvements. 

I initially started by copying as many reusable code snippets and components and hooks into the project as I could. I had a general structure in my mind and those general pieces of code helped develop a stronger architecture.

I added variables and specific functions to the generic code to start seeing things on the screen. I was able to see a general shape of the page within 8 hours of coding.

Connecting the components did not go smoothly. I set the project up with a context provider and, although it was easy to connect the pieces using the shared states, it was not easy to get the webpage to display properly once the data was flowing. I wasn't receiving useful errors.

I started simplifying the code by removing context and moving custom hooks into the main app component to eliminate communication errors. This made a huge spaghetti mess and I needed help.

I attended office hours and Quinn, Monique, and Jasmine helped me see through the mess and get straightened out. I had forgotten most of the React fundamentals like submitting an input, so it was helpful to have the support when I had exhausted myself.

Once I got on the right path of detangling the code and the connections, it was easier to trace the input and states. I console.logged everywhere I could and read the console messages to see where the data was going first. I discovered that my first useEffect wasn't even getting data back until the third run because the data was re-setting so arbitrarily because of the custom hook being too eager to refresh all the states. It also ran at least three times unintentionally, so that was worrisome.

I created a function to run initially to get the user's IP address. This was something I ran out of time for in the last project, so I was happy to see it work this time. After I had that data secured on load, I removed all unnecessary setter functions to clear the state of the data. I then traced the data through the console messages and determined it was proper.

I googled every issue I ran into, so there is a library of references included in this document. I didn't always implement the suggested solutions, but I learned something about React's behavior, so I added those articles as well.

If I had more time, I would figure out the custom marker for Leaflet. It has evaded me again. I could view it locally earlier today. I no longer can. It has never been successfully deployed. 

I will also continue to work on the mobile state. It looks good on my machine (haha!) but it doesn't look good on other computers in the house or on my phone. I'm at a loss, but will continue trying.