import React, { useState } from "react";
import styled from "styled-components";
import ControlButton from "../components/Button";
import { usePapaParse } from "react-papaparse";
import { POINT_COLOR } from "../config/color";

const Wrap = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  min-width: 1024px;
  padding: 40px 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TopSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  margin-right: 150px;
  margin-top: 40px;
  height: 100%;
  position: relative;

  p {
    margin-bottom: 20px;
    color: ${POINT_COLOR};

    span {
      font-weight: 600;
    }
  }

  h1 {
    font-size: 2.2em;
    font-weight: 600;
    line-height: 1.3em;
  }

  div {
    display: flex;
    position: absolute;
    bottom: 90px;

    h3 {
      font-size: 1.2em;
      line-height: 1.35em;
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
      font-weight: 600;
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
  const [csvData, setCsvData] = useState<any>(null);
  const { readString } = usePapaParse();

  const _onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setCsvData(e.currentTarget.value);
  };

  const _onHandleReadString = (e: React.MouseEvent<HTMLButtonElement>) => {
    readString(csvData, {
      worker: true,
      complete: (results) => {
        console.log("-------------");
        console.log(results);
        console.log("-------------");
      },
    });
  };

  return (
    <div>
      <Wrap>
        <Container>
          <TopSection>
            <p>
              <span>????&nbsp;&nbsp;????????? ????????? ?????? ????????????????</span>
            </p>
            <h1>
              ?????? ????????? ?????? ?????? <br />
              ???????????????! ????
            </h1>
            <div>
              <h3>
                ???????????? ????????????
                <br />
                ???????????? ??????/???????????? ????????????. ????
              </h3>
            </div>
          </TopSection>
          <BottomSection>
            <PasteDataContainer>
              <p>
                <span>???????????? ???????????? ?????????????????? (CSV / TSV format)</span>
                {/* <span>Please add your data in CSV or TSV format</span> */}
              </p>
              <div>
                <textarea
                  value={csvData || ""}
                  onChange={_onChange}
                  placeholder={
                    "date,column1,column2,column3...\n2022-03-01,1,1,1..."
                  }
                />
              </div>
            </PasteDataContainer>
            <ControlButton
              submit={_onHandleReadString}
              position={"flex-end"}
              name={"?????? ????????????"}
            />
          </BottomSection>
        </Container>
      </Wrap>
    </div>
  );
};

export default MakeChart;
