import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Header from '../header';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../services';

import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages';
import { StarshipDetail } from '../sw-components';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    onLogin = (isLoggedIn) => {
        this.setState({isLoggedIn})
    }
    render() {
        const swapiService = new SwapiService();
        const { isLoggedIn } = this.state;
        return(
            <div className="app-wrap">
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <Header/>
                        <RandomPlanet/>
                        <Switch>
                            <Route path="/" render = {() => <h2 className="app-title">Добро пожаловать в тестовое приложение на React</h2>}
                                exact
                            />
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetPage}/>
                            <Route path="/starships" component={StarshipPage} exact/>
                            <Route path="/starships/:id"
                                    render = {({match}) => {
                                        const { id } = match.params;
                                    return <StarshipDetail persId = {id}/>
                                    }}/>
                            <Route path="/login" render = {
                                () => (
                                    <LoginPage isLoggedIn={isLoggedIn} onLogin= {this.onLogin}/>
                                )
                            }/>
                            <Route path="/secret" render = {
                                () => (
                                    <SecretPage isLoggedIn = {isLoggedIn} />
                                )
                            }/>
                            <Route render={() => <h2>Page not found</h2>}/>
                        </Switch>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }
}