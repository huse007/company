import React, { Component } from 'react';
import logo from './logo.svg';
import node from './node.png';
import css from './css.png';
import python from './python-logo.png';
import tux from './tux.png';
import Map from './map.js';
import pic from './a2.jpg';
import pic2 from './a4.jpg';
import office from './office.jpg';
import server from './server.jpg';
import repair from './repair.jpg';
import webdev from './webdev.jpg';
import mobile from './mobile.jpg';
import './App.css';

const google=window.google;
var  map = null;

function init_map() {                                                            
        var latlng = new google.maps.LatLng(59.9286, 10.7492);                   
        map = new google.maps.Map(document.getElementById('map'), {              
            center: latlng,                                                      
            zoom: 18                                                             
        });                                                                      
        var marker = new google.maps.Marker({                                    
            position:latlng,                                                     
            map:map                                                              
        });                                                                      
}  

class InnerContainer extends Component {
    constructor(props){
	super(props);
    }
    renderHome(){
	return(<div className="innercontainer">
	       <div className="containerFluid">
	       <div className="row">
	       <img src={office} alt="" style={{width:'100%',height:'100%'}}/>
	       </div>
	       <div className="row" style={{padding:'4%',fontFamily:'Merriweather'}}>
	       <div className="col-sm-1">
	       </div>
	       <div className="col-sm-7">
	       Website is a webpage developer company for small and medium sized businesses.
	       We develope front-end and back-end solutions.
	       MySQL database is integrated in our server solutions and we offer clean UIs,
	       such that companies themselves can easily update their page.
	       </div>
	       <div className="col-sm-2">
	       <button type="button" className="btn btn-outline-secondary text-dark">Showcase</button>
	       </div>
	       <div className="col-sm-2">
	       <button type="button" className="btn btn-outline-secondary">Solutions</button>

	       </div>
	       </div>
	       </div>
	       </div>
	       
	);
    }
    renderTeam() {
	return(<div className="innercontainer">
	       <div className="containerFluid">
	       <div className="row">
	       <div className="col-sm-7">
	       <div className="row" style={{padding:'5%'}}>
	       <div className="col-sm-6">
	       <img alt="" className="personimage"style={{borderRadius:'50%',height:'25vh',width:'12.5vw',padding:'0%'}}src={pic}/>	       
	       </div>
	       <div className="col-sm-6">
	       <b>Developer</b><br/>
	       <p className="persontext">
	       Anders Huse is a 34 year old physicist and programmer.
	       Responsible for technical issues, server development and big data algorithms.
	       </p>
	       </div>
	       </div>
	       <div className="row" style={{padding:'5%'}}>
	       <div className="col-sm-6">
	       <img alt="" className="personimage"style={{borderRadius:'50%',height:'25vh',width:'12.5vw',padding:'0%'}}src={pic2}/>
	       </div>
	       <div className="col-sm-6">
	       <b>Developer / Economy / Sales</b><br/>
	       <p className="persontext">
	       Lars Andreas Jorkjend is a 34 year old economist.
	       Responsible for customer relations, CSS-styling, databases and economy.
	       <br/><br/>Contact: 91 16 35 52
	       </p>
	       </div>
	       </div>
	       </div>
	       <div className="col-sm-5" style={{padding:'0'}}>
	       <img alt="" src={server} style={{width:'100%',height:'100%',padding:'0px',margin:'0px'}}/>
	       </div>
	       </div>
	       </div>
	       </div>
	      
	      );
    }
    renderProducts(){
	return(<div className="innercontainer">
	       <div className="containerFluid">
	       <div className="row" style={{padding:'5% 5% 5% 5%'}}>
	       {/*box 1 1*/}
	       <div className="col-sm-3">
	       <h4>Server solutions</h4>
	       <ul>
	       <li>Web Hosting</li>
	       <li>DNS Servers</li>
	       <li>Server Systems</li>
	       <li>Technical Support</li>
	       </ul>
	       </div>
	       <div className="col-sm-3">
	       <img alt="" src={server} style={{width:'100%',height:'100%',padding:'0'}}/>
	       </div>
	       {/*box 1 2*/}	       
	       <div className="col-sm-3">
	       <h4>Computer Service</h4>
	       <ul>
	       <li>Repairing Computers</li>
	       <li>Backup Service</li>
	       <li>Protection</li>
	       <li>Technical Support</li>
	       </ul>
	       </div>
	       <div className="col-sm-3">
	       <img alt="" src={repair} style={{width:'100%',height:'100%',padding:'0'}}/>
	       </div>

	       </div>{/* row 1 */}
	       
	       <div className="row" style={{padding:'5% 5% 5% 5%'}}>
	       {/*box 2 1*/}
	       <div className="col-sm-3">
	       <h4>Web pages</h4>
	       <ul>
	       <li>Clean Websites</li>
	       <li>Database integration</li>
	       <li>Consulting</li>
	       <li>Technical Support</li>
	       </ul>
	       </div>
	       <div className="col-sm-3">
	       <img alt="" src={webdev} style={{width:'100%',height:'100%',padding:'0'}}/>
	       </div>
	       {/*box 2 2*/}	       
	       <div className="col-sm-3">
	       <h4>Mobile Apps</h4>
	       <ul>
	       <li>Web Hosting</li>
	       <li>DNS Servers</li>
	       <li>Server Systems</li>
	       <li>Technical Support</li>
	       </ul>
	       </div>
	       <div className="col-sm-3">
	       <img alt="" src={mobile} style={{width:'100%',height:'100%',padding:'0'}}/>
	       </div>
	       
	       </div>{/* row 2 */}
	       </div>
	       </div>
	);
    }
    renderAbout(){
	//init_map();	
	return(<div className="innercontainer">
	       <div className="containerFluid">
	       <div className="row" style={{padding:'5% 5% 5% 5%'}}>

	       <div className="col-sm-7">
	       <div className="container">                                       
               <h4>Contact Information</h4>                                                   
               <table className="table">                                         
               <tbody>                                                           
               <tr>                                                              
               <td>Customer service</td>                                               
               <td>+47 92 16 35 57</td>                                                       
               <td>service@website-dev.no</td>                                                      
               </tr>                                                             
               <tr>                                                              
               <td>Sales</td>                                                     
               <td>+47 93 16 35 57</td>                                                       
               <td>lars@website-dev.no</td>                                                      
               </tr>
	       <tr>                                                              
               <td>Technical Support</td>                                                     
               <td>+47 98 59 60 23</td>                                                       
               <td>anders@website-dev.no</td>                                                      
               </tr>
	       <tr>                                                              
               <td>Economy</td>                                                     
               <td>+47 94 16 38 57</td>                                                       
               <td>economy@website-dev.no</td>                                                      
               </tr>
	       </tbody>                                                          
               </table>                                                          
	       <h4>Certification</h4>
	       <img src={css} alt="" style={{height:'20%',width:'20%',padding:'2%'}} />
	       <img src={logo} alt="" style={{height:'20%',width:'20%'}} />
	       <img src={node} alt="" style={{height:'20%',width:'20%'}} />

	       <img src={python} alt="" style={{height:'20%',width:'20%',padding:'3%'}} />
	       <img src={tux} alt="" style={{height:'20%',width:'20%',padding:'3%'}} />
               </div>

	       </div>
	       <div className="col-sm-5">
	       
	       <h4>Location</h4>                                                   
	       <div style={{height:'50vh',width:'100%'}}>
	       <Map style={{height:'100%',width:'100%'}}/>
	       </div>
	       </div>
	       </div>
	       </div>
	       </div>
	);
	}

    render(){
	if(this.props.name==="Team") {
	    return (this.renderTeam());
	}
	if(this.props.name==="Home") {
	    return (this.renderHome());
	}
	if(this.props.name==="Products") {
	    return (this.renderProducts());
	}
	if(this.props.name==="About") {
	    return (this.renderAbout());
	}
	else return(<div></div>);
    }
}
class Content extends Component {
    constructor(props){
	super(props);
    }
    render(){
	return(<div className="smoothScroll">
	       <div id={this.props.name}className="containerFluid contentcontainer">
	       <div className="row">
	       <div className="content">

	       <InnerContainer name={this.props.name}/>
	       </div>
	       </div>
	       </div>
	       </div>
	      );
    }
}
class HeaderList extends Component {
    constructor(props){
	super(props);
    }
    render(){
	return(
		<div className="headeritems"><a className="headeritem" href={'#'+this.props.name}>{this.props.name}</a></div>
	);
    }
}
class HeaderBar extends Component {
    constructor(props){
	super(props);
    }
    render() {
	return(<div style={{position:'fixed',zIndex:'1000',width:'100vw'}}>
	       <div className="containerFluid headerbar"> 
	       <div className="row">
	       <div className="col-sm-4">
	       <h1>Website Develop</h1>
	       </div>
	       <div className="col-sm-3" style={{padding:'20px'}}>
	       <input type="text" name="search\
" placeholder="Search.."></input>
	       </div>
	       <div className="col-sm-1">
	       <HeaderList name="Home"/>
	       </div>
	       <div className="col-sm-1">
	       <HeaderList name="Products"/>
	       </div>
	       <div className="col-sm-1">
	       <HeaderList name="Team"/>
	       </div>
	       <div className="col-sm-1">
	       <HeaderList name="About"/>
	       </div>
	       <div className="col-sm-1">
	       
	       </div>
	       </div>
	       </div>
	       </div>
	);
    }
}
class App extends Component {
  render() {
    return (
	    <div className="totalcontainer">
	    <HeaderBar/>
	    <Content id="home" name="Home"/>
	    <Content id="products" name="Products"/>
	    <Content id="team" name="Team"/>
	    <Content id="about" name="About"/>
	    <div id="map" style={{width:'100px',height:'100px'}}>
	    
	    </div>
	    </div>
    );
  }
}

export default App;
