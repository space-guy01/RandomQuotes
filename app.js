const quote = document.querySelector(".container h3");
const button = document.querySelector(".container button");

// Function to fetch a random quote
async function fetchQuote() {
  try {
    // Show loading message
    quote.innerHTML = "Fetching Quote...";
    button.disabled = true; // Disable button while fetching

    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "komAJhtQTEg7MU9FrpBqlw==GztBppGfnLZGvfak",
      },
    });

    const data = await response.json();

    // Update UI with the quote and author
    quote.innerHTML = `"${data[0].quote}<br><br>--<br>${data[0].author}</strong>`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerHTML = "⚠️ Failed to fetch quote. Please try again.";
  } finally {
    button.disabled = false; // Re-enable button after fetching
  }
}

// Event listener for button click
button.addEventListener("click", fetchQuote);

// Fetch a quote on page load
fetchQuote();
