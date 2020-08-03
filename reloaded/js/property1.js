const enter = document.getElementById('enter')
enter.addEventListener('click', writeData)

function writeData() {
  console.log("Button clicked")
  //personal details
  var first =document.getElementById("first").value ;
  var last  = document.getElementById("last").value;
  var mobile = document.getElementById("mob").value;
  var email= document.getElementById("email").value;
  var where= document.getElementById("where").value;
  var date= document.getElementById("date").value;
  var time=document.getElementById("time").value;
  var description=document.getElementById("desc").value;

;

let data={
      candidate_Name: first+' '+last,
      Mobile:         mobile,
      Email:          email,
      Where:         where,
      Date:           date,
      Time:           time,
      description:    description,

}

    db.collection("Lost & Found").add(data).then(function(){


      // doc.data() is never undefined for query doc snapshots
      console.log("Report Filed successfully");
      window.alert("Report is successfully Filed");

      const btn = document.getElementById('enter')

      btn.addEventListener('click', () => {

        const rec = document.getElementById('mob').value

        // const text = document.getElementById('message').value
        const name1 = document.getElementById('first').value
        const name2 = document.getElementById('last').value
        const name= name1 + ' ' + name2;

        fetch("https://allahmeetsram.herokuapp.com/sms", {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            body: 'Your Lost Property has been sucessfully Filed' + ' ' +  name,
            from: '+12672143344',
            to: '+91' + rec
          })
        }).then(function(response) {
          return response.json()
        }).then(data => console.log(data))
     });

     window.location.href = "user2.html";

    })

    .catch(err => {
    console.log("Error adding user\n" + err)
  });



}
