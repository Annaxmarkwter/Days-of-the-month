function checkText() {
    let textInput = document.getElementById('textInput').value.toLowerCase();
    let forbiddenWords = ['fuck', 'shit', 'foolish', 'stupid'];
  
    let containsForbiddenWord = false;
    forbiddenWords.forEach(word => {
      if (textInput.includes(word)) {
        containsForbiddenWord = true;
        return;
      }
    });
  
    let outputDiv = document.getElementById('output');
    if (containsForbiddenWord) {
      outputDiv.textContent = 'Your text contains forbidden words!';
    } else {
      outputDiv.textContent = 'Your text is clean.';
    }
  }