import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={100} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
