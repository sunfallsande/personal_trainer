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
        fetch('https://customerrest.herokuapp.com/trainings')
            .then(response => response.json())
            .then(response => this.setState({
                events: response.map(appointments => ({
                    start: this.convertDate(appointments.start),
                    end: this.convertDate(appointments.end),
                    title: session.activity
                }))
            }))
    };

    render() {
        return (
            <div>
                <Calendar
                    localizer={localizer}
                    defaultView='week'
                    defaultDate={new Date()}
                    events={this.state.events}
                    resizable
                    style={{ height: "100vh" }}
                />
            </div>
        );
    }
}

export default MyCalendar;