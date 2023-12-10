let number = 1;   
let ul1 = document.querySelector("ul");
const addElement = function () {

    const li = document.createElement("li");
    li.textContent = number;
    if (number % 3 === 0) {
        li.classList.add("podzielne")
    }
   ul1.appendChild(li);
    number += 2;
}

// btn.addEventListener("click", addElement);

document.querySelector("button").addEventListener("click", addElement)