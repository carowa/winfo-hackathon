// setup up message post
var database = firebase.database();


function handleSubmit () {

  let q = document.getElementById('validationDefault01').value;

  let badword1 = new RegExp('.*damn.*', 'i');
  let badword2 = new RegExp('.*fuck.*', 'i');
  let badword3 = new RegExp('.*shit.*', 'i');
  let badword4 = new RegExp('.*bitch.*', 'i');
  let badword5 = new RegExp('.*ass.*', 'i');
  let badword6 = new RegExp('.*badword.*', 'i');

  let isBad1 = badword1.test(q);
  let isBad2 = badword2.test(q);
  let isBad3 = badword3.test(q);
  let isBad4 = badword4.test(q);
  let isBad5 = badword5.test(q);
  let isBad6 = badword6.test(q);

  if (!isBad1 && !isBad2 && !isBad3 && !isBad4 && !isBad5 && !isBad6) {
      firebase.database().ref('CSE142/Lec1').push({
        question: document.getElementById('validationDefault01').value
      });
  }

}
