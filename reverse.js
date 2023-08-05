function Content() {
    const textareaValue = document.getElementById('textarea').value;
    const outputElement = document.getElementById('output');
    outputElement.textContent =textareaValue.split("").reverse().join("");
   
  }