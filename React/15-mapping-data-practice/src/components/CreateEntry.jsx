import React from 'react'
import Emoji from './Emoji.jsx';

function CreateEntry(props) {
  return <Emoji
    key = {props.id}
    name = {props.name}
    emoji = {props.emoji}
    meaning = {props.meaning}
  />
}


export default CreateEntry;