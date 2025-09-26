const productContainer = document.querySelector("main");

fetch("https://kea-alt-del.dk/t7/api/products")
.then((response) => response.json())
.then(showProducts) 
    
    function showProducts(products) {
        console.log("products");


productContainer.innerHTML = `
`;
}