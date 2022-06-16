let newQuote;

var quotes = [
  "Don't cry because it's over, smile because it happened.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Be yourself; everyone else is already taken.",
  "You are never too old to set another goal or to dream a new dream.",
  "If you can dream it, you can do it.",
  "Never give up, for that is just the place and time that the tide will turn.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "A room without books is like a body without a soul.",
  "No one can make you feel inferior without your consent.",
];

var author = ["- Dr. Seuss", "- Marilyn Monroe", "- Oscar Wilde", "- C.S Lewis", "- Walt Disney", "- Harriet Beecher Stowe", "- Albert Einstein", "- Bernard M. Baruch", "- Marcus Tullius Cicero", "- Eleanor Roosevelt"];

function getQuotes() {
  var newQuote = Math.floor(Math.random() * quotes.length);
  var newAuthor = Math.floor(Math.random() * quotes.length);

  document.getElementById("text").innerHTML = quotes[newQuote];
  document.getElementById("author").innerHTML = author[newAuthor];
}

getQuotes();

/*
function getRandomQuote() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $(".quote-text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(randomQuote.quote);
  });

  $(".quote-author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").html(randomQuote.author);
  });
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $("#new-quote").on("click", getQuote);
}); */
