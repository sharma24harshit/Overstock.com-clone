//-------------------------------------------------------------------------------//
import navbar from "./navbar.js"

import footer from "./footer.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//-------------------------------------------------------------------------------//

let key = JSON.parse(localStorage.getItem("mydata"))
let arr = []
let { image, price, name, ratingsCount } = key // distructure of array of object
arr.push({ image, price, name, ratingsCount })
// console.log(arr) // get data perfectly
let body = document.querySelector("body")
body.onload = () => {
    showvdieos(arr)
}
let cart_data =  JSON.parse(localStorage.getItem("cart_data" ))||[];

let product = document.getElementById("product");



const showvdieos = (data) => {

    data.forEach(({ image, price, name, ratingsCount }) => {

        let card = document.createElement("div")
        let card2 = document.createElement("div")

        let product_img = document.createElement("img");
        product_img.src = image;
        product_img.setAttribute("class", "product_img")

        let product_price = document.createElement("p")
        product_price.setAttribute("class", "product_price")
        product_price.textContent = `INR ${price}`;

        let product_title = document.createElement("p")
        product_title.textContent = name
        product_title.setAttribute("class", "product_title")


        let product_Rating = document.createElement("p");
        product_Rating.textContent = ratingsCount
        product_Rating.setAttribute("class", "product_Rating")

        let btn = document.createElement("button");
        btn.setAttribute("class", "product_btn")
        btn.textContent = "Add to Cart"
        btn.style.cursor = "pointer";

        btn.addEventListener("click", () => {
            Addtocart({ image, price, name });
           
        })

        card.append(product_img)
        card2.append(product_price, product_title, product_Rating, btn)

        product.append(card, card2)

    })

}

const Addtocart = (data) => {
   
    cart_data.push(data);

    localStorage.setItem("cart_data" , JSON.stringify(cart_data));

    window.location.href = "./cart.html";
}