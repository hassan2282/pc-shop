import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#086FFF', '#66C1FD', '#28A4FD', '#3FB7F3', '#1080FD', '#42B8FD', '#0158FD'];

// #region Sample data
const data = [
  {
    name: 'ایرپاد پرو 2',
    uv: 3200,
    pv: 2100,
    amt: 2200,
  },
  {
    name: 'هندزفری',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'ماوس',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'لپ تاب',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'گوشی شیائومی',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'پاوربانک',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'روبیک',
    uv: 1190,
    pv: 2300,
    amt: 2100,
  },
];

// #endregion
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
};

export default function CustomShapeBarChart() {
  return (
    <div className='flex w-full h-full justify-center items-center p-2'>
      <BarChart
        width={900}
        height={500}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Bar dataKey="uv" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  </div>
);
}