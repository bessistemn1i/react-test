import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './random-planet.css';
import Service from '../services';
import Spinner from '../spinner';
import Error from '../ErrorBoundary';

const service = new Service();

export default class RandomPlanet extends Component {
    constructor () {
        super();
        this.state = {
            planet: {},
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        const { interval } = this.props;
        this.interval = setInterval(this.getRandomInfo, interval);
    }

    componentWillUnmount() {
        this.interval.clearInterval();
    }
    
    getError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    getDatesPlanet = (planet) => {
        return this.setState({
            planet: planet,
            loading: false
        });
    }

    getRandomInfo = () => {
        const id = Math.floor(Math.random() * 15) + 1;
        service.getOnePlanet(id)
            .then((planet) => {
            this.getDatesPlanet(planet);
            })
            .catch(this.getError);
    }
    
    render() {
        const { planet, loading, error } = this.state;
        const someError = error ? <Error/> : null;
        const haveData = !loading && !someError;
        const spinner = loading ? <Spinner/> : null;
        const content = haveData ? <PlanetView planet={planet}/>: null;

        return (
            <div className="random__wrapper">
            {spinner}
            {someError}
            {content}
            </div>
        )
    }
}

RandomPlanet.defaultProps = {
    interval: 2500
}

RandomPlanet.propTypes = {
    interval: PropTypes.number
}

const PlanetView = ({planet}) => {
    const { population, name, period, diameter, id } = planet;

    return (
        <React.Fragment>
            <div className="random__image-wrap">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}></img>
                </div>
            <div className="random__description">
                    <h3 className="title">
                        Название: <span>{name}</span>
                    </h3>

                    <ul className="descr__list">
                        <li className="descr__item">Население: <span>{population}</span></li>
                        <li className="descr__item">Период обращения: <span>{period}</span></li>
                        <li className="descr__item">Диаметр: <span>{diameter}</span></li>
                    </ul>
                </div>
        </React.Fragment>
    )
}