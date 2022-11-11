let cart_data = [
    {
      image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/ebe9ea8399fbcd4b077157600e1c2f77ee8923ac/FirsTime-%26-Co.-Kensington-Wall-Clock%2C-Plastic%2C-18-x-2-x-18-in%2C-American-Designed.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Kensington Wall Clock",
      price: "2990.20",
    },
    {
      image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/0972e42e4f56e7ffb717e1614afd19c4f36a2a0d/Round-Retro-Kitchen-Wall-Clock-by-Infinity-Instruments.jpg?imwidth=480&impolicy=medium",
      name: "Round Retro Kitchen Wall Clock by Infinity Instruments - 9.5 x 3.25 x 9.5",
      price: "3006.98",
    }

]

let total_price = cart_data.reduce( (acc,el) => {
   return  (acc + Number(el.price))
},0);

document.getElementById("items_total").innerText = cart_data.length;
document.getElementById("price_total").innerText = `INR ${total_price}`;

const append_data = () => {
    cart_data.forEach( (el) => {
     
       let div = document.createElement("div");
       div.setAttribute("id" , "cart_card");

        let img_div = document.createElement("div");
        img_div.setAttribute("id" , "img_div");

        let text_div = document.createElement("div");
        text_div.setAttribute("id" , "text_div");

        let btn_div = document.createElement("div");
        btn_div.setAttribute("id" , "btn_div");
    
        let cart_img = document.createElement("img");
        cart_img.src = el.image;
    
        let cart_price = document.createElement("p");
        cart_price.innerText = ` INR ${el.price}`; 
        cart_price.setAttribute("class" , "price");
    
        let title = document.createElement("p");
        title.innerText = el.name;
        title.setAttribute("class" , "cart_title");

        let btn1 = document.createElement("button");
        btn1.innerText = "Remove";

        let btn2 = document.createElement("button");
        btn2.innerText = "Save For Later";
        
        btn_div.append(btn1,btn2);
        img_div.append(cart_img);
        text_div.append(title,cart_price,btn_div);
        div.append(img_div , text_div);
        document.getElementById("main_container").append(div);
    
        })
}

append_data()