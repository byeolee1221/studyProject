import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// 모든 컴포넌트에서 안전하게 사용할 수 있도록 해주는 선언
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE"
};

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
};

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO
});

const { persistAtom } = recoilPersist({
  key: "toDoStorage",
  storage: localStorage
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  }
});