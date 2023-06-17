import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input/Input";
import { FormContainer } from "./style";
import { formSchema } from "./formSchema";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const submit = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Título "
          placeholder="Digite aqui o título do seu livro"
          type="text"
          id="title"
          {...register("title")}
        />
        {errors.title ? <p>{errors.title.message}</p> : null}
        <Input
          label="Autor"
          placeholder="Digite aqui o autor do seu livro"
          type="text"
          id="author"
          {...register("author")}
        />
        {errors.author ? <p>{errors.author.message}</p> : null}
        <Input
          label="Descrição"
          placeholder="Digite aqui a descrição do seu livro"
          type="text"
          id="description"
          {...register("description")}
        />
        {errors.description ? <p>{errors.description.message}</p> : null}

        <button type="submit"> Inserir Livro</button>
      </form>
    </FormContainer>
  );
};
