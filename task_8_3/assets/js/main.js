(async () => {

    let KEY = '2053a95831ca485e9c7f0cc35690e914';
    const KEY_2 = '0c075884fe5a46ba994357d3c60445ba';
    let URL = `https://newsapi.org/v2/everything?q=covid&pageSize=100&apiKey=${KEY_2}&language=ru`;


    let news = await fetch(URL);
    news = await news.json();
    news = news.articles;
    console.log(news);


    let newsListSection = document.querySelector('#news-list-place');
    let newsListOutputPlace = document.querySelector('#news-list-place ul');
    let oneNewsSection = document.querySelector('#one-news-place');
    let oneNewsOutputPlace = document.querySelector('#one-news-place article');
    let backButton = document.querySelector('#back-button');

    backButton.addEventListener('click', function () {
        newsListSection.classList.remove('d-none');
        oneNewsSection.classList.add('d-none');
    });

    newsListOutputPlace.innerHTML = news.map((item, i) => `
        <li data-id='${i}' class="list-group-item">
            <u>${item.title}</u> 
        </li>
    `).join('');


    for (let li of newsListOutputPlace.children) {
        li.addEventListener('click', function () {
            console.log(`Selected news ID #${this.dataset.id} in 'news' array.`);

            let currentNews = news[this.dataset.id];
            oneNewsOutputPlace.innerHTML = `
                <h1>${currentNews.title}</h1>
                <div>${currentNews.publishedAt}</div>                
                <p><i>${currentNews.description}</i></p>               
                <img class='img-thumbnail' src="${currentNews.urlToImage}">
                <p>${currentNews.content}</p>
                <a href="${currentNews.url}" target="_blank" class="btn btn-primary">Read Original</a>
            `;

            oneNewsSection.classList.remove('d-none');
            newsListSection.classList.add('d-none');

        });
    }

})();

