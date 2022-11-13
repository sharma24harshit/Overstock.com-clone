//-------------------------------------------------------------------------------//
import navbar from "./navbar.js"

import footer from "./footer.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//-------------------------------------------------------------------------------//
let btn = document.getElementById("order")
btn.onclick = () => {
    let card_Sectelt = (document.getElementById("sectuiryty").value);
    let number = (document.getElementById("Security").value);
    if (card_Sectelt.length >= 12 && number === "123") {
        setTimeout(() => {
          alert("Order Successfully Placed");

          window.location.href = "./index.html";
        },2000)
    }

}