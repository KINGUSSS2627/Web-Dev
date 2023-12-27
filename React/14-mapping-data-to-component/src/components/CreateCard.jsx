import React from 'react';
import Card from './Card';


function CreateCard(contact) {
    return <Card
                key ={contact.id}
                name = {contact.name}
                image ={contact.imgURL}
                tel ={contact.phone}
                email ={contact.email}
            />
}

export default CreateCard;