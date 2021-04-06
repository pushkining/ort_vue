(async function(){
const URL = `https://newsapi.org/v2/everything?q=php&apiKey=0c075884fe5a46ba994357d3c60445ba&pageSize=100&language=ru`;
const KEY = '0c075884fe5a46ba994357d3c60445ba';
let data = await fetch(URL);
data = await data.json();
news = data.articles;
console.log(news);
})()