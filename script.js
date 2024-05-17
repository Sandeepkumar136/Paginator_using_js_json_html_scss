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

fetch('./data.json')
.then(response=>response.json())
.then(data=>{
    const container=document.getElementById("card-container");
    container.innerHTML=DisMenuItem(data);
})
.catch(error=>console.error('Error fectching the JSON data', error))