import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { BookList } from "../components/BookList";

export const Home = () => {
  return (
    <div>
      <Header />
      <Form />
      <BookList />
    </div>
  );
};
