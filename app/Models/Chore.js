import { generateId } from "../utils.js";

export default class Chore {
  constructor({ id = generateId(), name, sessionId }) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
    // this.choreId = choreId;
  }

  get Template() {
    //  FIXME Make sure to pass all the correct information the method needs.
    return `
    <p>${this.name}<button type="button" class="btn btn-secondary btn-sm text-right" onclick="app.listController.deleteChore('${this.sessionId}', '${this.id}')">Delete Chore</button></p>
    
    `;
  }
}
