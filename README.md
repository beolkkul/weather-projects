# 🌤️ Weather App 

**[View Live Project Here](https://weather-projects-eight.vercel.app)**

![Screenshot of App](./image/website%20preview.png)

## 📖 Overview
A dynamic, responsive weather application that allows users to search for real-time weather forecasts around the world. Built to practice asynchronous JavaScript and API integration.

## 💻 Tech Stack
* **Front-End:** HTML5, CSS3, JavaScript (ES6+)
* **Build Tool:** Vite
* **APIs:** OpenWeatherMap API

## ✨ Features
* Fetches and displays real-time temperature and weather conditions, along with a prediction for the next 24 hours.
* Fully responsive UI for both mobile and desktop.
* Fast loading times optimized by Vite.

## 🧠 What I Learned
During this project, I learned how to properly implement a third-party API and push the code successfully to GitHub while keeping my API key secure and hidden. I also encountered and resolved an bug: my weather icons were not rendering during the production build (`npm run preview`) despite working in the development environment (`npm run dev`). By debugging Vite's static asset handling and moving the icons to the `public` folder, I was able to successfully render the images on the live webpage.

## 🛠️ How to Run Locally
1. Clone the repository: `git clone https://github.com/beolkkul/weather-projects.git`
2. Navigate into the folder: `cd weather-projects`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`