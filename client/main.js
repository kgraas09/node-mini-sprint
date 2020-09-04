$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote() {
    $.get('http://localhost:3000/quote/')
    .then((data) => {
      console.log(data);
      $("#response").append(data);
      });
    };


  function addQuote(quote) {
    $.post('http://localhost:3000/quote/', quote)
    .then((data) => {
      console.log(data);
      $('#response').text('Your submission has been recorded! ' + quote);
      $("#response").append(data);
    })
  }
});
