import {useState, useEffect} from 'react';
import Assist from '../stat-icons/assist.svg';
import Demolish from '../stat-icons/demolition.svg';
import EpicSave from '../stat-icons/epic-save.svg';
import Demolition from '../stat-icons/extermination.svg';
import Goal from '../stat-icons/goal.svg';
import HatTrick from '../stat-icons/hat-trick.svg';
import Playmaker from '../stat-icons/playmaker.svg';
import Save from '../stat-icons/save.svg';
import Savior from '../stat-icons/savior.svg';
import Shot from '../stat-icons/shot-on-goal.svg';

const eventSVG = (event) => {
  switch(event) {
    case 'Goal':
        return Goal;
    case 'Assist':
        return Assist;
    case 'Save':
        return Save;
    case 'Shot':
        return Shot;
    case 'Demolish':
        return Demolish;
    case 'Demolition':
        return Demolition;
    case 'HatTrick':
        return HatTrick;
    case 'Playmaker':
        return Playmaker;
    case 'EpicSave':
        return EpicSave;
    case 'Savior':
        return Savior;
}
}

const OrngEventCard = (props) => {
    const [showComponent, setShowComponent] = useState(false); 
    const [transitionOut, setTransitionOut] = useState(false);   
    const { statfeed } = props;
    
    useEffect(() => {
      let timer = setTimeout(() => {
        setShowComponent(true)
      }, 50);
      let timer2 = setTimeout(() => {
        //setShowComponent(false);
        setTransitionOut(true);
      }, 5000);
      return () => clearTimeout(timer), () => clearTimeout(timer2);
    }, []);  

    return (
      <img alt ='' className={`filter-white backgroundorng orngeventcard ${showComponent && 'visible'} ${transitionOut && 'out'}`} src={eventSVG(statfeed)} />
    )
}

export default OrngEventCard;