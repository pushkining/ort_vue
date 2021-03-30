const itemName = document.querySelector('.item-name');
const itemCountry = document.querySelector('.item-country');
const itemScore = document.querySelector('.item-score');
const doAjax = async () => {
    const response = await fetch('./assets/api.json'); // Генерируем объект Response
    if (response.ok) {
        const jVal = await response.json(); // Парсим тело ответа
        return Promise.resolve(jVal);
        }
    else
        return Promise.reject('*** File not found');
    }

doAjax().then((data)=>{
for(const item of data) {
    itemName.innerHTML += `${item.name}<br>`;
    itemCountry.innerHTML += `${item.country}<br>`;
    itemScore.innerHTML += `${item.score}<br>`;
}
}).catch(console.log);