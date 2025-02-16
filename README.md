# 📜 Random Quote Generator

A simple web app that fetches and displays random quotes using the API Ninjas Quotes API. Built with **HTML, CSS, and JavaScript**.

## 🚀 Features

- Fetches random quotes from an API.
- Displays the author's name.
- Includes a **loading indicator** while fetching.
- **Disables the button** temporarily to prevent spam requests.
- **Handles errors** gracefully if the API request fails.
- Simple and clean **responsive UI**.

## 🛠️ Technologies Used

- **HTML** (Structure)
- **CSS** (Styling)
- **JavaScript (ES6+)** (Logic & API Handling)

## 🔧 Setup & Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/random-quote-generator.git
   ```
2. Open the project folder:
   ```sh
   cd random-quote-generator
   ```
3. Open `index.html` in a browser.

## 🔑 API Key Setup

This project uses the **API Ninjas Quotes API**. To use it:

1. Sign up at [API Ninjas](https://api-ninjas.com/)
2. Get your **API Key**
3. Replace `"komAJhtQTEg7MU9FrpBqlw==GztBppGfnLZGvfak"` in `app.js` with your actual API key:
   ```js
   headers: {
       "X-Api-Key": "komAJhtQTEg7MU9FrpBqlw==GztBppGfnLZGvfak"
   }
   ```

## 🎯 Usage

- Click the **Generate** button to fetch a new quote.
- A **loading message** appears while fetching.
- The fetched **quote and author** are displayed.
- If an error occurs, an error message is shown.

## 📜 License

This project is open-source and available under the **MIT License**.

## 👨‍💻 Author

- **StackOrigin** – [GitHub](https://github.com/space-guy01)

Happy Coding! 🚀
