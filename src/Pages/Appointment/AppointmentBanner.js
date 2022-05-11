import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {

    const [date, setDate] = useState(new Date())
    let displeyDate = <p>Please pick a day.</p>;
    if (date) {
        displeyDate = <p>You picked {format(date, 'PP')}.</p>;
      }

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='Chair' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    footer={displeyDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;