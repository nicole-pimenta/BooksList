import { IBookList } from "../../pages/Home/Home";
import {
  StyledCard,
  StyledValueSection,
  StyledValueDescription,
  StyledTitle,
} from "./style";

interface IBookItemProps {
  book: IBookList;
  handleDeleteBook: (id: string | undefined) => void;
}

export const BookItem = ({ book, handleDeleteBook }: IBookItemProps) => {
  return (
    <StyledCard>
      <StyledValueDescription>
        <StyledTitle>{book.title} </StyledTitle>
        <p>{book.author}</p>
        <section>{book.description} </section>
      </StyledValueDescription>
      <StyledValueSection>
        <button onClick={() => handleDeleteBook(book.id)}>excluir</button>
      </StyledValueSection>
    </StyledCard>
  );
};
