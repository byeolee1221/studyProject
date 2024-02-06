import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  min-height: 200px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

const App = () => {
  const onDragEnd = () => {}
  return (
      <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(item) => (<Board ref={item.innerRef} {...item.droppableProps}>
              {toDos.map((toDo, index) => <Draggable draggableId={toDo} index={index}>
                {(item) => (
                  <Card ref={item.innerRef} {...item.draggableProps} {...item.dragHandleProps}>
                    {toDo}
                  </Card>)}
              </Draggable>)}
              {item.placeholder}
            </Board>)}
          </Droppable>
        </Boards>
        </Wrapper>
      </DragDropContext>
  )
}

export default App;
