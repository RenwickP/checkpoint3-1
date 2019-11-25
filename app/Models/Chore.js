import { generateId } from "../utils.js";

export default class Chore {
  constructor({ id = generateId(), name, sessionId }) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
    // this.choreId = choreId;
  }

  get Template() {
    return `
    <p>${this.name}<button class="btn btn-secondary btn-sm text-right" onclick="app.listController.deleteList('${this.sessionId}')">Delete Chore</button></p>
    
    `;
  }
}
