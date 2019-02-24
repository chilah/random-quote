$(document).ready(function () {
  // color array for random backgrond color
  var color = ['F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '03A9F4', '009688', '4CAF50', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722', '795548', '607D8B'];

  // random a color from color array
  function randomColor() {
    var random = '#' + color[Math.floor(Math.random() * color.length)];

    $('body').css('background-color', random);
  }

  //get quote from api 
  function getRandomQuote() {
    $.ajax({
      url: 'http://quotes.stormconsultancy.co.uk/quotes.json',
      success: function(data) {
        //random to get an index and set it to quote and quthor
        const randomArr = Math.floor(Math.random() * data.length);
        let quote = data[randomArr].quote;
        let author = data[randomArr].author;
        
        $('.quote').text(quote);
        $('.author').text('— ' + author);
      }
    });
  }

  // random quote and color button
  $('.getQuote').click(function () {
    getRandomQuote();
    randomColor();
  });

  // tweet the quote
  $('.tweet').on('click', function () {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '–' + author));
  });

  getRandomQuote();
});