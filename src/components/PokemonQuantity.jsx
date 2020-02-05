import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class PokemonQuantity extends Component {
    render() {
        return (
            <Fragment>
                Unidades: {this.props.gameShop.pokemon}
            </Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        gameShop: state.gameShop
    };
};

export default connect(mapStateToProps)(PokemonQuantity);