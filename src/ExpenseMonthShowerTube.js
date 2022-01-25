import React from 'react';
const ExpenseMonthShowerTube = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Hours Studied in Geeksforgeeks',
        data: [2, 5, 7, 9, 7, 6, 4, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: 'rgba(6, 156,51, .3)',
        borderColor: '#02b844',
      },
    ],
  };
  return (
    <MDBContainer>
      <HorizontalBar data={data} />
    </MDBContainer>
  );
};
export default ExpenseMonthShowerTube;
