import React from 'react';
import Card from './Card.js';


const Cardlist = ({ robots }) => {
    const Cardarray1 = robots.map((user, i) => {
        return <Card  id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
         {Cardarray1}
 
        </div>
    );
}

export default Cardlist;
