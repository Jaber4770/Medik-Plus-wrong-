import React from 'react';
import Ambulance from '../AmbulanceServices/Ambulance';
import Helicopter from '../HelicopterServices/Helicopter';

const EmergencyServices = () => {
    return (
        <div>
            <Ambulance></Ambulance>
            <Helicopter></Helicopter>
        </div>
    );
};

export default EmergencyServices;