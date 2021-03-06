import React from 'react'
import { render } from '@testing-library/react'

export default class characterItem extends React.Component {
    render() {
        const {character} = this.prop;
        const {
            image,
            pokemon,
            species_id,
            hp,
            attack,
            defense,
        } = character;

        return (
            <>
            { character.name 
            ? <div>
                    <p><img src={image} /></p>
                    <p>name: {pokemon}</p>
                    <p>species: {species_id}</p>
                    <p>status: {hp}</p>
                    <p>attack: {attack}</p>
                    <p>defense: {defense}</p>
                </div>
        : <img alt='loading art' src="https://pixelpapa.com/wp-content/uploads/2018/11/Flat-Preloaders.gif"/>
        }
        </>
        )
    }
}
    