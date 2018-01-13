// setup up message post
var database = firebase.database();


function handleSubmit () {
  firebase.database().ref('CSE142/Lec1').push({
    question: document.getElementById('validationDefault01').value
  });
}
