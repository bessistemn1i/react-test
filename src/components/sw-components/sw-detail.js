import React from 'react';

import { DetailWithData, WithSwapiData, compose } from '../hoc-helpers';

import ItemDetails, { Record } from '../item-details/item-details';

const renderPlanet = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            <Record field="name" label="Название"/>
            <Record field="period" label="Период обращения"/>
            <Record field="population" label="Население"/>
        </WrappedComponent>
    }
}

const renderStarship = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            <Record field="name" label="Название"/>
            <Record field="model" label="Модель"/>
            <Record field="crew" label="Состав команды"/>
        </WrappedComponent>
    }
}

const renderPerson = (WrappedComponent) => {
    return (props) => {
        return <WrappedComponent {...props}>
            <Record field="name" label="Имя"/>
            <Record field="birthYear" label="Год рождения"/>
            <Record field="gender" label="Пол"/>
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