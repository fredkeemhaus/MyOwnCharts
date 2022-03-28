import styled from "styled-components";
import { POINT_COLOR } from "../config/color";

import logo from "../asset/Pivot Charts.png";
import feedback from "../asset/Feedback form.png";
import { useHistory } from "react-router";

const HeaderWrap = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${POINT_COLOR};
  position: absolute;
`;

const HeaderContainer = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h1 {
    cursor: pointer;
  }

  div {
    cursor: pointer;
  }
`;

const Header = () => {
  const history = useHistory();
  const _onGoHome = () => {
    history.push("/");
  };
  return (
    <HeaderWrap>
      <HeaderContainer>
        <h1 onClick={_onGoHome}>
          <img src={logo} alt="logo" />
        </h1>
        <div>
          <p>
            <img src={feedback} alt="feedback" />
          </p>
        </div>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
