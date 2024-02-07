import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

interface IBoardContainerProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
};

interface IBoardProps {
  toDos: IToDo[];
  boardId: string;
};

interface IForm {
  toDo: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  padding: 20px 10px;
  padding-top: 30px;
  min-height: 350px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const BoardContainer = styled.div<IBoardContainerProps>`
  padding: 0px 5px;
  padding-top: 20px;
  flex-grow: 1;
  background-color: ${(props) => props.isDraggingOver ? "rgba(0, 0, 0, 0.5)" : props.isDraggingFromThis ? "#f5f1ed" : "rgba(0, 0, 0, 0.2)"};
  border-radius: 10px;
  transition: all .1s ease-in-out;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: .3rem;
`;

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [
          newToDo,
          ...allBoards[boardId]
        ]
      };
    });
    setValue("toDo", "");
  }
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <FormInput {...register("toDo", {required: true})} type="text" placeholder={`${boardId}인(한) 일을 적어주세요.`} />
      </Form>
      <Droppable droppableId={boardId}>
        {(item, snapshot) => (
          <BoardContainer
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={item.innerRef} {...item.droppableProps}
          >
            {toDos.map((toDo, index) =>
              <DraggableCard key={toDo.id} toDoId={toDo.id} index={index} toDoText={toDo.text} />)}
            {item.placeholder}
        </BoardContainer>)}
      </Droppable>
    </Wrapper>
  )
}

export default Board;