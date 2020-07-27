// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

/* START HERE */

//used axios to get API from url then used the method `then` to return a promise
//used the `object.values` method to return the array which elements are the enumerable property values found inside the given object.
//used `forEach` method to loop through each item in the object, to loop through the array then append the card components.


const cardEntry = document.querySelector('.cards-container');
    console.log(cardEntry);
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then((response) => {
          console.log(response);
        const keyValues = Object.values(response.data.articles)
          console.log(keyValues)
        keyValues.forEach(e => {
            e.forEach(item => {
                cardEntry.append(CardMaker(item))
        })
    })
})
    .catch((error) => {
        console.log("what am i missing", error);
    })

/*
{javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)}
    bootstrap: Array(3)
        0: {headline: "Bootstrap 5: Get a Sneak Peak at all the New Features", authorPhoto: "./assets/fido.jpg", authorName: "FIDO WALKSALOT"}
        1: {headline: "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
        2: {headline: "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About", authorPhoto: "./assets/max.jpg", auth...
*/


// CARD COMPONENTS!

function CardMaker(item){

    // Created Elements
    const cards = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    // Added classes
    cards.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    // Nested Elements
    cards.append(headline);
    cards.append(author);
    author.append(imgCont);
    author.append(authorName);
    imgCont.append(img);

    // Set Text Content
    headline.textContent = `${item.headline}`;
    authorName.textContent = `By ${item.authorName}`;

    // Set Img Src
    img.src = item.authorPhoto;

    // Event Listener on click
    cards.addEventListener('click', () => {
        console.log(data.headline)
    })

    return cards;
}