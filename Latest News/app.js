let newsBox = document.getElementById('newsBox')
let newsList = document.getElementById('newsList')
let newsItems = news.articles.map(function (article) {
    return `<li>
                <div class="bigBox">
                    <div class="BigStuff">
                        <div class="imgBox">
                            <img src=${article.urlToImage}>
                        </div>  
                        <div class="titleAuthorBox">
                                <h3>${article.title}</h3>
                                <p>By: ${article.author}</p>
                        </div>
                    </div>
                    <div class="descriptBox">
                            <p>${article.description}<p>
                    </div>
                    <div class="sourceBox">
                            <p>${article.publishedAt}<p>
                            <a href=${article.url}>Read about it here</a>
                    </div> 
                </div>
            </li>`
})
newsList.innerHTML = newsItems.join("")