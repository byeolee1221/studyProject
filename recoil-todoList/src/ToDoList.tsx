import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IForm {
  toDo: string;
  email: string;
  userName: string;
  password: string;
  password2: string;
};

const ToDoList = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<IForm>({defaultValues: {email: "@naver.com"}});
  const onValid = (data: any) => {
    console.log(data)
  };
  console.log(errors)
  // required 속성은 사용자가 개발자도구에서 직접 지우면 해제되므로 방지하는 차원에서 아래처럼 작성
  return (
        <div>
          <Form onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo", { required: true })} placeholder="할 일을 적어주세요." />   
            <input {...register("email", { required: "이메일을 적어주세요.", pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "네이버 이메일만 가능합니다." } })} placeholder="이메일" />
            <span>{errors?.email?.message}</span>
            <input {...register("userName", { required: "이름을 적어주세요.", minLength: 10 })} placeholder="아이디" />
            <span>{errors?.userName?.message}</span>
            <input {...register("password", { required: "비밀번호는 6자리 이상이어야 합니다.", minLength: 6 })} placeholder="비밀번호" />  
            <span>{errors?.password?.message}</span>
            <input {...register("password2", { required: "동일한 비밀번호를 적어주세요.", minLength: { value: 6, message: "비밀번호가 너무 짧습니다." } })} placeholder="비밀번호 확인" /> 
            <span>{errors?.password2?.message}</span>
            <button>추가하기</button> 
          </Form>
        </div>
      )
}

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setToDo(e.target.value);
//     setToDoError("");
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     if (toDo.length < 10) {
//       return setToDoError("할 일은 10글자 이상으로 작성해주세요.");
//     }

//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="할 일을 적어주세요." />
//         <button>추가하기</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   )
// }

export default ToDoList;