import React from 'react';

const AssessmentStaticList = () => {
  const data = React.useMemo(
    () => [
      {
        col1: `Hello`,
        col2: `World`,
      },
      {
        col1: `React`,
        col2: `Table`,
      },
      // more data...
    ],
    []
  );

  return (
    <div>
      {data.map((item, index) =>
        <div key={index}>
          <p>{item.col1}</p>
          <p>{item.col2}</p>
        </div>)}
    </div>
  );
};

export default AssessmentStaticList;
