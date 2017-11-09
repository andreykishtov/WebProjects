class Weather {
  constructor(props) {}

  async getWeather() {
    this.getLocation();
    try {
      let response = await fetch(this.getUrl(this.longitude, this.latitude));
      let data = await response.json();
    } catch (error) {
      console.log(error);
    }
    return data;
  }

  getUrl(longitude, latitude) {
    return `https://fcc-weather-api.glitch.me/api/current?lon=:${longitude}&lat=:${latitude}`;
  }

  getLocation() {
    return navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(pos => this.saveLocation(pos), err => console.log(err))
      : this.saveLocation({ latitude: 34, longitude: 35 });
  }

  saveLocation({ coords }) {
    this.latitude = coords.latitude;
    this.longitude = coords.longitude;
  }
}

const weather = new Weather();
weather.getWeather();
