const clickcards = document.querySelectorAll(".memory-card");

clickcards.forEach(card => {
  card.addEventListener("click", (event) => {
    card.classList.toggle("flip");
  });
});

