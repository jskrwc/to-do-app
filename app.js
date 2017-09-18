function onReady() {
  var toDos =[];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
     toDos.push({
       title: newToDoText.value,
       complete: false
     });
     newToDoText.value = '';  //clear text input
     renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');
    toDoList.innerHTML=''; //set newLi to empty string
    //toDoList.deleteButton='Delete Me'; //text for the delete button
    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.innerHTML = toDo.title; //??add toDo's title text to newLi
      toDoList.appendChild(newLi);   //adds todo item
      newLi.appendChild(checkbox);   //adds checkbox

      //add deleteButton
      var deleteButton = document.createElement('button');
      deleteButton.type = "button";
      deleteButton.textContent = "Delete Me";
      newLi.appendChild(deleteButton);  //adds delete button

      //listen for delete click
       deleteButton.addEventListener('click', (event) => { //delete todo
         toDoList.removeChild(newLi);
       });
    });
  }

  addToDoForm.addEventListener('submit', function(event) {
      event.preventDefault(); //??prevent page from reloading
      createNewToDo();
  });

  renderTheUI(toDos);
  }

window.onload = function() {
  alert("The window has loaded!");
   onReady();
 };
