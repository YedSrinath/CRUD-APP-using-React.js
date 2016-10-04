import React,{Component} from 'react';
import {BaseComponent} from "./baseComponent";

export class CarForm extends BaseComponent{
		constructor(props) {
			super(props);
      let car = {
        make: '',
        model: '',
        year: '',
        color: ''
      };
      this.state = {
        car: car
      };

      this.onChange = this.onChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
		}


    submitForm(e) {
      e.preventDefault();
      this.props.addCar(this.state.car);
    }

		render(){
      const {car} = this.state;
      return (
          <form onSubmit={this.submitForm}>
            <div className="form-group">
                <label htmlFor="make">Make</label>
                <input type="text" className="form-control" placeholder="Make" name="make" id="make" value={car.make} onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="model">Model</label>
                <input type="text" className="form-control" placeholder="Model" name="model" id="model" value={car.model} onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input type="text" className="form-control" placeholder="Year" name="year" id="year" value={car.year} onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input type="text" className="form-control" placeholder="Color" name="color" id="color" value={car.color} onChange={this.onChange} />
            </div>
            <button
            type="submit" className="btn btn-primary"
            >Add Car</button>
          </form>
      );
		}

}

CarForm.propTypes = {
  addCar: React.PropTypes.func.isRequired
};
