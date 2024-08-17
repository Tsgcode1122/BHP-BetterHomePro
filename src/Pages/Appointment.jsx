import React, { useEffect } from "react";
import PageHeading from "../FixedComponent/PageHeading";
import backgroundImage from "../assets/Images/newIm.jpg";
import AppointmentContent from "../Component/AppointmentContent";
const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <AppointmentContent />
    </>
  );
};

export default Appointment;
