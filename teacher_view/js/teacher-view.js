
var directory = firebase.database().ref('CSE142/Lec1')

var first_question = ""

// dynamically update the list
directory.on('child_added',function(data) {
  if (first_question !== "") {
    var node = document.createElement("li")
    var textnode = document.createTextNode(data.val().question)
    node.appendChild(textnode)
    document.getElementById("list").appendChild(node);
  } else {
    first_question = "set"
    document.getElementById("topQuestion").innerHTML = data.val().question
  }

})
