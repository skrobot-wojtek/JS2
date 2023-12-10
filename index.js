let number = 1;
const addElement = function () {
    let ul1 = document.querySelector("ul")
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