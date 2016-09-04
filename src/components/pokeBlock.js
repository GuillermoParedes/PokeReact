import React, { Component } from 'react';

export default class pokeBlock extends Component {

    render() {
        console.log("entro al ender de pokeBlock");
        return (
            <div>
                <div className="col-xs-6 col-sm-3 col-md-3">
                    <figure className="thumbnail">
                        <img src={this.props.imag} alt={this.props.name} className="img-circle" />
                    </figure>
                </div>
            </div>
        );
    }
}


