import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';
import { SvgIcon } from '@mui/material';
import { AddIcCallRounded, Alarm, Aod, BatterySaver, CallEnd, CallMissed, DriveFileMove, EmojiEmotions, ForkLeft, ForkRight, PhoneEnabled, PhoneInTalk, PhonelinkEraseRounded, RingVolume, SendToMobile, SettingsPhone, Source, SystemUpdate, } from '@mui/icons-material';
import './services.css';

const COLORS2 = ['rgb(241 241 245)', 'rgb(253 236 225)', 'rgb(206 245 219)'];
function Services({ elm }) {


    const [svgsArray, setsvgsArray] = useState([
        { icon: Source, color: "rgba(66,193,110,1)" },
        { icon: ForkLeft, color: "rgba(149,149,255,1)" },
        { icon: ForkRight, color: "rgba(252,161,71,1)" },


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

    }, [elm, svgsArray]);



    return (

        <div className="alignBoxX">
            <div id="services">
                {DataArray.map(({ name, value, color, icon }, index) => {
                    // const percentage = ((value / totalValue) * 100).toFixed(2);

                    return (
                        <div className="item" key={index} style={{ background: COLORS2[index % COLORS2.length] }}>
                            < SvgIcon className="iconX" component={icon} sx={{ fontSize: 36, fill: color }} />
                            <span className="quantity">{value}</span>
                            <span style={{ color: color }} className="text">{name}</span>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;













