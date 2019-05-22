import React from 'react';
import { WithData, WithSwapiData, compose } from '../hoc-helpers';
import List from '../item-list';

const withChild = (fn) => (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            {fn}
        </WrappedComponent>
    }
}

const renderName = ({name}) => <span>{name}</span>;
const renderStarship = ({name, model}) => <span>{name} - ({model})</span>;
const renderPlanet = ({name, population}) => <span>{name} - {population}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStraships
    }
}

const StarshipList = compose(
                            WithSwapiData(mapStarshipsMethodsToProps),
                            WithData,
                            withChild(renderStarship))(List);

const PeopleList = compose(
                        WithSwapiData(mapPersonMethodsToProps),
                        WithData,
                        withChild(renderName))(List);

const PlanetList = compose(
                        WithSwapiData(mapPlanetsMethodsToProps),
                        WithData,
                        withChild(renderPlanet))(List);

export {
    StarshipList,
    PeopleList,
    PlanetList
}