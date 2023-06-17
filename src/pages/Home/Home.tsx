import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { BookList } from "../../components/BookList/BookList";
import { Footer } from "../../components/Footer/Footer";
import { StyledContainer } from "./style";

export const Home = () => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Form />
        <BookList />
      </StyledContainer>
      <Footer />
    </div>
  );
};
