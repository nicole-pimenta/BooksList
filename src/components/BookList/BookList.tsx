import { ListContainer } from "./style";
import { IBookList } from "../../pages/Home/Home";
import { BookItem } from "../BookItem/BookItem";

interface IBooksListProps {
  booksList: IBookList[];
  setBooksList: React.Dispatch<React.SetStateAction<IBookList[]>>;
}

export const BookList = ({ booksList, setBooksList }: IBooksListProps) => {
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
            <BookItem key={book.id} book={book} setBooksList={setBooksList} />
          ))}
        </ul>
      )}
    </ListContainer>
  );
};
