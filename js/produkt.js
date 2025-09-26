const productContainer = document.querySelector("#productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("mit id fra url'en:" + id);

fetch("https://kea-alt-del.dk/t7/api/products/1163")
.then((response) => response.json())
.then((product) => {


productContainer.innerHTML = `    
<section>
    <div>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt">
    </div>
    <div class="grid_3-1">
        <div class="info">
         <h2>Product Information</h2>
         <p><strong>Product name</strong></p>
         <p class="productdisplayname" class="sub">${product.productdisplayname}</p>
         <p><strong>Color</strong></p>
         <p class="basecolour" class="sub">${product.basecolour}</p>
         <p><strong>Inventory number</strong></p>
         <p class="sub">1163</p>
         <h2>Nike</h2>
         <p>Nike, creating experiences for today's athlete</p>
        </div>
        <div class="basket">
         <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
         <p>Nike | Tshirts</p>
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