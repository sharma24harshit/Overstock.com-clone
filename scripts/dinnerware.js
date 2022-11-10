dataProducts = JSON.parse(localStorage.getItem("productsData"));

function display(data) {
  let row = document.querySelector(".row");
  document.querySelector(".row").innerHTML = null;
  
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
      current_price.innerHTML = `Sale INR ${el.price}`;
      current_price.className = "price_tag";
      product_price.append(current_price);

          for(let i=0;i<5;i++){
          let img_star = document.createElement("img");
          img_star.src = "./images/yellow-christmas.jpg";
          img_star.setAttribute("class","star_image")
          rating.append(img_star);
        }

      font_title.innerText = el.name;
      priceRating.append(product_price,rating,font_title);

      let infoButton = document.createElement("div");
      
      
      cardInfo.append(priceRating,infoButton);
      product.append(image,cardInfo);
      row.append(product);
      
    });
  }
  display(dataProducts);
