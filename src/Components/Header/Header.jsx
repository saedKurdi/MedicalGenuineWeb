import { Header, Nav, Links, Link, LinkHeader, Buttons } from "./styles";
import { Button } from "../../UI/Button";
export const HeaderSection = () => {
  return (
    <Header>
      <Nav>
        <Links>
          <LinkHeader>MedicalGenuine</LinkHeader>
          <Link>Home</Link>
          <Link>Product</Link>
          <Link>Pricing</Link>
          <Link>Contact</Link>
        </Links>
        <Buttons>
          <Link>Login</Link>
          <Button>
            JOIN US <i class="fa-solid fa-arrow-right"></i>
          </Button>
        </Buttons>
      </Nav>
    </Header>
  );
};
