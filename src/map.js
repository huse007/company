import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const API_key =  "AIzaSyCfg3VwFRzJmrhqPpdbzKALO6pLIgA9wZc";
const AnyReactComponent = ({ text }) => <div style={{color:'#000080',fontSize:'26px',fontFamily:'Carter One',bottom:'0',top:'-60'}}><i className="material-icons">place</i>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 59.9286, lng: 10.7492 },
    zoom: 16
  };
  render() {
    return (
      <div className='google-map' style={{width:'100%',height:'100%'}}>
        <GoogleMapReact bootstrapURLKeys={{key:API_key}} defaultCenter={ this.props.center } defaultZoom={ this.props.zoom }>
          <AnyReactComponent lat={ 59.9286 } lng={ 10.7492 } text={ 'Website Development' }/>
        </GoogleMapReact>
      </div>
    );
  }
}
