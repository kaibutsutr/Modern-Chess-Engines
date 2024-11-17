function ProfileCard({title, image, text, link}) {
    return (


<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
    <a href={link} target="_blank" rel="noreferrer"> <img src={image} alt="Placeholder image" /></a>.
      
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
        <a href={link} target="_blank" rel="noreferrer" ><img src={image} alt="Placeholder image" width="1280px" height="960 px"/></a>.
          
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{title}</p>
        
      </div>
    </div>

    <div className="content">
      {text} <a href={link} target="_blank" rel="noreferrer">{title}</a>.
      
      <br/>
      <time datetime="2023-1-1">11:09 PM - 1 Jan 2023</time>
    </div>
  </div>
</div>    






);
    
}
export default ProfileCard;