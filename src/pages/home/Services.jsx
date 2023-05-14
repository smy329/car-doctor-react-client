import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://car-doctor-server-three-kappa.vercel.app/services')
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5 mb-5">
        <h3 className=" text-2xl font-bold text-orange-600">Services</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="w-3/5 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
