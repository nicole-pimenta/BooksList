import { ListContainer } from "./style";
import { IBookList } from "../../pages/Home/Home";
import { BookItem } from "../BookItem/BookItem";

interface IBooksListProps {
  booksList: IBookList[];
  setBooksList: React.Dispatch<React.SetStateAction<IBookList[]>>;
  handleDeleteBook: (id: string | undefined) => void;
}

export const BookList = ({ booksList, handleDeleteBook }: IBooksListProps) => {
  return (
    <ListContainer>
      <h4> Lista de Livros:</h4>

      {booksList.length === 0 ? (
        <ul>
          <span>Você ainda não possui nenhum livro cadastrado ...</span>
        </ul>
      ) : (
        <ul>
          {booksList.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              handleDeleteBook={handleDeleteBook}
            />
          ))}
        </ul>
      )}
    </ListContainer>
  );
};
