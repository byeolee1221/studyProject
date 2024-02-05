import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .5rem;
  padding-bottom: .4rem;
  border-bottom: 2px solid #e7ecef;
`;

const ToDoBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
  button {
    padding: .3rem 1rem;
    background-color: #f5cb5c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: medium;
    &:hover {
      background-color: #ffe49b;
      transition: all .1s ease-in-out;
    }
  }
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = e;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)];
    })
  };


  // 인자를 넘겨야 하기 때문에 onClick 함수를 함수형태로 작성
  return (
    <ListItem>
      <span>{text}</span>
      <ToDoBtnBox>
        {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>예정</button>}
        {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>진행중</button>}
        {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>완료</button>}
      </ToDoBtnBox>
    </ListItem>
    )
}

export default ToDo;