import React from 'react'

const ServiceCard = (props) => {

  return (
    <div className="service-card bevel-shadow">
        <div className="card-head bevel-shadow">
            <div><h3>{props.service}</h3></div>
        </div>
        <div className="card-body">
            <ul>
                {props.serviceBenefits.map((serviceBenefit) => (
                    <li>{serviceBenefit}</li>
                ))} 
            </ul>
        </div>
        <div className="card-pricing">
            <h3>
                {props.rate}
            </h3>
        </div>
    </div>
  )
}

export default ServiceCard
