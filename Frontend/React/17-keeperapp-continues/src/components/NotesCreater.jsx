import React from "react";
import Note from "./Note";

function  CreateNotes(props) {
    return <Note
    key = {props.key}
    title = {props.title}
    content = {props.content}
/>
}

export default CreateNotes;