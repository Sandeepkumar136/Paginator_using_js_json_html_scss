// Loading JSON Data
let jsonData=[];
fetch('./data.json')
.then(response=>response.json())
.then(data=>{
    jsonData =data;
    updatePaginator(1);
})
.catch(error=>console.error('Error loading JSON DATA:', error));

// Pagination Logic
function paginate(data,page,perpage){
    const totalItems=data.length;
    const totalpages=Math.ceil(totalItems/perpage);
    currentpage=Math.min(Math.max(page,1), totalpages);
    const startIndex=(currentpage-1)*perpage;
    const endIndex=Math.min(startIndex+perpage, totalItems);

    return{
        currentpage,
        perpage,
        totalpages,
        data:data.slice(startIndex, endIndex)
    };

};

// Rendering data
function RenderData(paginatedData){
    const container=document.getElementById('card-container');
    container.innerHTML=''; 
    // clear perv content

    paginatedData.data.forEach(item => {
        const card_contian=document.createElement('div');
        card_contian.className='cards';
        card_contian.innerHTML=`
                <img class="image" src="${item.image}" alt="${item.alt}"/>
                <h2 class="card-heading">${item.heading}</h2>
                <p class="text">${item.text}</p>


        `;
        container.appendChild(card_contian);
    });
}


function updatePagination(page){
    const paginatedData=paginate(jsonData, page, perpage);
    RenderData(paginatedData);
    currentpage=paginatedData.currentpage;
}

let currentpage=1;
const perpage=4;

document.getElementById('prev').addEventListener('click', ()=>{
    if(currentpage >1){
        updatePagination(currentpage-1);
    }
});

document.getElementById('next').addEventListener('click', ()=>{
    const totalpages=Math.ceil(jsonData.length/perpage);
    if(currentpage<totalpages){
        updatePagination(currentpage+1);
    }
});
document.getElementById('page-1').addEventListener('click', ()=>{
    updatePagination(1)
});
document.getElementById('page-2').addEventListener('click', ()=>{
    updatePagination(1)
});
document.getElementById('page-3').addEventListener('click', ()=>{
    updatePagination(1)
});
console.log(jsonData);