
// const doAjax = async () => {
//     const response = await fetch('./assets/api.php'); // Генерируем объект Response
//     if (response.ok) {
//         console.log(response);
//         const jVal = await response.json(); // Парсим тело ответа
//         return Promise.resolve(jVal);
//         }
//     else
//         return Promise.reject('*** PHP file not found');
//     }

// doAjax().then(console.log).catch(console.log); 
export default class GetService {
    _apiBase = 'http://localhost:5500';
    url = "/assets/ap[i.json"
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
}