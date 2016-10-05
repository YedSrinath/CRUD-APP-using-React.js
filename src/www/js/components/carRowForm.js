import React,{ Component } from 'react';

export class CarRowForm extends Component{
		constructor(props) {
			super(props);
		}

    render(){
      let {car,onChange} = this.props;
			return(
        <tr>
          <td>
            <input type="text" className="form-control" placeholder="Make" name="make" id="make" value={car.make} onChange={onChange} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Model" name="model" id="model" value={car.model} onChange={onChange} />
          </td>
          <td>
            <select className="form-control" id="select-dropdown-year" name="year" value={car.year} onChange={onChange}>
            	<option value=''>Select Year</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
            </select>
          </td>
          <td>
            <select className="form-control" id="select-dropdown" name="color" value={car.color} onChange={onChange}>
                    <option value=''>Select Color</option>
                    <option value='White'>white</option>
                    <option value='Black'>black</option>
                    <option value='Silver'>silver</option>
                    <option value='Blue'>blue</option>
            </select>
          </td>
          <td>
            <button type="button" className="btn btn-primary" onClick={this.props.updateCar}>
              Save
            </button>
            <button type="button" className="btn btn-danger" onClick={this.props.toggleEditCar}>
              Cancel
            </button>
          </td>
        </tr>
			)
		}

}

CarRowForm.propTypes = {
	car: React.PropTypes.object.isRequired,
  updateCar:React.PropTypes.func.isRequired,
  toggleEditCar: React.PropTypes.func.isRequired,
  onChange:React.PropTypes.func.isRequired
};
