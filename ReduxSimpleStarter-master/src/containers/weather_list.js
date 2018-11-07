import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        if(cityData.city === undefined)
        {
            return;
        }
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
    const humidty = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat} = cityData.city.coord;
    

    return(
        <tr key={name}>
            <td><GoogleMap lon={lon} lat={lat}/></td>
            <td><Chart data={temps} color="red" units="Celcius" /></td>
            <td><Chart data={humidty} color="blue" units="hPa" /></td>
            <td><Chart data={pressure} color="green" units="%" /></td>
        </tr>
    );
}

    render() {
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (Celcius)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humity (%)</th>
                </tr>
            </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);