import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='Chair' class=" sm:w-96 rounded-lg shadow-2xl" />
                <div className=' lg:mr-20'>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;