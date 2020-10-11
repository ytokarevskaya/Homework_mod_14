let resultNode;
let btnNode;


window.onload = function () {
resultNode = document.querySelector('.j-result');
btnNode = document.querySelector('.j-btn-request');


btnNode.addEventListener('click', () => {

  const inputPage = Number(document.querySelector('.input-page').value);
  const inputLimit = Number(document.querySelector('.input-limit').value);
  
 
  if ((!Number.isInteger(inputPage) || inputPage<1 || inputPage>10) && (!Number.isInteger(inputLimit) || inputLimit<1 || inputLimit>10)) {
    displayErrorMsg("Номер страницы и лимит вне диапазона от 1 до 10");
  } else if (!Number.isInteger(inputPage) || inputPage<1 || inputPage>10) {
    displayErrorMsg("Номер страницы вне диапазона от 1 до 10");
  } else if (!Number.isInteger(inputLimit) || inputLimit<1 || inputLimit>10) {
    displayErrorMsg("Лимит вне диапазона от 1 до 10");
  } else {
    

    fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
  .then((response) => {
    const result = response.json();
    return result;
  })
  .then((data) => {
    displayResult(data);
    
    const dataString = JSON.stringify(data);
    localStorage.setItem('myImages', dataString);
  })
  .catch(() => { console.log('error'); });
  }

});

const dataJSON = JSON.parse(localStorage.getItem('myImages'));
displayResult(dataJSON);
};


function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
     
    resultNode.innerHTML = cards;
    }
    
    function displayErrorMsg(message) {
      const display = `<p>${message}</p>`;
      resultNode.innerHTML = display;
    }