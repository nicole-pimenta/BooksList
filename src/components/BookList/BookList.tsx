import { ListContainer } from "./style";
import { IBookList } from "../../pages/Home/Home";

interface IBooksListProps {
  booksList: IBookList[];
  setBooksList: React.Dispatch<React.SetStateAction<IBookList[]>>;
}

export const BookList = ({ booksList, setBooksList }: IBooksListProps) => {
  console.log(booksList);
  return <ListContainer>BookList</ListContainer>;
};
