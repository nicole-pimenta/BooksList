import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { BookList } from "../../components/BookList/BookList";
import { Footer } from "../../components/Footer/Footer";
import { StyledContainer } from "./style";
import { useState } from "react";

export interface IBookList {
  title: string;
  author: string;
  description: string;
}

export const Home = () => {
  const [booksList, setBooksList] = useState<IBookList[]>([]);

  return (
    <>
      <Header />
      <StyledContainer>
        <Form booksList={booksList} setBooksList={setBooksList} />
        <BookList booksList={booksList} setBooksList={setBooksList} />
      </StyledContainer>
      <Footer />
    </>
  );
};
