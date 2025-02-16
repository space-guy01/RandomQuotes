const quote = document.querySelector(".container h3");
const button = document.querySelector(".container button");

button.addEventListener("click", async function fetchQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "komAJhtQTEg7MU9FrpBqlw==GztBppGfnLZGvfak",
      },
    });

    const data = await response.json();
    // console.log(data[0].quote + " — " + data[0].author);
    quote.innerHTML = data[0].quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
});

fetchQuote();
