const enter = document.getElementById('enter')
enter.addEventListener('click', writeData)

function writeData() {
  console.log("Button clicked")
          var exRef = db.collection('test');

          var allex = exRef.get().then(snapshot => {
            snapshot.forEach(doc => {
              var otp = doc.data().var;


var verify = document.getElementById("atp");

if(otp === verify)
{
  console.log(otp)

  console.log("ho gya");
}
});
});
}
