// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

entryPoint = document.querySelector(".topics");
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) =>{
        console.log(response.data.topics)
    const topicData = response.data.topics;
    topicData.forEach( element => {
        entryPoint.appendChild(tab(element))
})
   
})
.catch(error => {
    console.log("Alert missing data", error)
  });

function tab (element){
    const newTab = document.createElement("div");
    newTab.textContent = element
    newTab.classList.add("tab");
    return newTab;
}