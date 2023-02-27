import React from 'react';
import Card from 'react-bootstrap/Card';


const Gallery = ({data}) => {
    return (
        <div className="row">
        {data.map((image) =>
         <div className="col-sm-3">
            <div key={image.id}>
               
                <Card style={{ width: '18rem', margin:"10px" }} className="card">
      <Card.Img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}  height="200" width="200"  alt={image.title}/>
      <Card.Body>
        <Card.Title className='item-title'>{image.title}</Card.Title>
        <Card.Text className='px-4'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card> 
                

                </div>
        </div>)}
        
        </div>
    )
}

export default Gallery;