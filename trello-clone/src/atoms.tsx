import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
};

interface IToDoState {
  [key: string]: IToDo[];
};

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    예정: [],
    진행중: [],
    완료: []
  }
});