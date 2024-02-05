import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector} from "../atoms";
import ToDo from "./ToDo";

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 1rem;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: .5rem;
`;

const List = styled.ul`
  width: 40%;
  margin: auto;
  margin-top: 5rem;
`;

const ToDoList = () => {
  // const value = useRecoilValue(toDoState);   // 값만 불러오고 싶을 때 사용
  // const modFn = useSetRecoilState(toDoState);   // 변경함수만 불러오고 싶을 때 사용
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };
  return (
    <div>
      <Title>투두 리스트</Title>
      <hr />
      <SelectBox>
        <Select value={category} onInput={onInput}>
          <option defaultChecked disabled>--아래에서 선택해주세요--</option>
          <option value={Categories.TO_DO}>해야할 일</option>
          <option value={Categories.DOING}>진행중인 일</option>
          <option value={Categories.DONE}>완료된 일</option>
        </Select>
      </SelectBox>
      <CreateToDo />
      <List>
        {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </List>
    </div>
  )
}

export default ToDoList;