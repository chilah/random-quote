document.addEventListener('DOMContentLoaded', () => {
  var quotes;
  var authors;
  
  function getQuote() {
    // convert a data to json 
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => {
        const {quote} = data;
        
        quotes = quote.body;
        authors = quote.author;
      
        document.getElementById('quote').innerHTML = quotes;
        document.getElementById('author').innerHTML = authors;
      })
      .catch(error => console.log(error));
  }

  function randomColor() {
    var color = ['F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '03A9F4', '009688',
    '4CAF50', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722', '795548', '607D8B'];

    // random background color
    var random = '#' + color[Math.floor(Math.random() * color.length)];

    document.querySelector('body').style.backgroundColor = random;
  }

  const getNewQuote = document.getElementById('getQuote');
  const tweetBtn = document.getElementById('tweet');

  // get a random quote and random color
  getNewQuote.addEventListener('click', function () {
    getQuote();
    randomColor();
  });

  // tweet
  tweetBtn.addEventListener('click', function () {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotes + ' –' + authors));
  });

  // run both func when page is loaded
  randomColor();
  getQuote();
});
