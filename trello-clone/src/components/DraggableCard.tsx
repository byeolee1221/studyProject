import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) => props.isDragging ? "#d5bdaf" : props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  box-shadow: ${(props) => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({toDoId, toDoText, index}: IDraggableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={String(toDoId)} index={index}>
      {(item, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={item.innerRef} {...item.draggableProps} {...item.dragHandleProps}>
          {toDoText}
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard);