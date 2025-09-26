const productContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products`)
.then((response) => response.json())
.then(showProducts) 
    
    function showProducts(data) {
        console.log("data");
        let markup = "";
        data.forEach(product => {
            markup += `      <div class="produkter">
         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tøj">
         <p><strong>${product.productdisplayname}</strong></p>
         <p>${product.articletype} | ${product.brandname}</p>
        <div class="sale">
         <p>Prev. DKK <span>${product.price}</span>,-<br>Now DKK 1560,-</p>
         <p class="sale-red">-34%</p>
        </div>
         <a href="produkt.html?id=${product.id}">Read More</a>
      </div>`
        });


productContainer.innerHTML += markup;
}