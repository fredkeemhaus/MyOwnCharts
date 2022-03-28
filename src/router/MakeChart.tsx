const MakeChart = () => {
  return (
    <div>
      <div>
        <h2>Welcome to OwnMyCharts</h2>
      </div>
      <div>
        <p>
          <span>Copy &amp; paste your data below</span>
        </p>
      </div>
      <div>
        <p>
          <span>Please add your data in CSV or TSV format</span>
        </p>
        <textarea
          placeholder={"date,column1,column2,column3...\n2022-03-01,1,1,1..."}
        />
      </div>
    </div>
  );
};

export default MakeChart;
