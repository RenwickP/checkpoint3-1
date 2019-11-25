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

  deleteChore(choreId, listId) {
    debugger;
    // FIXME this is iterating over the lists array to find a single list, how can you use this?
    let foundList = store.State.lists.find(list => list.id == choreId);

    // FIXME Do you need to find the index? Do we already have it?
    let remove = foundList.chores.findIndex(chores => chores.id == listId);
    // FIXME We have our list above, now we need to remove one of its chores
    foundList.chores.splice(remove, 1);
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;

// let sessionToRemoveSpeakerFrom = store.State.sessions.find(
//   s => s.id == sessionId

// let speakerIndex = sessionToRemoveSpeakerFrom.speakers.findIndex(
//   s => s.id == speakerId
// );
// sessionToRemoveSpeakerFrom.speakers.splice(speakerIndex, 1);
// store.saveState();
