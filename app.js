function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  // const isBusy = false;
  addToDoForm.addEventListener('submit', (event) => {
   event.preventDefault();
  //  if(isBusy)return;
  //  isBusy = true;

   // get the text
   let title = newToDoText.value;

   // create a new li
   let newLi = document.createElement('li');

   // create a new input for the checkbox
   let checkbox = document.createElement('input');

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   // set the title
   newLi.textContent = title;

   // attach it to the ul
   toDoList.appendChild(newLi);

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   //empty the input (so user not have to)
   newToDoText.value = '';

 // DELETE button
   // create new input for delete button
   let deleteButton = document.createElement('button');

   //set the delete button type to button
   deleteButton.type = "button";

   // set the button's textContent
   deleteButton.textContent = "DeleteMe";

   // add the Delete button to the li
   newLi.appendChild(deleteButton);

   //listen for delete click
    deleteButton.addEventListener('click', (event) => {
      toDoList.removeChild(newLi);
    });

  //  isBusy=false;
 });



}

window.onload = function() {
  alert("The window has loaded!");
   onReady();
 };
