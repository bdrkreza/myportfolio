import React from 'react';
import serviceData from '../../../assets/Data/serviceData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'
const Services = () => {
    return (
        <div >
            <div className="text-center mt-5">
                <h5>What i will do for you</h5>
                <h2 class="contain_title">
                    Exclusive
                    <span>Services</span>
                </h2>
            </div>
            <div className='row services_section '>
                {
                    serviceData.map((data) => <div className='col-lg-3 col-md-4 col-sm-6 mb-3'><ServiceCard data={data} /></div>)
                }
            </div>
        </div>
    );
};

export default Services;