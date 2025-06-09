function showQuote() {
  const quotes = [
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "You are never too old to set another goal. — C.S. Lewis",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Everything you can imagine is real. — Pablo Picasso"
];

  const flap = document.querySelector(".flap-upper");
  const letter = document.querySelector(".letter");
  const flapright = document.querySelector(".flap-right");
  const flapleft = document.querySelector(".flap-left");
  const flapbottom = document.querySelector(".flap-bottom");
  const randomIndex = Math.floor(Math.random() * quotes.length);

  letter.classList.toggle("show")
  flap.classList.toggle("open");

  if (letter.classList.contains("show")) {
    flapright.style.zIndex = "7";
    flapleft.style.zIndex = "7";
    flapbottom.style.zIndex = "7";
    fetch("https://thequoteshub.com/api/")
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch quote");
        return response.json();
      })
      .then(data => {
        const quote = data.text;
        if (quote.length >= 80 && quote.length <= 120) {
          quoteText.textContent = `"${quote}"`;
        } else {
          quoteText.textContent = quotes[randomIndex];
        }
      })
      .catch(error => {
        console.error("Error fetching from Quotes Hub:", error);
        quoteText.textContent = "Couldn't fetch a quote";
      });
  }
  else{
    flapright.style.zIndex = "7";
    flapleft.style.zIndex = "7";
    flapbottom.style.zIndex = "7";
  }
}
