import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .7rem;
  margin-top: 1rem;
  width: 60%;
  margin: auto;
`;

const Input = styled.input`
  width: 80%;
  padding: .5rem;
  border-radius: 10px;
  font-size: large;
`;

const SubmitBtn = styled.button`
  padding: .5rem 2rem;
  font-size: large;
  font: inherit;
  font-weight: bold;
  background-color: #c6c5b9;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const onSubmit = ({toDo}: IForm) => {
    setToDos((oldToDos) => [{text: toDo, id: Date.now(), category}, ...oldToDos]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("toDo", {required: "할 일을 적어주세요."})} placeholder="할 일을 적어주세요." />   
      <SubmitBtn>추가하기</SubmitBtn> 
    </Form>
  )
}

export default CreateToDo;