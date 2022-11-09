dataProducts = JSON.parse(localStorage.getItem("productsData"));

function display(data) {
    document.querySelector(".row").innerHTML = null;
  
    data.forEach(function (el) {
  
      let product = document.createElement("div");
      product.className = "column";
  
      let save = document.createElement("div")
      let icon = document.createElement("img");
      icon.src = "images/lightning-bolt.png";
      icon.className = "icon";
      save.innerText = el.save;
      save.setAttribute("class", "save");
      save.append(icon);
  
      let image = document.createElement("img");
      image.src = el.image;
      
    });
  }
  display(dataProducts);
