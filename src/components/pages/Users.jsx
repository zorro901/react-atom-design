import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test${val}`,
    image: "https://source.unsplash.com/_PzZxrEswRY",
    email: "12345@excamol.com",
    phone: "000-1111-2222",
    company: {
      name: "test株式会社"
    },
    website: "http://googme.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧です</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
