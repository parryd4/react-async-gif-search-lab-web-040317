import React, { Component } from 'react'

const GifList = props =>
  <ul>
    { props.list.map((gif) => <li key={gif.id}><img src={gif.images.fixed_height.url}/></li> )}
  </ul>

export default GifList
