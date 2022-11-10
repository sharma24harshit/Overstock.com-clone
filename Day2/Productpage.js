// console.log(key)
let key = JSON.parse(localStorage.getItem("mydata"))
let arr = []
let { productCardFrontImage, productPricingCurrent, productCardFrontTitle, ratingsCount } = key // distructure of array of object
arr.push({ productCardFrontImage, productPricingCurrent, productCardFrontTitle, ratingsCount })
// console.log(arr) // get data perfectly
let body = document.querySelector("body")
body.onload = () => {
    showvdieos(arr)
}


let product = document.getElementById("product");



const showvdieos = (data) => {

    data.forEach(({ productCardFrontImage, productPricingCurrent, productCardFrontTitle, ratingsCount }) => {

        let card = document.createElement("div")
        let card2 = document.createElement("div")

        let product_img = document.createElement("img");
        product_img.src = productCardFrontImage;
        product_img.setAttribute("class", "product_img")

        let product_price = document.createElement("p")
        product_price.setAttribute("class", "product_price")
        product_price.textContent = productPricingCurrent

        let product_title = document.createElement("p")
        product_title.textContent = productCardFrontTitle
        product_title.setAttribute("class", "product_title")


        let product_Rating = document.createElement("p");
        product_Rating.textContent = ratingsCount
        product_Rating.setAttribute("class", "product_Rating")

        let btn = document.createElement("button");
        btn.setAttribute("class", "product_btn")
        btn.textContent = "Add to Cart"
        btn.addEventListener("click", () => {
            Addtocart({ productCardFrontImage, productPricingCurrent, productCardFrontTitle, ratingsCount })
        })

        card.append(product_img)
        card2.append(product_price, product_title, product_Rating, btn)

        product.append(card, card2)

    })

}

const Addtocart = (data) => {
    console.log(data)
}