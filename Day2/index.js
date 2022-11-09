let Fresh_arr = [{
    img: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
    discription: "Furniture"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
    discription: "Area Rugs"
}
    ,
{
    img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
    discription: "Beddig"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
    discription: "Home Decore"

},
{
    img: "https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
    discription: "Window Treatment"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
    discription: "kitchen"

},
{
    img: "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",
    discription: "Outdoor"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
    discription: "Home improvement"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
    discription: "Stroage"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
    discription: "Mattresses"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
    discription: "Lighting"
},
{
    img: "https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
    discription: "Shop All Deals"
}
]

console.log(Fresh_arr)

let container = document.getElementById("fresh_js")

Fresh_arr.forEach(({ img, discription }) => {

    let card = document.createElement("div")

    let image = document.createElement("img")
    image.src = img
    image.setAttribute("class","imag")

    let discri = document.createElement("p")
    discri.textContent = discription
    discri.setAttribute("class","dis")


    card.append(image, discri)

    container.append(card)
})