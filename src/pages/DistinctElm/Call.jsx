import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';
import { SvgIcon } from '@mui/material';
import { AddIcCallRounded, Alarm, CallEnd, CallMade, CallMissed, EmojiEmotions, PermPhoneMsg, PhoneCallback, PhoneForwarded, PhoneInTalk, RingVolume, SettingsPhone, } from '@mui/icons-material';
import './dialer.css';
const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#82ca9d'];


const COLORS2 = ['rgb(241 241 245)', 'rgb(253 236 225)', 'rgb(206 245 219)','rgb(249 230 240)','rgb(225 240 253)'];



// const renderActiveShape = (props) => {
//     const RADIAN = Math.PI / 180;
//     const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
//     const sin = Math.sin(-RADIAN * midAngle);
//     const cos = Math.cos(-RADIAN * midAngle);
//     const sx = cx + (outerRadius + 10) * cos;
//     const sy = cy + (outerRadius + 10) * sin;
//     const mx = cx + (outerRadius + 30) * cos;
//     const my = cy + (outerRadius + 30) * sin;
//     const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//     const ey = my;
//     const textAnchor = cos >= 0 ? 'start' : 'end';

//     return (
//         <g>
//             <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//                 {payload.name}
//             </text>
//             <Sector
//                 cx={cx}
//                 cy={cy}
//                 innerRadius={innerRadius}
//                 outerRadius={outerRadius}
//                 startAngle={startAngle}
//                 endAngle={endAngle}
//                 fill={fill}
//             />
//             <Sector
//                 cx={cx}
//                 cy={cy}
//                 startAngle={startAngle}
//                 endAngle={endAngle}
//                 innerRadius={outerRadius + 6}
//                 outerRadius={outerRadius + 10}
//                 fill={fill}
//             />
//             <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//             <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//             <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value ${value}`}</text>
//             <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//                 {`(Rate ${(percent * 100).toFixed(2)}%)`}
//             </text>
//         </g>
//     );
// };

function Dialer({ elm }) {
    const [svgsArray, setsvgsArray] = useState([
        { icon: AddIcCallRounded, color: "rgba(149,149,255,1)" },
        { icon: PermPhoneMsg, color: "rgba(252,161,71,1)" },
        { icon: CallEnd, color: "rgba(66,193,110,1)" },
        { icon: PhoneForwarded, color: "rgb(98 98 107)" },
        { icon: PhoneCallback, color: "rgba(220,91,183,1)" }
    ])
    
    const [DataArray, setDataArray] = useState([]);

    useEffect(() => {
        //logic to merge array
        const arry = elm.map((item, index) => {
            return {
                name: item.name,
                value: item.value,
                icon: svgsArray[index].icon,
                color: svgsArray[index].color

            }
        });

        setDataArray(arry);
        // console.log(arry);

    }, [elm,svgsArray])


    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const totalValue = DataArray.reduce((acc, { value }) => acc + value, 0);

    return (
        <div className="alignBoxX">
            {/* Pie Chart */}
            {/* <ResponsiveContainer width="50%" height={250}>
                <PieChart>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape} // This line enables the hover effect
                        data={DataArray}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        fill="#82ca9d"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    >
                        {DataArray.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer> */}
            {/* Cards for each item */}
            <div style={{ width: '100%' }} className="card">
                {DataArray.map(({ name, value,color,icon }, index) => {
                    // const percentage = ((value / totalValue) * 100).toFixed(2);

                    return (
                        <div className="item" key={index} style={{ background: COLORS2[index % COLORS2.length] }}>
                             < SvgIcon className="iconX" component={icon} sx={{ fontSize: 36,fill:color }} />
                            <span className="quantity">{value}</span>
                            <span style={{ color: color }} className="text">{name}</span>
                          
                        </div>
            );
                })}
        </div>
        </div >
    );
}

export default Dialer;
