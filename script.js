let key = "";
document.getElementById("secretKey").addEventListener("click", () => {
    key = secretKey();
    document.getElementById("displayKey").innerText = key;
   
});
function secretKey() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }




  

