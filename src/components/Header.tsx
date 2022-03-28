import styled from "styled-components";
import { POINT_COLOR } from "../config/color";

import logo from "../asset/Pivot Charts.png";
import feedback from "../asset/Feedback form.png";

const HeaderWrap = styled.header`
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${POINT_COLOR};
`;

const Header = () => {
  return (
    <HeaderWrap>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <div>
        <p>
          <img src={feedback} alt="feedback" />
        </p>
      </div>
    </HeaderWrap>
  );
};

export default Header;
