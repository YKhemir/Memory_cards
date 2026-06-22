const clickcards = document.querySelector(".memory-card");

button.forEach(card => {
  card.addEventListener("click", (event) => {
    card.classList.toggle("flip");
  });
});