var directory = firebase.database().ref('CSE142/Lec1')

var hot_question_id = -1
var next_id = 0
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
    node = node.children[0].children[0]
    document.getElementById("topQuestion").innerHTML =  node.innerHTML; 
    node.innerHTML = "<strong>" + node.innerHTML + "</strong>";
  }
}

// dynamically update the list
directory.on('child_added',function(data) {
    // top
    var node = document.createElement("div")
    node.className = "card m-2"
    // mid
    var child = document.createElement("div")
    child.className = "card-block p-3"

    var lowest = document.createElement("p")
    lowest.className = "card-title"
    lowest.innerHTML = data.val().question

    child.appendChild(lowest)
    node.appendChild(child)


    node.addEventListener('click', function (event) {
      if (hot_question_id !== node.id) {
        document.getElementById("topQuestion").innerHTML = lowest.innerHTML
        lowest.innerHTML = "<strong>" +  lowest.innerHTML + "</strong>"

        if (hot_question_id !== -1) {
          var old_lowest = document.getElementById(hot_question_id).children[0].children[0]
          old_lowest.innerHTML = old_lowest.innerHTML.substring(8, old_lowest.innerHTML.length - 9)
        }
        hot_question_id = node.id
      }
    }, false)
    document.getElementById("list").appendChild(node)
    node.id = "a" + next_id
    next_id++

  if (hot_question_id == -1) {
    hot_question_id = node.id
    document.getElementById("topQuestion").innerHTML = lowest.innerHTML;
    lowest.innerHTML = "<strong>" +  lowest.innerHTML + "</strong>"
  }
})

