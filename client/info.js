// Getter and setter
var name;

function setName() {
    name = document.getElementById("userName").value
}

function addMessage(userNM, userMSG) {

    var para = document.createElement("p");
    var msg = document.createTextNode(`→ ${userNM}: ${userMSG}`);
    para.appendChild(msg);

    var chatContainer = document.getElementById('chat');
    chatContainer.appendChild(para);

    var elem = document.getElementById('chat');
    elem.scrollTop = elem.scrollHeight;
}
