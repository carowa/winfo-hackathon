window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  console.log("hello world");
}

function handlSubmit() {
  let channelRef = firebase.database().ref();
  channelRef.push({
    content: "did this work?"
  })
}

handleSubmit();
