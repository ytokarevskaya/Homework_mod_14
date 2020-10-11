let resultNode;
let btnNode;

window.onload = function() {
  resultNode = document.querySelector('.j-result');
  btnNode = document.querySelector('.j-btn-request');
  
  btnNode.addEventListener('click', () => {
    const inputWidth = Number(document.querySelector('.j-input-width').value);
    const inputHeight = Number(document.querySelector('.j-input-height').value);

    if (!Number.isInteger(inputWidth) || !Number.isInteger(inputHeight)) {
      displayErrorMsg("Возможно, вы ввели не целое число");
    } else if ((inputWidth<100 || inputWidth>300) || (inputHeight<100 || inputHeight>300)) {
      displayErrorMsg("Одно из чисел вне диапазона от 100 до 300");
    } else {
      fetch(`https://picsum.photos/${inputWidth}/${inputHeight}`)
    .then((response) => {
      displayResult(response.url);
    })
    .catch(() => { console.log('error'); });
    }
  
  });
};

  function displayResult(url) {
    const cardBlock = `
      <div class="card">
        <img src="${url}" />
      </div>
    `;
  resultNode.innerHTML = cardBlock;
}


function displayErrorMsg(message) {
  const display = `<p>${message}</p>`;
  resultNode.innerHTML = display;
}