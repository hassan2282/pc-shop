import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// #region Sample data
const data = [
  {
    subject: 'سفارشات',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'محصولات',
    A: 88,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'کاربران',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'فروش',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'تیکت ها',
    A: 100,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'کامنت ها',
    A: 100,
    B: 85,
    fullMark: 150,
  },
];

// #endregion
const SimpleRadarChart = () => {
  return (
    <div style={{ width: '100%', height: '400px', maxWidth: '500px' }}>
      <RadarChart
        width={500}
        height={400}
        outerRadius="80%"
        data={data}
        margin={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#FFFFFF" fill="#F6339A" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default SimpleRadarChart;