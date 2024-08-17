import t1 from "../assets/Images/vids.jpg";
import t2 from "../assets/Images/home5.jpg";
import t3 from "../assets/Images/home2.jpg";
import t4 from "../assets/Images/cart.jpg";
import t5 from "../assets/Images/home1.jpg";
import hvac1 from "../assets/Images/t2.jpg";
import hvac2 from "../assets/Images/hvac2.jpg";
import hvac3 from "../assets/Images/hvac3.jpg";
import hvac4 from "../assets/Images/hvac4.jpg";
import air1 from "../assets/Images/t5.jpg";
import air2 from "../assets/Images/t7.jpg";
import air3 from "../assets/Images/air3.jpg";
import air4 from "../assets/Images/air1.jpg";
import chim1 from "../assets/Images/t4.jpg";
import chim2 from "../assets/Images/t3.jpg";
import chim3 from "../assets/Images/chim3.jpg";
import chim4 from "../assets/Images/chim4.jpg";
import cart1 from "../assets/Images/t8.jpg";
import cart2 from "../assets/Images/cart2.jpg";
import cart3 from "../assets/Images/cart3.jpg";
import cart4 from "../assets/Images/cart4.jpg";
import imp1 from "../assets/Images/t6.jpg";
import imp2 from "../assets/Images/t7.jpg";
import imp3 from "../assets/Images/cart4.jpg";
import imp4 from "../assets/Images/cart4.jpg";

export const serviceData = [
  {
    id: 1,
    serviceName: "Chimney Repair",
    serviceImage1: chim1,
    serviceImage2: chim2,
    serviceImage3: chim3,
    serviceImage4: chim4,
    backgroundImage: t3,
    serviceDescription:
      "Our chimney repair services are designed to address a wide range of issues that can compromise the safety and efficiency of your chimney. Whether it’s cracks in the masonry, a damaged flue, or a deteriorating chimney cap, our skilled technicians are equipped to restore your chimney to optimal condition. Regular maintenance and timely repairs are crucial in preventing more serious problems, such as chimney fires or structural damage, ensuring your home remains safe and your chimney functional.",
    benefits: [
      "Prevention of dangerous chimney fires",
      "Improved structural integrity of your chimney",
      "Enhanced overall home safety",
      "Increased lifespan of your chimney with proper repairs",
      "Professional and reliable service from experienced technicians",
    ],
    bookServiceUrl: "/appointment",
    getQuoteUrl: "/contact",
  },
  {
    id: 2,
    serviceName: "HVAC Services",
    serviceImage1: hvac1,
    serviceImage2: hvac2,
    serviceImage3: hvac3,
    serviceImage4: hvac4,
    backgroundImage: t1,
    serviceDescription:
      "Our HVAC Services offer comprehensive solutions for all your heating, ventilation, and air conditioning needs. We specialize in the installation of state-of-the-art HVAC systems, ensuring optimal performance and energy efficiency. Our maintenance services are designed to keep your system running smoothly year-round, preventing costly breakdowns and extending the life of your equipment. Should you encounter any issues, our expert technicians are equipped to handle all types of repairs swiftly and effectively, restoring comfort to your home.",
    benefits: [
      "Improved air quality through advanced filtration systems",
      "Increased energy efficiency, reducing your environmental impact",
      "Extended lifespan of HVAC systems with regular maintenance",
      "Lower energy bills due to optimized system performance",
      "Service from certified and experienced HVAC technicians",
    ],
    bookServiceUrl: "/appointment",
    getQuoteUrl: "/contact",
  },
  {
    id: 3,
    serviceName: "Air Duct Cleaning",
    serviceImage1: air1,
    serviceImage2: air2,
    serviceImage3: air3,
    serviceImage4: air4,
    backgroundImage: t2,
    serviceDescription:
      "Our professional air duct cleaning services are designed to remove dust, allergens, and other contaminants from your home's ventilation system, ensuring a cleaner and healthier indoor environment. Over time, ducts can accumulate significant amounts of debris, which not only affects air quality but also hampers the efficiency of your HVAC system. Our thorough cleaning process will help improve air circulation, reduce energy costs, and minimize the presence of airborne pollutants, contributing to a healthier living space.",
    benefits: [
      "Significantly healthier indoor air quality",
      "Reduction of allergens and harmful pollutants",
      "Enhanced efficiency of your HVAC system",
      "Lower energy costs due to improved airflow",
      "Service from certified and experienced duct cleaning technicians",
    ],
    bookServiceUrl: "/appointment",
    getQuoteUrl: "/contact",
  },

  {
    id: 4,
    serviceName: "Carpet Cleaning",
    serviceImage1: cart1,
    serviceImage2: cart2,
    serviceImage3: cart3,
    serviceImage4: cart4,
    backgroundImage: t4,
    serviceDescription:
      "Our carpet cleaning services are designed to rejuvenate your carpets by removing deep-seated dirt, stains, and allergens. Using advanced cleaning techniques and eco-friendly products, we ensure that your carpets not only look like new but also contribute to a healthier indoor environment. Whether you have pet stains, high-traffic areas, or simply want to freshen up your home, our team has the expertise to deliver exceptional results that extend the life of your carpets.",
    benefits: [
      "Deep cleaning that penetrates all layers of your carpet",
      "Effective removal of stubborn stains and odors",
      "Elimination of allergens and bacteria for a healthier home",
      "Prolonged lifespan of your carpets with regular cleaning",
      "Eco-friendly cleaning solutions safe for pets and children",
    ],
    bookServiceUrl: "/appointment",
    getQuoteUrl: "/contact",
  },
  {
    id: 5,
    serviceName: "Home Improvement",
    serviceImage1: imp1,
    serviceImage2: imp2,
    serviceImage3: imp3,
    serviceImage4: imp4,
    backgroundImage: t5,
    serviceDescription:
      "Our Home Improvement services are tailored to enhance the beauty, functionality, and value of your property. From kitchen and bathroom remodels to full-scale renovations, we handle every aspect of the project with meticulous attention to detail. We work closely with you to bring your vision to life, using high-quality materials and craftsmanship to ensure results that exceed expectations. Whether you're looking to modernize your home, increase its energy efficiency, or simply update its appearance, we offer comprehensive solutions to meet your needs.",
    benefits: [
      "Customized renovation solutions that reflect your style and needs",
      "Use of high-quality materials for lasting results",
      "Increased property value through thoughtful improvements",
      "Professional craftsmanship ensuring top-notch execution",
      "Wide range of services to address all areas of home improvement",
    ],
    bookServiceUrl: "/appointment",
    getQuoteUrl: "/contact",
  },
];
