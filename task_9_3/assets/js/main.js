
const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

document.addEventListener('DOMContentLoaded', async function () {

    let rates = await fetch(URL);
    rates = await rates.json();
    console.log(rates);

    function render(list) {
        let tbody = document.querySelector('tbody');
        tbody.innerHTML = list.map((item) => `
        <tr>
            <th>${item.cc}</th>
            <td>${item.txt}</td>
            <td>${item.rate}</td>
            <td> 
                <button data-cc="${item.cc}" class='btn btn-primary w-100'>Details</button>
            </td>
        </tr>`).join('');
        let buttons = document.querySelectorAll('tbody button');
        for (let btn of buttons) {
            btn.onclick = function () {
                let cc = this.dataset.cc;
                let rate = rates.filter(i => i.cc == cc)[0];

                ccPlace.innerHTML = rate.cc;
                txtPlace.innerHTML = rate.txt;
                ratePlace.innerHTML = rate.rate;
                exchangedatePlace.innerHTML = rate.exchangedate;
                rateDialog.showModal();
            }
        }
    }

    rateDialogCloseBtn.onclick = () => rateDialog.close();

    render(rates);

    //console.log(rates);


    let searchInput = document.querySelector('input');
    searchInput.addEventListener('input', function () {
        let searchText = this.value.toLowerCase();
        let filtredRates = rates.filter(i => i.txt.toLowerCase().includes(searchText) || i.cc.toLowerCase().includes(searchText))
        render(filtredRates);
    })

});
