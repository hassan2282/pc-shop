import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
];

function RenderBarChart({color}) {
  
  return (
    <BarChart width={90} height={90} data={data}>
      {/* <XAxis dataKey="name" stroke="#8884d8" /> */}
      {/* <YAxis /> */}
      {/* <Tooltip wrapperStyle={{ width: 50, backgroundColor: '#ccc' }} /> */}
      {/* <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: '#f5f5f5',
          border: '1px solid #d5d5d5',
          borderRadius: 3,
          lineHeight: '40px',
        }}
      /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill={color} barSize={20} />
    </BarChart>
  );
}

export default RenderBarChart;
