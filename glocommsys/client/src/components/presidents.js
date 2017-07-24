import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Presidents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      presidents: [],
      name: 'Donald J. Trump',
      dateOfBirth: 1946,
      dateOfDeath: 'N/A ',
      tookOffice: '2017-01-20',
      leftOffice: 'N/A',
      party: 'Republican'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then(res => {
        res.json()
        .then(presidents => {
          this.setState({ presidents });
        });
      })
      .catch(error => console.log(error));
  }

  handleChange = (event, index, value) => {
      this.setState({
        name: value.president,
        dateOfBirth: value.birth_year,
        dateOfDeath: value.death_year,
        tookOffice: value.took_office,
        leftOffice: value.left_office,
        party: value.party
      });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SelectField
            floatingLabelText="Presidents"
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={true}
          >
            {
              this.state.presidents.map(function(president) {
                return <MenuItem key={president.number} value={president} primaryText={president.president} />
              })
            }

          </SelectField>
          <h1>President: {this.state.name}</h1>
          <h3>Date of birth: {this.state.dateOfBirth} year</h3>
          <h3>Date of death: {this.state.dateOfDeath} year</h3>
          <h3>Took office: {this.state.tookOffice}</h3>
          <h3>Left office: {this.state.leftOffice}</h3>
          <h3>Party: {this.state.party}</h3>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Presidents;
