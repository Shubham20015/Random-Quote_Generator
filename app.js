AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let quoteData = "";

const tweetNow = ()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random()*1000);
    quoteData = realData[rnum];
    quotes.innerText = `${quoteData.text}`;
    quoteData.author == null ? (author.innerText = `By Unknown`): (author.innerText = `By ${quoteData.author}`);
};
const getQuotes = async ()=>{
const api = 'https://type.fit/api/quotes';
try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
} catch (error) {
    console.log(error);
}
};
tweetMe.addEventListener("click" , tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();