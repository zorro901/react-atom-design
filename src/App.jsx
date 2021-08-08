import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaltLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";
const user = {
  name: "test",
  image: "https://source.unsplash.com/_PzZxrEswRY",
  email: "12345@excamol.com",
  phone: "000-1111-2222",
  company: {
    name: "test株式会社"
  },
  website: "http://googme.com"
};
export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
