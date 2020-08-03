const filed = document.getElementById('filed')
filed.addEventListener('click', writeData)




function writeData() {
  console.log("Button clicked")
  //personal details
  var name = CryptoJS.AES.encrypt(document.getElementById("form-name").value,"Secret Passphrase").toString() ;
  var mobile = CryptoJS.AES.encrypt(document.getElementById("form-mobile").value,"Secret Passphrase").toString() ;
  var gender  = CryptoJS.AES.encrypt(document.getElementById("form-gender").value,"Secret Passphrase").toString() ;
  var relation= CryptoJS.AES.encrypt(document.getElementById("form-relation").value,"Secret Passphrase").toString();
  var address= CryptoJS.AES.encrypt(document.getElementById("form-address").value,"Secret Passphrase").toString() ;
  var city= CryptoJS.AES.encrypt(document.getElementById("form-city").value,"Secret Passphrase").toString() ;
  var district= CryptoJS.AES.encrypt(document.getElementById("form-district").value,"Secret Passphrase").toString();
  var aadhar= CryptoJS.AES.encrypt(document.getElementById("form-aadhar").value,"Secret Passphrase").toString();
    var complain= CryptoJS.AES.encrypt(document.getElementById("form-complain").value,"Secret Passphrase").toString();




let data={
      candidate_Name: name,
      Mobile:         mobile,
      Gender:         gender,
      Relation:       relation,
      Address:        address,
      City:           city,
      District:       district,
      Aadhar:         aadhar,
      Complain:       complain
}
 //var decrypt_data = CryptoJS.AES.encrypt(data , "secret Passphrase" )
    db.collection("CCTNS").add(data).then(function(){


      // doc.data() is never undefined for query doc snapshots
      console.log("Report Filed successfully");
      $("#viewbutton").text("Verified");
      $("#viewbutton").css({"background-color":"green"});
      $("#viewbutton").prop('disabled', true);
      // window.alert("Report is successfully Filed");


    })
    var washingtonRef = db.collection("F.I.R").doc("Pofi7WSNgcouVOtZpv8a");

                // Set the "capital" field of the city 'DC'
                return washingtonRef.update({
                    Status: 1
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                })
    .catch(err => {
    console.log("Error adding user\n" + err)
  });

}
