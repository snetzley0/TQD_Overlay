// the prime testing grounds for events/statfeed

import {useContext, useEffect, useState, useRef} from 'react';
import SocketContext from '../contexts/SocketContext';
import '../App.css';
import EventCard from './BlueEventCard';

const BlueEvent = () => {
    const socket = useContext(SocketContext);
    const huh = new Array();
    const [events,setEvents] = useState([]);
    
    useEffect(() => {
      socket.on('update', (update) => {
        if (update.event === 'game:statfeed_event') { 
          if (update.data.event_name !== 'BicycleHit' || 'LowFive' || 'Demolition' || 'BackwardsGoal' || 'LongGoal' || 'BicycleGoal') { 
            huh.push(update.data.event_name);
            setEvents([
              ...huh,
            ])
            console.log(update.data.event_name)
          }
        }
        });
    },[]);

    return (
        <div className='fixit'>
          {events.map(event => 
            <span><EventCard statfeed={event}/></span>
          )}        
        </div>
    );
  }

export default BlueEvent;