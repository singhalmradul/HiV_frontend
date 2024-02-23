import { ReactComponent as Like0 } from '../../assets/like/0.svg';
import { ReactComponent as Like1 } from '../../assets/like/1.svg';
import { ReactComponent as Like2 } from '../../assets/like/2.svg';
import { ReactComponent as Like3 } from '../../assets/like/3.svg';
import { ReactComponent as Like4 } from '../../assets/like/4.svg';
import { ReactComponent as Like5 } from '../../assets/like/5.svg';
import { ReactComponent as Like6 } from '../../assets/like/6.svg';
import { ReactComponent as Like7 } from '../../assets/like/7.svg';
import { ReactComponent as Like8 } from '../../assets/like/8.svg';
import { ReactComponent as Like9 } from '../../assets/like/9.svg';
import { ReactComponent as Like10 } from '../../assets/like/10.svg';
import { ReactComponent as Like11 } from '../../assets/like/11.svg';
import { ReactComponent as Like12 } from '../../assets/like/12.svg';
import { ReactComponent as Like13 } from '../../assets/like/13.svg';
import { ReactComponent as Like14 } from '../../assets/like/14.svg';
import { ReactComponent as Like15 } from '../../assets/like/15.svg';
import { ReactComponent as Like16 } from '../../assets/like/16.svg';
import { ReactComponent as Like17 } from '../../assets/like/17.svg';
import { ReactComponent as Like18 } from '../../assets/like/18.svg';
import { ReactComponent as Like19 } from '../../assets/like/19.svg';
import { ReactComponent as Like20 } from '../../assets/like/20.svg';
import { ReactComponent as Like21 } from '../../assets/like/21.svg';
import { ReactComponent as Like22 } from '../../assets/like/22.svg';
import { ReactComponent as Like23 } from '../../assets/like/23.svg';

import { MouseEventHandler, SVGProps, useEffect, useState } from 'react';


const svgs = [
  Like0,
  Like1,
  Like2,
  Like3,
  Like4,
  Like5,
  Like6,
  Like7,
  Like8,
  Like9,
  Like10,
  Like11,
  Like12,
  Like13,
  Like14,
  Like15,
  Like16,
  Like17,
  Like18,
  Like19,
  Like20,
  Like21,
  Like22,
  Like23,
];
type LikeIconProps = {
  isLiked: boolean;
  onClick: MouseEventHandler;
};

const LikeIcon = ({ isLiked, onClick }: LikeIconProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isLiked && phase < 23) {
      setPhase(phase + 1);
    }
    if (!isLiked && phase > 0) {
      setPhase(phase - 1);
    }
  }, [isLiked, phase]);

  const Icon = svgs[phase];
  return <Icon onClick={onClick} />;
};

export default LikeIcon;
