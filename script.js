function DisMenuItem(Peram){
    let Config=Peram.map((content)=>{
        return `<div class="cards">
        <img class="image" src="${content.image}" alt="${content.alt}"/>
        <h2 class="card-heading">${content.heading}</h2>
        <p class="text">${content.text}</p>
    </div>`
    }).join('');
    return Config;
}

const card_in_page=4;
let currentpage=1;
let totalpage=0;
let data=[];


fetch('./data.json')
.then(response=>response.json())
.then(data=>{
    // const container=document.getElementById("card-container");
    // container.innerHTML=DisMenuItem(data);
    totalpage=Math.ceil(data.length/card_in_page);
    displaypage(currentpage)
    // setupPagingation();
})
.catch(error=>console.error('Error fectching the JSON data', error));

function displaypage(page){
    const startIndex=(page -1)*card_in_page;
    const endIndex=startIndex+card_in_page;
    const paginatedData=data.slice(startIndex, endIndex);
    const container=document.getElementById('card-container');
    container.innerHTML=DisMenuItem(paginatedData)
}

