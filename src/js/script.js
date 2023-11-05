function

















let myNodelist = document.getElementsByTagName("LI");

let evBtn = document.getElementsByClassName("close");
for (let i = 0; i < evBtn.length; i++) {
    evBtn[i].onclick = function() {
        console.log("button is clicked");
        let listItem = this.parentElement;
        listItem.style.display = 'none';
    };
}
let unchecked = document.getElementsByClassName("unchecked");
for (let i = 0; i < unchecked.length; i++) {
    unchecked[i].onclick = function() {
        console.log("li is checked");
        this.classList.toggle("checked");
    };
}

function newTask() {
    const input = document.getElementById("myInput");
    const inputValue = input.value.trim();

    if (inputValue !== "") {
        // Create a new <li> element
        const listItem = document.createElement("li");
        listItem.className = "unchecked";

        // Add the task text
        listItem.appendChild(document.createTextNode(inputValue));

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "close";
        deleteButton.appendChild(document.createTextNode("Delete"));

        // Add a click event to delete the new item
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });


        // Add the delete button to the <li>
        listItem.appendChild(deleteButton);
        listItem.addEventListener("click", function(){
            listItem.classList.toggle("checked")
        })
        // Add the new <li> element to the list
        const myList = document.getElementById("myUL");
        myList.appendChild(listItem);

        // Clear the input field
        input.value = "";
    }
}