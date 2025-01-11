import React from 'react';
import AlarmOnIcon from '@mui/icons-material/AlarmOn'; // For IDLE
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // For Wrapup
import CallEndIcon from '@mui/icons-material/CallEnd'; // For Incall
import PauseIcon from '@mui/icons-material/Pause';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'; 
import TimerIcon from '@mui/icons-material/Timer';
import BreakIcon from '@mui/icons-material/FreeBreakfast';
import './Card.css';


const StatusCard = () => {
  return (
    <div className="cardX">
      <div className="statusContainer">
        <div className="socialContainer containerOne">
          <AlarmOnIcon className="socialSvg" />
        </div>
        <p>Total: 28</p>
      </div>
      <div className="statusContainer">
        <div className="socialContainer containerTwo">
          <PauseIcon className="socialSvg" />
        </div>
        <p>IDLE: 8</p>
      </div>
      <div className="statusContainer">
        <div className="socialContainer containerThree">
          <CallEndIcon className="socialSvg" />
        </div>
        <p>Wrapup: 6</p>
      </div>
      <div className="statusContainer">
        <div className="socialContainer containerFour">
          <PhoneInTalkIcon className="socialSvg" />
        </div>
        <p>Incall: 10</p>
      </div>
      <div className="statusContainer">
        <div className="socialContainer containerFour">
          <BreakIcon className="socialSvg" />
        </div>
        <p>Break: 4</p>
      </div>
    </div>
  );
};

export default StatusCard;
