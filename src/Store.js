import React, { Component, createContext } from 'react';
import axios from "axios";
const Context = createContext()
const {Provider} = Context;


const API_KEY = '2e3cf3b657fc4636a94adbf21359d3d1'
const world_API = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`
const us_API = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`
const sports_API = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`
const tech_API = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`


class Store extends Component{
  constructor(props){
    super(props)
    this.state = {
      world_news:[],
      us_news:[],
      sports_news:[],
      tech_news:[],
    }
  }

  componentDidMount(){
    // axios.get(world_API)
    // .then(res =>{
    //   // console.log(res.data);
    //   // this.setState({world_news: res.data.articles})
    // })

    // axios.get(us_API)
    // .then(res =>{
    //   // console.log(res.data);
    //   // this.setState({us_news: res.data.articles})
    // })

    // axios.get(sports_API)
    // .then(res =>{
    //   // console.log(res.data);
    //   // this.setState({sports_news: res.data.articles})
    // })

    // axios.get(tech_API)
    // .then(res =>{
    //   // console.log(res.data);
    //   // this.setState({tech_news: res.data.articles})
    // })
  }

  render =()=> 
    <Provider value={{...this.state}}>
      {this.props.children}
    </Provider>
}

// export default Store;
export { Store, Context };
