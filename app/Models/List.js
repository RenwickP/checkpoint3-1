import { generateId } from "../utils.js";
import Chore from "./Chore.js";

export default class List {
  constructor({ id = generateId(), name, chores = [] }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;

    this.chores = chores.map(s => new Chore(s));
  }

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return `
      <div class="col-4">
      <p>${this.name}</p>
      <div class="form-group">
      <form onsubmit="app.listController.addChore(event, '${this.id}')">
      <button type="submit" class="btn btn-secondary btn-sm">Add</button>
        <label for=""></label>
        <input
          type="text"
          name="chore"
          id="name"
          class="form-control"
          placeholder="task"
        />
        ${this.makeChore()}
        
        </form>
        <button class="btn btn-danger btn-sm" onclick="app.listController.removeTaskForm('${
          this.id
        }')">Delete</button>

  </div>
    </div>`;
  }
  makeChore() {
    let template = "";
    this.chores.forEach(chore => (template += chore.Template));
    return template;
  }
}
