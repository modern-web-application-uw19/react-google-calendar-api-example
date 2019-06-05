import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default class DoubleButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleItemClick = this.handleItemClick.bind(this);
      this.createEvent = this.createEvent.bind(this);
    }
    
    handleItemClick(event, name) {
      if (name === 'sign-in') {
        ApiCalendar.handleAuthClick();
      } else if (name === 'sign-out') {
        ApiCalendar.handleSignoutClick();
      }
    }

    createEvent() {
      const eventFromNow = {
        summary: "Poc Dev From Now",
        time: 480,
      };
   
    ApiCalendar.createEventFromNow(eventFromNow)
      .then((result) => {
        console.log(result);
      })
       .catch((error) => {
         console.log(error);
      });
    }

    render() {
      return (
        <div>
          <button
                onClick={(e) => this.handleItemClick(e, 'sign-in')}
            >
              sign-in
            </button>
            <button
                onClick={(e) => this.handleItemClick(e, 'sign-out')}
            >
              sign-out
            </button>
            <button onClick={this.createEvent}>
              Create Event
            </button>
        </div>
      );
    }
}