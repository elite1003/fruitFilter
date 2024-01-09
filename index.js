// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const button = form.querySelector("button");
const fruits = document.querySelector(".fruits");
// Create a new input element
const descriptionInput = document.createElement("input");

// Set attributes for the input element
descriptionInput.type = "text";
descriptionInput.name = "fruitDescription";
descriptionInput.id = "fruit-description";

// Insert the input element before the button
form.insertBefore(descriptionInput, button);

// Show the fruit description in italics on the next line
const fruitDescriptionsObj = {
  Banana: "A tropical fruit with a yellow peel and sweet, creamy flesh.",
  Apple:
    "A crisp and juicy fruit with various colors, such as red or green, and a sweet or tart flavor.",
  Orange:
    "A citrus fruit known for its bright orange color, juicy segments, and refreshing, tangy taste.",
  Kiwi: "A small, brown, fuzzy fruit with green flesh and a unique sweet-tart flavor.",
};

function renderFruitList(fruitDescriptionsObj) {
  for (let fruit in fruitDescriptionsObj) {
    const li = document.createElement("li");
    li.className = "fruit";
    const button = document.createElement("button");
    button.className = "delete-btn";
    button.appendChild(document.createTextNode("x"));
    const para = document.createElement("p");
    para.appendChild(document.createTextNode(fruitDescriptionsObj[fruit]));
    para.style.fontStyle = "italic";
    li.appendChild(document.createTextNode(fruit));
    li.appendChild(para);
    li.appendChild(button);
    fruits.appendChild(li);
  }
}
renderFruitList(fruitDescriptionsObj);

const fruitFilter = document.getElementById("filter");

fruitFilter.addEventListener("keyup", function (e) {
  e.preventDefault();
  const textEntered = e.target.value.toLowerCase();
  const fruitList = document.querySelectorAll(".fruit");
  for (let i = 0; i < fruitList.length; i++) {
    const currentFruit = fruitList[i].firstChild.textContent.toLowerCase();
    const currentFruitDescription =
      fruitList[i].firstElementChild.textContent.toLowerCase();
    if (currentFruit.indexOf(textEntered) === -1)
      fruitList[i].style.display = "none";
    else fruitList[i].style.display = "flex";
  }
});
