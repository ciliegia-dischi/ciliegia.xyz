import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function Event(props) {
  return (
    <div className="day-and-activity">
      <div className="day">
        <h1>{props.day}</h1>
        <p>{props.month}</p>
      </div>
      <div className="activity">
        <h2>{props.title}</h2>
        <span className="sub-text">{props.venue}</span>
      </div>
      <button>View</button>
    </div>
  );
}

export default function Calendar() {
  return (
    <div className="weekly-schedule">
      <div className="header-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faCalendar} className="nav-icon" />
        </div>
        <h1>Prossimi eventi</h1>
      </div>
      <div className="calendar">

        <Event day="18"
               month="feb"
               title="Serata bellissima"
               venue="Un posto"
        />

        <Event day="29"
               month="feb"
               title="Esempio concerto bisestile"
               venue="Qualsiasi anno bisestile"
        />

        <Event day="13"
               month="mar"
               title="Altro gruppo"
               venue="Posto diverso"
        />

        <Event day="2"
               month="apr"
               title="Tizio a + tizio b + altro tizio"
               venue="Dovunque"
        />

      </div>
    </div>
  );
}
