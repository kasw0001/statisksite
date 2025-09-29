const productContainer = document.querySelector("#productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then((response) => response.json())
.then((product) => {

productContainer.innerHTML = `    
<section>
    <div class="first">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
    </div>
    <div class="grid_3-1">
        <div class="info">
         <h2>Product Information</h2>
         <p><strong>Product name</strong></p>
         <p class="productdisplayname">${product.productdisplayname}</p>
         <p><strong>Color</strong></p>
         <p class="basecolour">${product.basecolour}</p>
         <p><strong>Inventory number</strong></p>
         <p>${product.relid}</p>
         <h2>${product.brandname}</h2>
         <p>${product.brandbio}</p>
        </div>
        <div class="basket">
         <h2>${product.productdisplayname}</h2>
         <p>${product.brandname} | ${product.articletype}</p>
         <label for="size">Choose a size</label>
         <select id="size" name="size">
             <option value="s">S</option>
             <option value="m">M</option>
             <option value="l">L</option>
             <option value="xl">XL</option>
         </select>       
         <button>Add to basket</button>
        </div>
    </div>
    </section>
`;
});
