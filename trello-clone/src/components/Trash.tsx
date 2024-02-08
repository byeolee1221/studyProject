import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

interface ITrashProps {
  toDos: IToDo[];
  boardId: string;
};

interface ITrashContainerProps {
  isDraggingOver: boolean;
};

const TrashBtn = styled.button<ITrashContainerProps>`
  background: none;
  border: none;
  cursor: pointer;
`;

const Trash = () => {
  const setToDos = useSetRecoilState(toDoState);
  const onDelete = () => {
    setToDos((oldToDos) => {
      return [...oldToDos.filter((toDo) => toDo.)]
    })
  }

  return (
    <Droppable droppableId="trash">
      {(item, snapshot) => (
        <TrashBtn
          onClick={onDelete}
          isDraggingOver={snapshot.isDraggingOver}
          ref={item.innerRef} {...item.droppableProps}
        >
        <img src="trash.png" alt="쓰레기통 이미지" />
      </TrashBtn>
      )}
    </Droppable>
  )
}

export default Trash;