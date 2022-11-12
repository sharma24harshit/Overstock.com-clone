let btn = document.getElementById("order")
btn.onclick = () => {
    let card_Sectelt = (document.getElementById("sectuiryty").value);
    let number = (document.getElementById("Security").value);
    if (card_Sectelt.length >= 12 && number === "123") {
        setTimeout(() => {
          alert("order")
        },2000)
    }

}