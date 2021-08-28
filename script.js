function getArticleGenerator(articles) {
    let arr = articles;
    // <div id="content"></div>

    function showNext() {

        if (arr.length > 0) {

            let doc = document.getElementById('content');

            let article = document.createElement('article');
            article.textContent = arr.shift();
            doc.appendChild(article);
        }

    }

    return showNext;

}
