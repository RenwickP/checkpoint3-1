import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  //need to rename if I have time. I am getting confused by the names.
  let listTemplate = "";
  let list = store.Lists;
  list.forEach(List => {
    listTemplate += List.Template;
  });

  document.querySelector("#inject").innerHTML = listTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addTask(event) {
    event.preventDefault();
    let task = event.target;
    let newForm = {
      name: task.name.value
    };
    console.log(newForm);
    ListService.addList(newForm);
    _drawLists();
    task.reset();
  }

  addChore(event, newId) {
    event.preventDefault();
    let newChore = event.target;
    let chore = {
      name: newChore.name.vale,
      choreId: newId
    };

    console.log(chore);
    ListService.newChore(chore);
    _drawLists();
    newChore.reset();
  }

  removeTaskForm(taskId) {
    ListService.removeTaskForm(taskId);
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
