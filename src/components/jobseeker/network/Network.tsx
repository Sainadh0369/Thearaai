import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetworkHome from './NetworkHome';
import Mentorship from './Mentorship';
import Events from './Events';
import Connections from './Connections';

const Network = () => {
  return (
    <Routes>
      <Route index element={<NetworkHome />} />
      <Route path="mentorship" element={<Mentorship />} />
      <Route path="events" element={<Events />} />
      <Route path="connections" element={<Connections />} />
    </Routes>
  );
};

export default Network;