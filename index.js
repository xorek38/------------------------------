const { createElement } = require("react")


function countdicks() {
    for(let i = 1; i <= 3;i++);
        alert("Отсосано хуев" + i);
}

const button = createElement("button");
button.id = 'btn';

button.onclick = function() {
    alert(countdicks);
}

button.textContent = "Сколько было отсосано хуев?";
document.body.appendChild(button);
