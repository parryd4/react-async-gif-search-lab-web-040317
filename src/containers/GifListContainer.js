import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
    this.fetchGifs = this.fetchGifs.bind(this)
  }

  fetchGifs(query = "cats"){
    console.log(query)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=3`)
      .then(response => response.json() )
      //.catch(console.log)
      .then(gifs => this.setState({gifs: gifs.data.slice(0,3)}))
  }
  componentDidMount(){
    this.fetchGifs()
    //  .then(temp => console.log(temp.data.slice(0,3)))
  }
  render(){
    return(
      <div>
        < GifSearch submitQuery={this.fetchGifs} />
        < GifList list={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
