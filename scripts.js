/* 3 constantes*/
let firstCard = null;
let secondCard = null;
let lockBoard = false; /* pas compris ceci */

const cards = document.querySelectorAll(".memory-card")
cards.forEach(card => {
  card.addEventListener("click", flipCard);
});

function flipCard(){
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");


  if(!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
  lockBoard = true;
  checkForMatch();
}

function checkForMatch(){
  const img1 = firstCard.querySelector(".front-face").alt;
  const img2 = secondCard.querySelector(".front-face").alt;

  const base1 = img1.replace("name","").replace("signification","").trim();
  const base2 = img2.replace("name","").replace("signification","").trim();
  
  
  const isMatch = (base1 === base2) && (img1 !== img2);

  if(isMatch ) {
    disableCards();
  
  } else {
    unflipCards();
  }

}

function unflipCards(){
  setTimeout(() => {
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  resetBoard();
},1000);
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function resetBoard(){
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}