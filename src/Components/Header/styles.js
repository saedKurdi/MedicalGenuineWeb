import styled from "styled-components";

const Header = styled.header`
  background-color: #8bbac0;
  padding: 22px 250px;
  border: 0px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Links = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  gap: 16px;
`;

const LinkHeader = styled.li`
  font-family: Montserrat;
  font-size: 24px;
  margin-right: 15px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const Link = styled.li`
  font-family: Montserrat;
  font-size: 14px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const Buttons = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
`;

export { Header, Nav, Links, LinkHeader, Link, Buttons };
