import React, { Component } from 'react';
import Row from '../row';
import {PlanetList, PlanetDetail } from '../sw-components';

export default class PlanetPage extends Component {
    constructor() {
        super();
        this.state = {
            isSelected: null
        }
    }

    onItemSelected = (id) => {
        this.setState({isSelected: id})
    }

    render() {
        const { isSelected } = this.state;
        return (
            <Row leftItem={<PlanetList onItemSelected={this.onItemSelected}/>} rightItem={<PlanetDetail persId={isSelected}/>}/>
        )
    }
}
