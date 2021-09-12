import Carousel from 'react-elastic-carousel';
import React from 'react'
import Data from './cars.json'

class Haider extends React.Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
      { width: 850, itemsToShow: 4 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ]
  }
  render() {
    return (
      <Carousel breakPoints={this.breakPoints}>
        {Data.map( post =>{
          return(
            <div className="m-3">
              <p class="card-text">{post.bodyType}</p>
              <div className="d-flex flex-xl-row flex-md-column">
                <h5 class="card-title me-2">{post.modelName}</h5>
                <p class="card-text">{post.modelType}</p>
              </div>
              <img src={post.imageUrl} class="card-img-top" alt="..."/>
            </div>
          )})
        }
      </Carousel>
    )
  }
}
export default Haider