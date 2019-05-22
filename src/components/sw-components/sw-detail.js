import React from 'react';

import { DetailWithData, WithSwapiData, compose } from '../hoc-helpers';

import ItemDetails, { Record } from '../item-details/item-details';

const renderPlanet = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            <Record field="name" label="Name"/>
            <Record field="period" label="Period"/>
            <Record field="population" label="Population"/>
        </WrappedComponent>
    }
}

const renderStarship = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            <Record field="name" label="Name"/>
            <Record field="model" label="Model"/>
            <Record field="crew" label="Crew"/>
        </WrappedComponent>
    }
}

const renderPerson = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            <Record field="name" label="Name"/>
            <Record field="birthYear" label="Birth Year"/>
            <Record field="gender" label="Gender"/>
        </WrappedComponent>
    }
}

const mapPlanetDetailMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getOnePlanet,
        getImage: swapiService.getOnePlanetImage
    }
}
const mapStarshipDetailMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getOneStraship,
        getImage: swapiService.getStarshipImage
    }
}
const mapPersonDetailMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getOnePerson,
        getImage: swapiService.getPersonImage
    }
}

const PlanetDetail = compose(
                        WithSwapiData(mapPlanetDetailMethodsToProps),
                        DetailWithData,
                        renderPlanet)(ItemDetails);

const StarshipDetail = compose(
                        WithSwapiData(mapStarshipDetailMethodsToProps),
                        DetailWithData,
                        renderStarship)(ItemDetails);

const PersonDetail = compose(
                        WithSwapiData(mapPersonDetailMethodsToProps),
                        DetailWithData,
                        renderPerson)(ItemDetails);

export { PlanetDetail, StarshipDetail, PersonDetail };