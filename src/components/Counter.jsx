import React from 'react'
import "../styles/Counter.css"

const counterData = [
    {
        number: "5K",
        text:"Clients"
    },
    {
        number: 350,
        text:"running"
    },
    {
        number: 900,
        text:"Projects Completed"
    }
]

const Counter = () => {
  return (
    <section className='counter' id='projects'>
        <div className="container">
            <div className="content__wrapper">
                {
                    counterData.map((item,index) => (
                    <div className="counter__item" key={index}>
                    <h3 className="counter__number">{item.number}+</h3>
                    <h4 className="counter__title">{item.text}</h4>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Counter