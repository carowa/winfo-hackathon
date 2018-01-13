// setup up message post
var database = firebase.database();


function handleSubmit () {
  //function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('questions').set({
    question: document.getElementById('validationDefault01').value
  });
  //}
}
