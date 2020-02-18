import React from 'react'

export default class characterItem extends React.Component {
    render() {
        console.log(this.props.character)
        const {character} = this.props;
        const {
            url_image,
            pokemon,
            species_id,
            hp,
            attack,
            defense,
        } = character;

        return (
            <>
            { character.pokemon
            ? <div>
                    <p><img src={url_image} /></p>
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
    