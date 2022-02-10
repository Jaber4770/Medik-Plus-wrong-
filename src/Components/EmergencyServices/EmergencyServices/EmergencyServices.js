import React from 'react';
import Ambulance from '../AmbulanceServices/Ambulance';
import EmergencyBanner from '../EmergencyBanner/EmergencyBanner';
import Helicopter from '../HelicopterServices/Helicopter';

const EmergencyServices = () => {
    return (
        <div>
            <EmergencyBanner></EmergencyBanner>
            <Ambulance></Ambulance>
            <Helicopter></Helicopter>
        </div>
    );
};

export default EmergencyServices;