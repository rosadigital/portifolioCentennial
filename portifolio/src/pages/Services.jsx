import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Services.css';

const services = [
  { 
    title: "Custom Web Development",
    description: "Building tailored web applications using modern technologies such as Django, Flask, and React, ensuring scalability, security, and optimal performance."
  },
  { 
    title: "Web App Prototype", 
    description: "Creating high-quality mobile applications with responsive design, ensuring cross-platform compatibility and seamless user experience."
  },
  { 
    title: "Backend Development",
    description: "Using Django, Flask, Node.js, expertise in building and maintaining robust REST APIs, managing database interactions, and developing scalable microservices architectures."
  },
  { 
    title: "Cloud Solutions (AWS, Azure)", 
    description: "Proficient in cloud infrastructure services, including AWS Lambda, API Gateway, Compute, S3, and DynamoDB for cost-effective and scalable cloud-based solutions."
  },
  { 
    title: "AI & Machine Learning", 
    description: "Implementing AI and machine learning solutions, fine-tuning models for data analytics, document querying, and predictive analytics using tools like BERT, LLaMA, and Langchain."
  },
  { 
    title: "API Development & Integration", 
    description: "Designing, developing, and integrating RESTful APIs, ensuring seamless communication between systems, with expertise in Django REST and Flask API."
  }
];

const Services = () => {
  return (
    <>
      <NavBar />
      <Header title={'My Core Services'} subtitle={'I offer services to help businesses leverage cutting-edge technologies for digital transformation.'}/>
      <section className="container-services">
        <div className="grid-container-services">
          {services.map((service, index) => (
            <div className="service-card-services" key={index}>
              <h3 className="service-title-services">{service.title}</h3>
              <p className="service-description-services">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer /> 

    </>
  );
};

export default Services;
