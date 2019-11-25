import List from "../Models/List.js";
import store from "../store.js";
import Chore from "../Models/Chore.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  addList(newList) {
    let addList = new List(newList);
    store.State.lists.push(addList);
    console.log(store.State.lists);
    store.saveState();
  }
  newChore(choresNew) {
    let chore = new Chore(choresNew);
    let findChore = store.State.lists.find(s => s.id == chore.sessionId);
    findChore.chores.push(chore);
    store.saveState();
  }

  removeTaskForm(taskindex) {
    let removeForm = store.State.lists.findIndex(list => list.id == taskindex);
    store.State.lists.splice(removeForm, 1);
    store.saveState();
  }

  deleteLists(choreIndex, listId) {
    // debugger;
    let removeChore = store.State.lists.find(chores => chores.id == choreIndex);
    //I cant find .chores because it cant be accessed.
    let remove = removeChore.chores.findIndex(chores => chores.id == listId);
    store.State.lists.chores.splice(remove, 1);
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
