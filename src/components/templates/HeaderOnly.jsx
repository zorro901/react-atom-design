import { BrowserRouter } from "react-router-dom";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <Header>{children}</Header>
    </BrowserRouter>
  );
};
