import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';
const ExpenseMonthShowerTube = (props) => {
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
        data: props.Amount,
        fill: true,
        backgroundColor: 'rgba(6, 156,51, .3)',
        borderColor: '#02b844',
      },
    ],
  };
  return (
    <div>
      <Bar data={data} width={'1px'} height={'1px'} />
    </div>
  );
};
export default ExpenseMonthShowerTube;
