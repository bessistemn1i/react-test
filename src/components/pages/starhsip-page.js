import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';
import Row from '../row';

const StarshipPage = ({history}) => {
    return (
        <Row leftItem = {<StarshipList onItemSelected = {
            (persId) => {history.push(persId)
            }}/>} rightItem = {() => {}} />
        
    )
}

export default withRouter(StarshipPage);