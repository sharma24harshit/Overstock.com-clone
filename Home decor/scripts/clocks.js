//-------------------------------------------------------------------------------//
import navbar from "./navbar.js"

import footer from "./footer.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//-------------------------------------------------------------------------------//

let clockPage_data = [
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
    },
    {
      image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/4bf628454b1cfc58ab83e1fdd89fc69a01df355e/Infinity-Instruments-Retro-9.25-inch-Square-Wall-Clock.jpg?imwidth=480&impolicy=medium",
      name: "Infinity Instruments Retro 9.25-inch Square Wall Clock - 9.25 x 1.875 x 9.5",
      price: "4490",
    },
  
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/d3f50d2d38f2c1fb0d9d02ccfb1a040f77b8747d/FirsTime-%26-Co.%C2%AE-Emmett-Farmhouse-Shiplap-Wall-Clock%2C-American-Crafted%2C-Silver-Galvanized%2C-Plastic%2C-27-x-2-x-27-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Emmett Farmhouse Shiplap 27-in. Round Wall Clock",
      price: "4490",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/d983718d9cc56b43357397c2269af0b744543943/Oval-Metal-Wall-Clock-with-Bird.jpg?imwidth=480&impolicy=medium",
      name: "Oval Metal Wall Clock with Bird",
      price: "4490",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/231d18c7d001581b4d9ecdeeffdf2d8f95942b0e/La-Crosse-Technology-BBB85654-16%22-White-Dial-Atomic-Metal-Wall-Clock.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Sundeck Outdoor Clock, American Crafted, Aged Copper, Metal, 19 x 1.75 x 19 in",
      price: "4490",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/760b4eb9c4bf4a82f4122efcb1d45f958e490c0b/FirsTime-%26-Co.-Maritime-Farmhouse-Planks-Wall-Clock%2C-Iron%2C-24-x-2-x-24-in%2C-American-Designed.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Maritime Farmhouse Plank Wall Clock",
      price: "6481",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/611f1f7470b6a061cb270987aa0805de17c3caf1/FirsTime-%26-Co.%C2%AE-Big-Time-Wall-Clock%2C-American-Crafted%2C-Oil-Rubbed-Bronze%2C-Plastic%2C-40-x-2-x-40-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Big Time Modern Roman Numeral Wall Clock",
      price: "6522",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/269a4eb57abbc6a15b7eb68bfcf20fbbe0a40656/FirsTime-%26-Co.%C2%AE-Gray-Numeral-Farmhouse-Windmill-Clock%2C-American-Crafted%2C-Cool-Gray%2C-Plastic%2C-24-x-2-x-24-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Numeral Farmhouse Windmill Clock, Plastic, 24 x 2 x 24 in, American Designed",
      price: "4262",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/9c52da0f357ec78ebeaddaeec10dee9bc1853ef2/FirsTime-%26-Co.-Farmhouse-Shiplap-Wall-Clock%2C-American-Crafted%2C-White%2C-Wood%2C-29-x-2-x-29-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Farmhouse Shiplap Wall Clock, American Crafted, White, Wood, 29 x 2 x 29 in",
      price: "7100",
    },

    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/12f0720b2d593e1287e914811419ce1a10866bb5/FirsTime-%26-Co.-Shiplap-Farmhouse-Wall-Clock%2C-Wood%2C-18-x-2-x-18-in%2C-American-Designed.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Shiplap Wood Wall Clock",
      price: "3601",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/5e3b5f58232f7132ff8d7e6d5b43aa004653fbe0/FirsTime-%26-Co.%C2%AE-Timeworn-Farmhouse-Cottage-Wall-Clock%2C-American-Crafted%2C-Weathered-White%2C-Metal%2C-27-x-2-x-27-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Timeworn Farmhouse Cottage Wall Clock, Metal, 27 x 2 x 27 in, American Designed",
      price: "55629",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/0dcaf11e7269c754c8e024632d9fa6f4d561516c/White-Glass-Contemporary-Wall-Clock-20-x-20-x-2.jpg?imwidth=480&impolicy=medium",
      name: "Glass Contemporary Wall Clock 20 x 20 x 2 - 20 x 2 x 20",
      price: "4222",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/af65960cdc7c4d445fdb285f90bbc50cbb1a464e/FirsTime-%26-Co.%C2%AE-Laguna-Farmhouse-Outdoor-Clock%2C-American-Crafted%2C-Aged-Teal%2C-Plastic%2C-18-x-2-x-18-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Laguna Farmhouse Outdoor Clock, American Crafted, Aged Teal, Plastic, 18 x 2 x 18 in",
      price: "4641",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/40e2cb71e675017d082bcff20b1528d74a3697e9/Glitzhome-27.5%22D-Farmhouse-Oversized-Wall-Clock-with-Moving-Gears-Tempered-Glass.jpg?imwidth=480&impolicy=medium",
      name: "Glitzhome 27.5' D Farmhouse Oversized Wall Clock with Moving Gears Tempered Glass",
      price: "10405",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/33596c098be753154e7551e75e0d046b297d0964/FirsTime-%26-Co.-Cooper-Farmhouse-Wall-Clock%2C-American-Crafted%2C-Gray%2C-Plastic%2C-27-x-2-x-27-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Cooper Farmhouse Wall Clock, American Crafted, Gray, Plastic, 27 x 2 x 27 in",
      price: "5222",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/47ea8eaf22f2f0d3aeed71398ded410957ca9ca4/FirsTime-%26-Co.-Barnes-Wall-Clock.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Barnes Wall Clock, American Crafted, Rustic Brown, Wood, 16 x 1 x 16 in",
      price: "39751",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/760b4eb9c4bf4a82f4122efcb1d45f958e490c0b/FirsTime-%26-Co.-Maritime-Farmhouse-Planks-Wall-Clock%2C-Iron%2C-24-x-2-x-24-in%2C-American-Designed.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Maritime Farmhouse Plank Wall Clock",
      price: "64811",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/830d4e922b097f132ce8d7931d1e601084ab7c31/FirsTime-%26-Co.%C2%AE-Farmhouse-Shiplap-Gallery-Set%2C-American-Crafted%2C-Black%2C-Plastic%2C-20-x-2-x-20-in.jpg?imwidth=480&impolicy=medium",
      name: "FirsTime & Co. Farmhouse Shiplap Gallery Set",
      price: "3628",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/996f54d355a1a4225710ec41a06560b99b0f52b7/Glitzhome-24%22D-Modern-Metal-Black-and-Golden-Wall-Clock.jpg?imwidth=480&impolicy=medium",
      name: "Glitzhome 24' D Modern Metal Black and Golden Wall Clock",
      price: "6567",
    },
    {
        image:
        "https://ak1.ostkcdn.com/images/products/is/images/direct/181fbd9fc60305af9b6cf87c7322e30ad0e1b7d6/%26-Co.-Black-Emmett-Shiplap-Wall-Clock%2C-Farmhouse%2C-Analog%2C-27-x-2-x-27-in.jpg?imwidth=480&impolicy=medium",
      name: "& Co. Black Emmett Shiplap Wall Clock, Farmhouse, Analog, 27 x 2 x 27 in",
      price: "10561",
    },
  ];


  function append_data(){
    document.getElementById("clocks_container").innerHTML = null;
    clockPage_data.forEach( (el) => {
     
    let div = document.createElement("div");
    div.setAttribute("id" , "clock_card");
    div.addEventListener("click", function (){
             store_data(el)
    })

    let clock_img = document.createElement("img");
    clock_img.src = el.image;

    let clock_price = document.createElement("p");
    clock_price.innerText = `Sale Starts at INR ${el.price}`; 
    clock_price.setAttribute("class" , "price");

    let title = document.createElement("p");
    title.innerText = el.name;
    title.setAttribute("class" , "clock_title");

    div.append(clock_img , clock_price , title);
    document.getElementById("clocks_container").append(div);

    })

  }
  //----------------------------------------------------------------------------//
function  store_data(el) {
   
    localStorage.setItem("mydata", JSON.stringify(el));
    window.location.href = "Productpage.html";
}
  //----------------------------------------------------------------------------//
  append_data()

  //----------------------------------- Side List Collapsible list--------------------------------------------//
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//------------------------------------ Sorting -------------------------------------------//

 document.getElementById("sort_ele").addEventListener("change" , sort_clicked);

function sort_clicked(){
    let selected  = document.getElementById("sort_ele").value;
   
    if(selected=="lth"){
       
        let res = clockPage_data.sort(function (a,b){
            return a.price-b.price;
        });
        append_data(res);
    }
    if(selected=="htl"){
        
        let res = clockPage_data.sort(function (a,b){
            return b.price-a.price;
        });
        append_data(res);
    }
    
}