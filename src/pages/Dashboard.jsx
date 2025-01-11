
import React, { useContext, useState } from 'react';
import srimg1 from '../assets/totalCall.svg';
import srimg3 from '../assets/outgoing.svg';
import srimg2 from '../assets/incoming2.svg';
import Dialer from './DistinctElm/Dialer';
import Services from './DistinctElm/Services';
import Call from './DistinctElm/Call';
import Batch from './DistinctElm/Batch';
import Agents from './DistinctElm/Agents';
import { DialerSip, DisplaySettings, Person, PhoneEnabled, SupportAgentOutlined, Tty, VerifiedUserRounded } from '@mui/icons-material';
import View from './Table/View';
import { ContextX } from '../Context';



function Dashboard(props) {

  //define context
  const { isViewOpen, setIsViewOpen } = useContext(ContextX);


  //define data array---------------
  const [arrayOfData, setArrayOfData] = useState([
    [
      { name: 'WrapUpAgents', value: 280 },
      { name: 'Idle/Block', value: 330 },
      { name: 'LoginAgents', value: 159 },
      { name: 'BreakAgents', value: 34 },
      { name: 'InCallAgents', value: 37 },

    ],
    [
      { name: 'Total', value: 80 },
      { name: 'Alarm', value: 30 },
      { name: 'Idle', value: 59 },
      { name: 'Ringing', value: 7 },
      { name: 'Talk', value: 3 },

    ],
    [
      { name: 'Total', value: 8380 },
      { name: 'AgentAnswered', value: 3560 },
      { name: 'SysDisposed', value: 5009 },
      { name: 'FollowUps', value: 357 },
      { name: 'Callbacks', value: 36 },

    ],



  

    [
      { name: 'Total', value: 280 },
      { name: 'Hold', value: 330 },
      { name: 'Active', value: 159 },
      { name: 'Inactive', value: 34 },
      { name: 'Expire', value: 37 },

    ],

    [
      { name: 'Total', value: 80 },
      { name: 'InEnabled', value: 30 },
      { name: 'OutEnabled', value: 59 },

    ],
  ]);

  const FncTOshowAgentDashboard = () => {

    setIsViewOpen(true);
  }

  return (
    <>
      {isViewOpen ? (
        <div className="ViewDash">
          <View />

        </div>
      ) : (
        <div className="container">
          {/* <div className="top-box">
            <button onClick={FncTOshowAgentDashboard} className="bellBtn">
              <SupportAgentOutlined className="bell" />
              Agents

              <div className="arrow">›</div>
            </button>
            <Agents elm={arrayOfData[4]} />
          </div> */}

          <div className="row">


            <div id="Agents" className="box">
              <button onClick={FncTOshowAgentDashboard} className="bellBtn">
                <SupportAgentOutlined className="bell" />
                Agents
                <div className="arrow">›</div>
              </button>
              <Agents elm={arrayOfData[0]} />

            </div>
            <div id="Dialer" className="box">
              <button className="bellBtn">
                <Tty className="bell" />
                Dialer
                <div className="arrow">›</div>
              </button>
              <Dialer elm={arrayOfData[1]} />
            </div>

          </div>

          <div className="row">

            <div id="call" className="box">
              <button className="bellBtn">
                <PhoneEnabled className="bell" />
                Call
                <div className="arrow">›</div>
              </button>
              <Call elm={arrayOfData[2]} />
            </div>

            <div id="batch" className="box">
              <button className="bellBtn">
                <VerifiedUserRounded className="bell" />
                Batch
                <div className="arrow">›</div>
              </button>
              <Batch elm={arrayOfData[3]} />
            </div>
            <div id="servicess" className="box">
              <button className="bellBtn">
                <DisplaySettings className="bell" />
                Services
                <div className="arrow">›</div>
              </button>
              <Services elm={arrayOfData[4]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;



