
var directory = firebase.database().ref('CSE142/Lec1')

var hot_question_id = -1
var next_id = 0
var stack = []
function finish () {
  document.getElementById("list").removeChild(document.getElementById(hot_question_id))
  // where do we put hot_question_id
  var list = document.getElementById("list").children;
  if (list.length == 0) {
    hot_question_id = -1
    document.getElementById("topQuestion").innerHTML = "No Questions"
  } else {
    var node = list[0];
    hot_question_id = node.id;
    document.getElementById("topQuestion").innerHTML = "<strong>" +  node.innerHTML + "</strong>"; 
    node.innerHTML = "<strong>" + node.innerHTML + "</strong>";
  }
}
// dynamically update the list
directory.on('child_added',function(data) {
  //if (hot_question_id !== "") {
    var node = document.createElement("li")
    var textnode = document.createTextNode(data.val().question)
    node.appendChild(textnode)
    node.addEventListener('click', function (event) {
      console.log('>>')      
      console.log(hot_question_id)      
      console.log(node.id)
      if (hot_question_id !== node.id) {
        document.getElementById("topQuestion").innerHTML = node.innerHTML
        node.innerHTML = "<strong>" +  node.innerHTML + "</strong>"
        if (hot_question_id !== -1) {
          var old_node = document.getElementById(hot_question_id)
          old_node.innerHTML = old_node.innerHTML.substring(8, old_node.innerHTML.length - 9)
        }
        hot_question_id = node.id
      }
    }, false)
    document.getElementById("list").appendChild(node)
    stack.push(node)
    node.id = "a" + next_id
    next_id++

  if (hot_question_id == -1) {
    hot_question_id = node.id
    document.getElementById("topQuestion").innerHTML = node.innerHTML;
    node.innerHTML = "<strong>" +  node.innerHTML + "</strong>"
  }
})
