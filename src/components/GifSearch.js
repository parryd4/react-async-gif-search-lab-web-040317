import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(){
    super()
    this.state = {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({ query: event.target.value })
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.submitQuery(this.state.query)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Search Query:
            <input type="text" value={this.state.query} onChange={this.handleChange}/>
          </label>
         <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
