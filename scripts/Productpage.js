
dataProduct = JSON.parse(localStorage.getItem("mydata"));
// console.log(dataProduct)
let arr = [];

arr.push(dataProduct);
// console.log(arr);


function display(data) {
  let row = document.querySelector("#product");
  document.querySelector("#product").innerHTML = null;
  
    data.forEach(function (el) {

      let product = document.createElement("div");
      product.className = "column";
  
      let image = document.createElement("img");
      image.src = el.image;
      
      let cardInfo = document.createElement("div");
      let priceRating = document.createElement("div");
      let product_price = document.createElement("div");
      let rating = document.createElement("div");
      let font_title = document.createElement("p");

      let current_price = document.createElement("div");

      let span1 = document.createElement("span")
      span1.innerText = "Today";
      span1.className = "span1";

      let span2 = document.createElement("span")
      span2.innerText = "INR";
      span2.className = "span2";

      let spanDiv = document.createElement("div");
      spanDiv.append(span1,span2);

      current_price.innerHTML = el.price;

      current_price.className = "price_tag";
      product_price.append(spanDiv,current_price);

          for(let i=0;i<5;i++){
          let img_star = document.createElement("img");
          img_star.src = "./images/yellow-christmas.jpg";
          img_star.setAttribute("class","star_image")
          rating.append(img_star);
        }

      font_title.innerText = el.name;
      priceRating.append(product_price,rating,font_title);


      
      cardInfo.append(priceRating);
      product.append(image,cardInfo);
      row.append(product);
      
    });
  }

  
  display(arr);