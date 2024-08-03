let key = "";
let pressedKey = "";

document.getElementById("secretKey").addEventListener("click", () => {
    key = secretKey();
    document.getElementById("displayKey").innerText = key;
    pressedKey = "";
    document.getElementById("displayPin").innerText = pressedKey;
    document.getElementById("message").innerText = "";
   
});
function secretKey() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  function pressKey(num) {
        if (pressedKey.length < 6) {
          pressedKey += num;
          document.getElementById("displayPin").innerText = pressedKey;
        }
      }

      function clearKey() {
        pressedKey = "";
        document.getElementById("displayPin").innerText = pressedKey;
      }

      function bSpace() {
        pressedKey = pressedKey.slice(0, -1);
        document.getElementById("displayPin").innerText = pressedKey;
      }

      function checkKey() {
        if (pressedKey === key) {
          document.getElementById("message").innerText =
            "✔ Wow Your Secret Key is matched!";
        document.getElementById("message").style.color = "green";
        } else {
          document.getElementById("message").innerText =
            "✖ Sorry Your Secret Key is not matched!";
          document.getElementById("message").style.color = "red";
        }
      }



  

