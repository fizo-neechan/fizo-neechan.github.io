import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {

    const services = [
        {
            name: "Website Design",
            serviceBenefits: ['User-Friendly Layout', 'Responsive Design', 'Color Scheme', 'Typography', 'High Quality Images', 'SEO-Friendly Navigation', 'Mobile-Friendly Design'],
            rate: '$5/hour'
        },
        {
            name: "Website Design",
            serviceBenefits: ['User-Friendly Layout', 'Responsive Design', 'Color Scheme', 'Typography', 'High Quality Images', 'SEO-Friendly Navigation', 'Mobile-Friendly Design'],
            rate: '$5/hour'
        },
        {
            name: "Website Design",
            serviceBenefits: ['User-Friendly Layout', 'Responsive Design', 'Color Scheme', 'Typography', 'High Quality Images', 'SEO-Friendly Navigation', 'Mobile-Friendly Design'],
            rate: '$5/hour'
        }
    ]



  return (
    <section id="services">
        <div className="section-content">
            <div>
                <div>
                    <h2 className="inset">&lt;services/&gt;</h2>
                </div>

                <div>
                    <p>
                        <strong>Have a look at the services I provide.</strong><br/>
                        Pick whichever plan suits you best!
                    </p>
                </div>

                <div className="services">
                    {services.map(function(service){
                        return (
                            <ServiceCard service={service.name} serviceBenefits={service.serviceBenefits} rate={service.rate} />
                        )
                    })}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
