import { useNavigate } from "react-router";
import { HeaderContainer, InitialOptions } from "./styled";
import logoheader from "../../Assets/logoheader.png";

function Header({ userName, institutions, login, buttonLogout, buttonRegister }) {
  const navigate = useNavigate();
  const ClearAll = () => {
    localStorage.removeItem("User");
    navigate("/");
  };
  return window.localStorage.getItem("User") ? (
    <HeaderContainer>
      <img src={logoheader} alt="Logo do Funcultura" />
      <InitialOptions>
        <a href="https://www.cultura.pe.gov.br/fundarpe/">{institutions}</a>
        <a href="/perfil">{userName}</a>
        {buttonLogout && (
          <button onClick={() => ClearAll()}>{buttonLogout}</button>
        )}
      </InitialOptions>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <img src={logoheader} alt="Logo do Funcultura" />
      <InitialOptions>
        <a href="https://www.cultura.pe.gov.br/fundarpe/">{institutions}</a>
        <a href="/login">{login}</a>
        {buttonRegister && (
          <button onClick={() => navigate("/cadastro")}>
            {buttonRegister}
          </button>
        )}
      </InitialOptions>
    </HeaderContainer>
  );
}

export default Header;
