import React from 'react';

const Photo = (props) => (
  <li>
    {/* grabs the data from each photo object returned from flickr and dynamically fills in those properties in the url */ }
    <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""/>
  </li>
);

export default Photo;
