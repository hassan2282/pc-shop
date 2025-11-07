import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'فروردین',
    کاربران: 590,
    فروش: 800,
    amt: 1400,
  },
  {
    name: 'اردیبهشت',
    کاربران: 868,
    فروش: 967,
    amt: 1506,
  },
  {
    name: 'خرداد',
    کاربران: 1397,
    فروش: 1098,
    amt: 989,
  },
  {
    name: 'تیر',
    کاربران: 1480,
    فروش: 1200,
    amt: 1228,
  },
  {
    name: 'مرداد',
    کاربران: 1520,
    فروش: 1108,
    amt: 1100,
  },
  {
    name: 'شهریور',
    کاربران: 1400,
    فروش: 680,
    amt: 1700,
  },
  {
    name: 'مهر',
    کاربران: 700,
    فروش: 500,
    amt: 1700,
  },
  {
    name: 'آبان',
    کاربران: 400,
    فروش: 1000,
    amt: 1700,
  },
  {
    name: 'آذر',
    کاربران: 1350,
    فروش: 780,
    amt: 1700,
  },
  {
    name: 'دی',
    کاربران: 680,
    فروش: 750,
    amt: 1700,
  },
  {
    name: 'بهمن',
    کاربران: 1010,
    فروش: 900,
    amt: 1700,
  },
  {
    name: 'اسفند',
    کاربران: 1400,
    فروش: 680,
    amt: 1700,
  },
];

// #endregion
const SameDataComposedChart = () => {
  return (
    <div className='flex w-full h-full justify-center items-center'>
      <ComposedChart
        width={1100}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="کاربران" fill="#0347F4" />
        <Line type="monotone" dataKey="فروش" stroke="#57534D" />
      </ComposedChart>
    </div>
  );
};

export default SameDataComposedChart;