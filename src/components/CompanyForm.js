import React, { Component } from "react";
import "../styles/CompanyForm.css";
class CompanyForm extends Component {
  /* componentDidMount() {
    this.setState({
      states: Estados
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedState !== this.state.selectedState) {
      this.setState({
        cities: Municipios[this.state.selectedState]
      });
    }
  }*/
  render() {
    return (
      <div>
        <form className="companyForm">
          <div className="form-group">
            <label>Nombre Compañia</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre de la compañia"
              value={this.props.formValues.name}
              onChange={this.props.onChange}
            />
            <br></br>
            <label>Descripción</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripcion de la compañia"
              name="description"
              value={this.props.formValues.description}
              onChange={this.props.onChange}
            />
            <br></br>
            <label>Tipo de Industria</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tipo de Industria"
              name="industry"
              value={this.props.formValues.industry}
              onChange={this.props.onChange}
            />
            <br></br>
            <label>Estado</label>
            <select
              value={this.props.formValues.selectedState}
              className="form-control"
              onChange={this.props.onChange}
              name="selectedState"
            >
              {!this.props.formValues.selectedState && (
                <option key="default" value="Selecciona un Estado">
                  Selecciona un Estado
                </option>
              )}
              {!!this.props.states &&
                this.props.states.map(e => (
                  <option key={e.clave} value={e.nombre}>
                    {e.nombre}
                  </option>
                ))}
            </select>
            <br></br>
            <label>Municipio</label>
            <select
              className="form-control"
              value={this.props.formValues.selectedCity}
              onChange={this.onChange}
              name="selectedCity"
            >
              {!!this.props.cities &&
                this.props.cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            <label>Tipo de Industria</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripcion de la compañia"
              onChange={this.props.onChange}
              name="industry"
              value={this.props.formValues.industry}
            />
            <br></br>
            <label>Misión</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripcion de la compañia"
              onChange={this.props.onChange}
              name="mission"
              value={this.props.formValues.mission}
            />
            <br></br>
            <label>Visión</label>
            <input
              type="text"
              className="form-control"
              placeholder="Descripcion de la compañia"
              onChange={this.props.onChange}
              name="vission"
              value={this.props.formValues.vission}
            />
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}

export default CompanyForm;
