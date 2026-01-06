

import styled from "styled-components";


const Headers = styled.header`

display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: black;
`;

const Menu = styled.ul`

 display: flex;
  gap: 20px;
`;



export default function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black">
      <h1>OZ코딩스쿨</h1>
      <ul className="flex justify-center items-center gap-5">
        <li className="list-none font-normal text-[13px]
">로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
