import React, { Component } from "react";
import { Calendar, momentLocalizer, } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment)


class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        events: [
            {
            }],
    };
};

convertDate = (date) => {
    return moment.utc(date).toDate();
}

componentDidMount() {
    fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(console.log(response.json))
};

render() {
    return (
      <div>
      <div style={{ height: 700 }}>
        <Calendar
          localizer={localizer}
          events={this.state.events}
          step={30}
          defaultView='week'
          views={['month','week','day']}
          defaultDate={new Date()}
        />
      </div>
    </div>
    );
}
}


export default MyCalendar;