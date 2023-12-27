import React  from "react";
import CreateCard from './CreateCard.jsx';
import contacts from '../contact.js';
// We can now just use that array element also
// Instead passing every single value to card we can instead use map and a function to create card for each element in the array

// While rendering any element using map or array we should have to  igve a unique key property to every custom here we use id as unique refer CreateCard

function App() {
    return (
        <div>
            <h1 className="heading">My contactss</h1>
            {contacts.map(CreateCard)}
        </div>
    );
}

export default App;