import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'20%'}}>{source}</span>
          <img src={imageUrl ? imageUrl : "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary"> By {author? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
