const quotes = [
{
    name:'Stephen King',
    quote:'Get busy living or get bust dying.'
},
{
    name:'John F.Kennedy',
    quote:'Those who dare to fall miserably can achieve greatly.'
},{
    name:'Abraham Lincoln',
    quote:'Im a success today because I had a friend who belived in me and I didnt have the heart to let him down.'
},
{
    name:'Leonardo Da Vinci',
    quote:'It had long since come to my attenetion that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
},
{
    name:'Leo Tolstory',
    quote:'If you want to be happy, be.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;

}

