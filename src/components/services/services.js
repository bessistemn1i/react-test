class SwapiService {
    _api = 'https://swapi.co/api/';
    _imageData = 'https://starwars-visualguide.com/assets/img/';

    getPersonImage = ({id}) => {
        return `${this._imageData}characters/${id}.jpg`;
    }
    
    getStarshipImage = ({id}) => {
        return `${this._imageData}starships/${id}.jpg`;
    }

    getOnePlanetImage = ({id}) => {
        return `${this._imageData}planets/${id}.jpg`;
    }
    
    getDataFromSwapi = async (url) => {
        const rowData = await fetch(`${this._api}${url}`);
        if(!rowData.ok) {
            throw new Error(`Could not fetch ${this._api}${url}, received ${rowData.status}`);
        }
        return await rowData.json();
    };
    
    getAllPeople = async () => {
        const rowPeoples = await this.getDataFromSwapi('people/');
        const hotData = rowPeoples.results.map(this._getTransformedPeople);
        return hotData;
    };

    getOnePerson = async (id) => {
        const onePerson = await this.getDataFromSwapi(`people/${id}`);
        return this._getTransformedPeople(onePerson);
    }

    getAllPlanets = async () => {
        const rowAllPlanets = await this.getDataFromSwapi('planets/');
        const hotAllPlanets = rowAllPlanets.results.map(this._getTransformedPlanet);
        return hotAllPlanets;
    }

    getOnePlanet = async (id) => {
        const onePlanet = await this.getDataFromSwapi(`planets/${id}`);
        return this._getTransformedPlanet(onePlanet);
    }

    getAllStraships = async () => {
        const rowAllStraships = await this.getDataFromSwapi('starships/');
        const hotAllStraships = rowAllStraships.results.map(this._getTransformedStarship);
        return hotAllStraships;
    }

    getOneStraship = async (id) => {
        const oneStarship = await this.getDataFromSwapi(`starships/${id}`);
        return this._getTransformedStarship(oneStarship);
    }

    _extractId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _getTransformedPlanet = (planet) => {
        
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            period: planet.orbital_period,
            diameter: planet.diameter
        }
    }

    _getTransformedStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _getTransformedPeople = (people) => {
        return {
            id: this._extractId(people),
            name: people.name,
            gender: people.gender,
            birthYear: people.birth_year,
            eyeColor: people.eye_color
        }
    }
}
export default SwapiService;