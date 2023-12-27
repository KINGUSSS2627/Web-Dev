import React  from "react";
import Card from './Card.jsx';
// import contact from '../contact.js';
// We can now just use that array element also

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            <Card name="Jack Sparrow" image="./images/img.jpg" tel="0123456789" email="jack.sparrow@gmail.com"/>
            <Card name="Narendra Modi" image="./images/img.jpg" tel="1234567890" email="narendra@india.com"/>
            <Card name="Ram Chandra" image="./images/img.jpg" tel="0000000000" email="ram@chandra.shree"/>
        </div>
    );
}

export default App;