import React,{ Component } from 'react';
import { BaseComponent } from "./baseComponent";

export class CarForm extends BaseComponent{
		constructor(props) {
			super(props);
      const car = {
        make: '',
        model: '',
        year: ''
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
								<select className="form-control" id="select-dropdown-year" name="year" value={car.year} onChange={this.onChange}>
											<option value=''>Select Year</option>
												<option value='2016'>2016</option>
												<option value='2015'>2015</option>
												<option value='2014'>2014</option>
												<option value='2013'>2013</option>
												<option value='2012'>2012</option>
							  </select>
            </div>
            <div className="form-group">
                <label htmlFor="select-dropdown">Color:</label>

								<select className="form-control" id="select-dropdown" name="color" value={car.color} onChange={this.onChange}>
												<option value=''>Select Color</option>
												<option value='White'>white</option>
												<option value='Black'>black</option>
												<option value='Silver'>silver</option>
												<option value='Blue'>blue</option>
							  </select>
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
