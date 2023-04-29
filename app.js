

let qrimage= document.getElementById("qrimg");
let imgbox=document.getElementById("imgbox");
let text=document.getElementById("text")

let Qrgenerator=()=>{
     text.value.length>0?
     qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+text.value
     :
      text.className+="error";
}