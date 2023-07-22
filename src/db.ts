import Dexie, { Table } from "dexie";

export interface Lecture {
  id: number;
  name: string;
  status: "no-attended" | "in-progress" | "attended";
}

export class MySubClassedDexie extends Dexie {
  lectures!: Table<Lecture>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      lectures: "++id,name,status",
    });
  }
}

export const db = new MySubClassedDexie();
