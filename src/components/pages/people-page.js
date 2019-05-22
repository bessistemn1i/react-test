import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import { PeopleList, PersonDetail } from '../sw-components';

const PeoplePage = ({history, match}) => {
        const {id} = match.params;
        return(
            <Row leftItem={<PeopleList onItemSelected = {(persId) => history.push(persId)}/>} rightItem={<PersonDetail persId={id}/>}/>
        )
}

export default withRouter(PeoplePage);