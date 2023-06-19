import { IBookList } from "../../pages/Home/Home";
import {
  StyledCard,
  StyledValueSection,
  StyledValueDescription,
  StyledTitle,
} from "./style";

interface IBookItemProps {
  book: IBookList;
  setBooksList: React.Dispatch<React.SetStateAction<IBookList[]>>;
}

export const BookItem = ({ book, setBooksList }: IBookItemProps) => {
  const handleDeleteBook = (id: string | undefined) => {
    console.log(id);
  };

  return (
    <StyledCard>
      <StyledValueDescription>
        <StyledTitle>{book.title} </StyledTitle>
        <p>{book.author}</p>
        <p>{book.description} </p>
      </StyledValueDescription>
      <StyledValueSection>
        <button onClick={() => handleDeleteBook(book.id)}>excluir</button>
      </StyledValueSection>
    </StyledCard>
  );
};
