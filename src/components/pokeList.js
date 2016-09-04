import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';

const PokeList = ({listOfPokemon, baseUrl}) => {

    console.log("listOfPokemon", listOfPokemon, baseUrl);

    let pokemon = listOfPokemon.map((creature) => {
        return (
            <Col sm={6} md={4} key={creature.name}>
                <ListGroupItem className='PokeList-item'>
                    <img src={baseUrl+'/'+parseInt((creature.url).split('/')[6])+'.png'} alt={creature.url}/>
                    {creature.name}</ListGroupItem>
            </Col>
        )
    });

    return (


        <ListGroup>
            {pokemon}
        </ListGroup>
    )
}

export default PokeList;