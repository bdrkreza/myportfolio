import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ data }) => {
    const { icon, title, desc } = data;
    return (
        <>
            <div class="services_container ">
                <div class="card" >
                    <div class="imgBx">
                        <img src={icon} alt="" />
                    </div>
                    <div class="contentBx">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;