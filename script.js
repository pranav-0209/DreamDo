
const newItemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const bucketList = document.getElementById("bucket-list");

const addNewItem = () => {
  const newItemText = newItemInput.value.trim(); 

  if (newItemText !== "") {

    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span class="text">${newItemText}</span>
    `;
    bucketList.appendChild(li);

   
    newItemInput.value = "";
  } else {
    alert("Please enter a valid bucket list item!");
  }
};

addButton.addEventListener("click", addNewItem);

newItemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addNewItem(); 
  }
});


bucketList.addEventListener("change", (event) => {
  if (event.target.classList.contains("checkbox")) {
    const listItem = event.target.parentElement; 
    listItem.classList.toggle("completed");
  }
});
