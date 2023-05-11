import React, { useState } from 'react'
import './Card.css'
function Card() {
  const [toggle, setToggle] = useState(false)

  const products = [
    
    { name: '', price: 'R329,999', image: 'https://media.wired.com/photos/63b8d0a771c6b526845f15a6/16:9/w_2400,h_1350,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg' },
    { name: '', price: 'R588,999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdrprvUA-bDFZ4EIViZakccuXi0PsSKgm1ptnEUjeFscKz6ReRlntlziRg5FIO2PDU0Y&usqp=CAU' },
    { name: '', price: 'R1.5 Million', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg?tr=h-48' },
    { name: '', price: 'R2 Billion', image: 'https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg' },
    { name: '', price: 'R15 Million', image: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-d37f5243f6ae21dcfb1fbf28dfe261f5.jpg' },
    { name: '', price: 'R6 Billion', image: 'https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg' },
    { name: '', price: 'R30 Million', image: 'https://helios-i.mashable.com/imagery/articles/05kqKQTtbuYrvq3ZNWtRnbE/hero-image.fill.size_1200x1200.v1672920093.jpg' },
    { name: '', price: 'R4,5 Billion', image: 'https://media.architecturaldigest.com/photos/60f99c2c0adf8cd1e3beca71/16:9/w_1935,h_1088,c_limit/Now%20You%20Drive%201.jpg' },
  ]


  return (
    <div>
      <div className="grid-container">
        {
          products.map(product => {
            return (
              <div className="card" >
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text"><del>{product.price}</del></p>
                  <a href="#" className="btn btn-primary">Go Cash</a>
                </div>
              </div>
            )
          })

        }

      </div>
    </div>

  )
}
export default Card;