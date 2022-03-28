import styled from "styled-components";
import ControlButton from "../components/Button";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin auto;
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  padding: 40px 20px;
  margin: auto;
`;

const TopSection = styled.div`
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 30px;
  width: 100%;
  max-width: 700px;

  h1 {
    font-size: 2.2em;
  }

  div {
    display: flex;

    h3 {
      font-size: 1.2em;
      margin-top: 30px;
    }
  }
`;

const BottomSection = styled.div`
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 10px;
  width: 100%;
  max-width: 700px;
`;

const PasteDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
    span {
      font-size: 0.8em;
    }
  }

  div {
    width: 100%;

    textarea {
      font-size: 0.8em;
      height: 490px;
      width: 700px;
      padding: 10px;
    }
  }
`;

const MakeChart = () => {
  return (
    <div>
      <Wrap>
        <Container>
          <TopSection>
            <h1>Welcome to Pivot Charts</h1>
            <div>
              <p>
                <h3>Copy &amp; paste your data below</h3>
              </p>
            </div>
          </TopSection>
          <BottomSection>
            <PasteDataContainer>
              <p>
                <span>Please add your data in CSV or TSV format</span>
              </p>
              <div>
                <textarea
                  placeholder={
                    "date,column1,column2,column3...\n2022-03-01,1,1,1..."
                  }
                />
              </div>
            </PasteDataContainer>
          </BottomSection>
          <ControlButton position={"flex-end"} name={"차트 생성하기"} />
        </Container>
      </Wrap>
    </div>
  );
};

export default MakeChart;
