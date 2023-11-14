import * as schema from "@colyseus/schema";


export class BoardBoxState extends schema.Schema {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.color = '';
  }
}

schema.defineTypes(BoardBoxState, {
  x: "number",
  y: "number",
  color: "string",
});

//define custom state schema
export class GameState extends schema.Schema {
  constructor() {
    super();
    this.host = "";
    this.board = "";
  }
}

schema.defineTypes(GameState, {
  host: "string",
  board: "string",
});
