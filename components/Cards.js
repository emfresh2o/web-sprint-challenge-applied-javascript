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

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        

        const values = Object.values(response.data.articles);
        console.log(values);
        const cardContent = document.querySelector('.cards-container');
        for(let i in values){
            let value = values[i];
            for(i = 0; i < value.length; i++){
                cardContent.append(ContentMaker(value[i]));
            }
        }
    })
    .catch(error => {
        console.log('Alert Missing Data ', error);
    })

function ContentMaker(d){
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorSign = document.createElement('span');

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    card.append(headLine);
    card.append(author);
    author.append(imgCont);
    imgCont.append(img);
    author.append(authorSign);

    headLine.textContent = d.headline;
    authorSign.textContent = d.authorName;

    img.src = d.authorPhoto;

    card.addEventListener('click', () => {
        console.log(d.headLine)

    });

    return card;

    
}


