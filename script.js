const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

let fontSize = 1.2; // Initial font size for Yes button
const confirmWords = ["Maybe Not...", "Still Thinking?", "Need More Time", "Deflecting, Huh?", "Come on, Admit It!", "I'm so sad!!","Relly sad","thik again"]; // Array of confirmation words
let wordIndex = 0; // Index to loop through confirmation words

noButton.addEventListener("click", () => {
  fontSize += 1; // Increment font size for Yes button
  yesButton.style.fontSize = `${fontSize}em`;

  wordIndex = (wordIndex + 1) % confirmWords.length; // Loop confirmation words
  noButton.textContent = confirmWords[wordIndex];
});

yesButton.addEventListener("click", () => {
  alert("I love you too!❤💖💕");
});

