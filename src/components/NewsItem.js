import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description,Imageurl,newsurl} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!Imageurl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Google_Search-647x363.jpeg?kplJ7Yltaix18Sz.OWq43yHiCdsW0TMN":Imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem