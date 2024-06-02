import { useState } from 'react';

import './timer.styles.css';
import { useAuth } from 'oidc-react';
import { setDisplayTimer } from '../../store/timer/timer.action';
import { useDispatch } from 'react-redux';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch();
  const { signOutRedirect } = useAuth();

  const onIncrementSeconds = () => {
    setSeconds((seconds + 1) % 60);
  };
  const onIncrementMinutes = () => {
    setMinutes((minutes + 1) % 60);
  };
  const onIncrementHours = () => {
    setHours((hours + 1) % 24);
  };
  const onDecrementSeconds = () => {
    setSeconds(seconds === 0 ? seconds + 59 : seconds - 1);
  };
  const onDecrementMinutes = () => {
    setMinutes(minutes === 0 ? minutes + 59 : minutes - 1);
  };
  const onDecrementHours = () => {
    setHours(hours === 0 ? hours + 23 : hours - 1);
  };
  const setTimer = () => {
    dispatch(setDisplayTimer(false));
    setTimeout(() => {
      if (window.confirm("time's up buddy!! do you want to log out?")) {
        signOutRedirect();
      } else {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
      dispatch(setDisplayTimer(true));
    }, ((hours * 60 + minutes) * 60 + seconds) * 1000);
  };

  return (
    <form className='timer-container'>
      how long do you plan to use HiV?
      <div className='timer'>
        <div className='hour'>
          <p onClick={onIncrementHours} className='modify'>
            &#9650;
          </p>
          <p>{hours < 10 ? '0' + hours : hours}</p>
          <p onClick={onDecrementHours} className='modify'>
            &#9660;
          </p>
        </div>
        hr
        <div className='min'>
          <p onClick={onIncrementMinutes} className='modify'>
            &#9650;
          </p>
          <p>{minutes < 10 ? '0' + minutes : minutes}</p>
          <p onClick={onDecrementMinutes} className='modify'>
            &#9660;
          </p>
        </div>
        min
        <div className='sec'>
          <span onClick={onIncrementSeconds} className='modify'>
            &#9650;
          </span>
          <p>{seconds < 10 ? '0' + seconds : seconds}</p>
          <p onClick={onDecrementSeconds} className='modify'>
            &#9660;
          </p>
        </div>
        sec
      </div>
      <label htmlFor='set-timer' onClick={setTimer} className='modify'>
        start
      </label>
    </form>
  );
};

export default Timer;
