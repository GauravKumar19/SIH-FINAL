const enter = document.getElementById('enter')
enter.addEventListener('click', writeData)

function writeData() {
  console.log("Button clicked")
  //personal details
var status = 0;
  var first = CryptoJS.AES.encrypt(document.getElementById("first").value, "Secret Passphrase").toString();
  var last  = CryptoJS.AES.encrypt(document.getElementById("last").value,"Secret Passphrase").toString();
  var mobile = CryptoJS.AES.encrypt(document.getElementById("mob").value, "Secret Passphrase").toString();
  var relation= CryptoJS.AES.encrypt(document.getElementById("relation").value, "Secret Passphrase").toString();
  var city = CryptoJS.AES.encrypt(document.getElementById("state").value, "Secret Passphrase").toString();
  var gender =CryptoJS.AES.encrypt(document.getElementById("gender").value, "Secret Passphrase").toString();
  //contact details

  var address=CryptoJS.AES.encrypt(document.getElementById("address").value, "Secret Passphrase").toString();
  var district =CryptoJS.AES.encrypt(document.getElementById("dist").value, "Secret Passphrase").toString();
  var aadhar =CryptoJS.AES.encrypt(document.getElementById("aadhar").value, "Secret Passphrase").toString();
  var complain =CryptoJS.AES.encrypt(document.getElementById("complain").value, "Secret Passphrase").toString();

let data={
      candidate_Name: first+' '+last,
      Mobile:         mobile,
      relation:       relation,
      City:           city,
      Gender:         gender,
      Address:        address,
      Disttrict:      district,
      aadhar:        aadhar,
      Complain:      complain,
      Status:        status,
    }

    db.collection("F.I.R").add(data).then(function(){


      // doc.data() is never undefined for query doc snapshots
      console.log("FIR Filed successfully");


  window.alert("FIR is successfully Lodge");
     window.location.href = "user.html";

   })

    .catch(err => {
    console.log("Error adding user\n" + err)
  });


}
