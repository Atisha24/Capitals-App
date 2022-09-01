import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCountryId: countryAndCapitalsList[0].id,
  }

  getUpdatedCountryId = id => {
    this.setState({activeCountryId: id})
  }

  render() {
    const {activeCountryId} = this.state
    const {country} = countryAndCapitalsList[activeCountryId]

    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="capital-select"
            onClick={this.getUpdatedCountryId}
            value={activeCountryId}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <option
                key={eachCapital.id}
                value={eachCapital.id}
                className="countries-name"
              >
                {eachCapital.capitalDisplayText}
              </option>
            ))}
            <label htmlFor="capitals" className="label-text">
              is capital of which country?
            </label>
          </select>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
