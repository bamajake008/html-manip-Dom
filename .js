document = document.addEventListener("DOMContentLoaded", function(){
    let container = document.createElement("div");
    let div = document.createElement('div');
    let button = document.createElement('button');
    let paragraph = document.createElement('p');
    let spanButton = document.createElement('button');
    let spanDiv = document.createElement('div');
    let btnText = document.createTextNode('Click me');
    let paragraphText = document.createTextNode("I'm a paragraph!");
    let textButton = document.getElementById('textButton');
    let textInput = document.getElementById('textInput');
    let friendsList = document.getElementById('friendsList');
    let friendButton = document.getElementById('Friend');
    let friendsArray = ["Tylan", "Boots", "Jameel", "Cali", "Tryee", "Matt", "Zion", "Richard", "Rachel", "Erin"];

    spanButton.innerHTML = "Button";
    friendButton.innerHTML = " Friend";
    div.style.height = "3em";

    button.addEventListener('click', function(){
        alert('You look absolutely beutiful today mate');
    })
    textButton.addEventListener('click', function(){
        alert(textInput.value);
    })
    div.addEventListener('mouseenter', function(){
        div.style.background = "blue";
    })
    div.addEventListener('mouseleave', function(){
        div.style.background = "";
    })
    paragraph.addEventListener('click', function(){
        let colorR = Math.floor(Math.random() * 255)
        let colorG = Math.floor(Math.random() * 255)
        let colorB = Math.floor(Math.random() * 255)
        paragraph.style.color = 'rgb('+ colorR +', ' + colorG + ', ' + colorB + ')';
    })
    spanButton.addEventListener('click', function(){
        let nameSpan = document.createElement('span');
        let myName = document.createTextNode('Jacob Perryman');
        nameSpan.appendChild(myName);
        spanDiv.appendChild(nameSpan);
    })
    
    friendButton.addEventListener('click', function(){
        for (let i = 0; i < friendsArray.length; i++) {
            let friend = document.createElement('li');
            let friendName = document.createTextNode(friendsArray[i]);
            friend.appendChild(friendName);
            friendsList.appendChild(friend);
        }
    })

    button.appendChild(btnText);
    paragraph.appendChild(paragraphText);
    spanDiv.appendChild(spanButton);
    container.appendChild(button);
    container.appendChild(div);
    container.appendChild(paragraph);
    container.appendChild(spanDiv);
    document.body.appendChild(container);
}) 
