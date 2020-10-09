function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
}
let resultNode;
let btnNode;
window.onload = function () {
  resultNode = document.querySelector('.j-result');
  btnNode = document.querySelector('.j-btn-request');

  btnNode.addEventListener('click', () => {
    const inputNumber = Number(document.querySelector('.j-input-number').value);
    if (!Number.isInteger(inputNumber)) {
      alert("Это не целое число!");
    } else if (inputNumber < 1 || inputNumber > 10) {
      alert("Число вне диапазона от 1 до 10");
    } else {
      useRequest(`https://picsum.photos/v2/list/?limit=${inputNumber}`, displayResult);
    }

  });
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
