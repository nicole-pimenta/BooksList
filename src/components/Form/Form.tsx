import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input/Input";
import { FormContainer, StyledMessageError } from "./style";
import { formSchema, TFormValues } from "./formSchema";
import { IBookList } from "../../pages/Home/Home";
import { v4 as uuidv4 } from "uuid";

interface IFormProps {
  setBooksList: React.Dispatch<React.SetStateAction<IBookList[]>>;
}

export const Form = ({ setBooksList }: IFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (formValue) => {
    const currentBook = { ...formValue, id: uuidv4() };
    // setBooksList([...booksList, currentBook]);

    setBooksList((booklist) => [...booklist, currentBook]);

    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Título "
          placeholder="Digite aqui o título do seu livro"
          type="text"
          id="title"
          {...register("title")}
        />
        {errors.title ? (
          <StyledMessageError>{errors.title.message}</StyledMessageError>
        ) : null}
        <Input
          label="Autor"
          placeholder="Digite aqui o autor do seu livro"
          type="text"
          id="author"
          {...register("author")}
        />
        {errors.author ? (
          <StyledMessageError>{errors.author.message}</StyledMessageError>
        ) : null}
        <Input
          label="Descrição"
          placeholder="Digite aqui a descrição do seu livro"
          type="text"
          id="description"
          {...register("description")}
        />
        {errors.description ? (
          <StyledMessageError>{errors.description.message}</StyledMessageError>
        ) : null}

        <button type="submit"> Inserir Livro</button>
      </form>
    </FormContainer>
  );
};
