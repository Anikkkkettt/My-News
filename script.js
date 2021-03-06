getData();

/*let apiKey = "8d5238de0f324311bd264ca112742cf7";
let date = new Date();
let urlDate = "";
urlDate += date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
let url = `https://newsapi.org/v2/everything?q=Apple&from=${urlDate}&sortBy=popularity&apiKey=${apiKey}`;*/


function getData() {
    let apiKey = "8d5238de0f324311bd264ca112742cf7";
    let date = new Date();
    let urlDate = "";
    urlDate += date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    let url = `https://newsapi.org/v2/top-headlines?country=in&from=${urlDate}&apiKey=${apiKey}`;
    let news = document.getElementById("news");
    let newsHtml = "";
    
    fetch(url).then((response) => {
      if (!response.ok) {
        alert("API not accessible through browser support! Only allowed through local host");
        throw new Error("API not accessible through browser support! Only allowed through local host");
      }
        return response.json();
    }).then((data) => {
      
        //console.log(data);
        let articles = data.articles;
        
        articles.forEach(element => {

        let newsElement = `<div class="p-4 md:w-1/3 sm:mb-0 mb-6 noteCard">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="${element.urlToImage}">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">${element.title}</h2>
        <p class="text-base leading-relaxed mt-2">${element.description}.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3" href = "${element.url}" target = "_blank">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </div>`;

        newsHtml += newsElement;

        });
        news.innerHTML = newsHtml;
    })

}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  let inputVal = search.value.toLowerCase();
  let notesCard = document.getElementsByClassName('noteCard');
  Array.from(notesCard).forEach(function(element){
    let cardTxt = element.getElementsByTagName("h2")[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  })
})
