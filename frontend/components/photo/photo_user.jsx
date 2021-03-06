import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PhotoIndexItem from './photo_index_item';

class PhotoUser extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUserPhotos(this.props.currentUser.id);

  }

  render() {
    const {photos} = this.props;
    return (
      <div className="myphotos">
        <div className="manyPhotos">
        <h1 className="banner">My Photos</h1>

        <ul className="photoColumn">
          {photos.map( (photo, idx) => <PhotoIndexItem key={idx} photo={photo} />)}
        </ul>
        </div>
      </div>
    );
  }
}

export default PhotoUser;
