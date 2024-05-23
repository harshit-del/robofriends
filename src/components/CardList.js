import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const CardArray = robots.map((robot, i) => {
        return <Card 
                    key={i} 
                    name={robot.name} 
                    email = {robot.email} 
                    id = {robot.id}/>
                })
    return(
        <div>
            {CardArray}
        </div>
    )
}

export default CardList;
/**NOTES
 * key prop should have something that doesn't change. For example, index(or i in our case) could change if array items get moved. So a better key in this case would be something unique like id. 
 */