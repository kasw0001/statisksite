const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productContainer = document.querySelector("main");
const header = document.querySelector("h2").textContent = category

document.querySelectorAll("#filters button").forEach(knap=>knap.addEventListener("click", showFiltered));

function showFiltered() {
    console.log(this.dataset.gender);
    const gender = this.dataset.gender;
    if(gender=="All"){
        showProducts(allData);
    }else{
        const udsnit = allData.filter(product => product.gender == gender);
        showProducts(udsnit);
    }
}

let allData;


fetch(`https://kea-alt-del.dk/t7/api/products?limit=30&category=${category}`)
.then((response) => response.json())
.then((data) => {
    allData = data;
    showProducts(allData);
}); 
    
function showProducts(data) {
    console.log(data);
    let markup = "";
    data.forEach(product => {
        markup += `<div class="product ${product.discount && "sale"} ${product.soldout && "soldOut"}">
         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tøj">
         <p><strong>${product.productdisplayname}</strong></p>
         <p>${product.articletype} | ${product.brandname}</p>
          <p>DKK <span>${product.price},-</span></p>
        <div class=${product.discount ? "sale" : "hide"}>
         <p>Now DKK ${Math.round(product.price - product.price * product.discount / 100)},-</p>
         <p class="rød">- ${product.discount}%</p>
        </div>
  
         ${product.soldout ? "" : `<a href="produkt.html?id=${product.id}">Read More</a>`}
      </div>`;
    });

productContainer.innerHTML = `<div class="grid_1-1-1-1">${markup}</div>`;
}