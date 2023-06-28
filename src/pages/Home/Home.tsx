import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { BookList } from "../../components/BookList/BookList";
import { Footer } from "../../components/Footer/Footer";
import { StyledContainer } from "./style";
import { useState } from "react";

export interface IBookList {
  id?: string;
  title: string;
  author: string;
  description: string;
}

export const Home = () => {
  const [booksList, setBooksList] = useState<IBookList[]>([]);

  const handleDeleteBook = (id: string | undefined) => {
    const filteredList = booksList.filter((book: IBookList) => book.id !== id);

    setBooksList(filteredList);
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <Form setBooksList={setBooksList} />
        <BookList booksList={booksList} handleDeleteBook={handleDeleteBook} />
      </StyledContainer>
      <Footer />
    </>
  );
};
