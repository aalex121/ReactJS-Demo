import React, {Component} from 'react';
import Weather from '../Components/weather';
import InputForm from '../Components/form';

const API_ID = "f3535393765d58130cd8344190056dc4";

class PageBody extends Component {   

    state = {
        temp: undefined,
        pressure: undefined,
        city: undefined,
        country: undefined,        
        error: undefined
    }

    GetWeather = async (event) => {        
        event.preventDefault();
        const city = event.target.elements.city.value;
        const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&units=metric`);
        const data = await apiUrl.json();        
        //console.log(data);

        if (data.cod === 200) {
            this.setState({
                temp: data.main.temp,
                pressure: data.main.pressure,
                city: data.name,
                country: data.sys.country,                
                cod: data.cod,
                error: ""
            });
        } else {
            this.setState({                
                cod: 400,
                error: ""
            });
        }
    }
    
    render() {
        return (
            <div className="page-body">
                <InputForm weatherMethod={this.GetWeather} />
                <Weather
                    data = {this.state}                    
                />
            </div>
        );
    }
}

export default PageBody;