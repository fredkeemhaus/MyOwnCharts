import styled from "styled-components";
import ControlButton from "../components/Button";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  padding: 40px 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  margin-right: 150px;
  h1 {
    font-size: 2.2em;
    font-weight: 600;
    line-height: 1.3em;
  }

  div {
    display: flex;

    h3 {
      font-size: 1.2em;
      line-height: 1.3em;
      margin-top: 30px;
      color: rgb(107, 118, 132);
    }
  }
`;

const BottomSection = styled.div`
  box-sizing: border-box;
  margin: auto;
  width: 100%;
`;

const PasteDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
    span {
      font-size: 1.2em;
    }
  }

  div {
    width: 100%;

    textarea {
      font-size: 0.8em;
      height: 490px;
      width: 500px;
      padding: 10px;
      margin-bottom: 20px;
    }
  }
`;

const MakeChart = () => {
  return (
    <div>
      <Wrap>
        <Container>
          <TopSection>
            <h1>
              피벗 차트에 오신 것을 <br />
              환영합니다!
            </h1>
            <div>
              <p>
                <h3>
                  여러분의 데이터를
                  <br />
                  오른쪽에 복사/붙여넣기 해주세요.
                </h3>
              </p>
            </div>
          </TopSection>
          <BottomSection>
            <PasteDataContainer>
              <p>
                <span>당신의 데이터를 추가해주세요 (CSV / TSV format)</span>
                {/* <span>Please add your data in CSV or TSV format</span> */}
              </p>
              <div>
                <textarea
                  placeholder={
                    "date,column1,column2,column3...\n2022-03-01,1,1,1..."
                  }
                />
              </div>
            </PasteDataContainer>
            <ControlButton position={"flex-end"} name={"차트 생성하기"} />
          </BottomSection>
        </Container>
      </Wrap>
    </div>
  );
};

export default MakeChart;
