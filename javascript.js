
window.onload = function() {

    // Get the current date and time
var today = new Date();

// Format the date and time
var formattedDate = today.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
var formattedTime = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
var formattedDateTime = formattedDate + ' ' + formattedTime;

// Update the content of the <div> with the formatted date and time
document.getElementById('datetime').textContent = formattedDateTime;


var phrases = [
  "I'm a web developer",
  "I'm a UX designer",
  "I'm a social media marketer"
];

var typingElement = document.getElementById('typing-animation');
var currentPhraseIndex = 0;
var currentCharIndex = 0;

function typeNextPhrase() {
  currentPhraseIndex++;
  if (currentPhraseIndex >= phrases.length) {
    currentPhraseIndex = 0;
  }
  currentCharIndex = 0;
  typeCurrentPhrase();
}

function typeCurrentPhrase() {
  if (currentCharIndex < phrases[currentPhraseIndex].length) {
    typingElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeCurrentPhrase, 100); // Delay between each character
  } else {
    setTimeout(eraseCurrentPhrase, 2000); // Delay before erasing the phrase
  }
}

function eraseCurrentPhrase() {
  if (currentCharIndex > 0) {
    typingElement.textContent = typingElement.textContent.slice(0, -1);
    currentCharIndex--;
    setTimeout(eraseCurrentPhrase, 50); // Delay between each character erase
  } else {
    typeNextPhrase();
  }
}

// Start the typing animation
typeCurrentPhrase();
  };
