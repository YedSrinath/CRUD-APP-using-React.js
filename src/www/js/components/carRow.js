import React,{Component} from 'react';
import { BaseComponent } from "./baseComponent";

export class CarRow extends BaseComponent{
		constructor(props) {
			super(props);
      this.toggleEditCar = this.toggleEditCar.bind(this);
      this.state = {
        car: {
          ...this.props.car
        },
        editMode:false
      };
      this.updateCar = this.updateCar.bind(this);

		}
    toggleEditCar(){
      this.setState({
        editMode:!this.state.editMode,
        car: {
          ...this.props.car
        }
      });
    }

    updateCar() {
      this.props.updateCar( this.props.index, this.state.car );
      setTimeout(()=>{
        this.toggleEditCar();
      });

    }

		render(){
      let {car} = this.state;
			return(
        !this.state.editMode?
        <tr>
          <td> {car.make} </td>
          <td> {car.model} </td>
          <td> {car.year} </td>
          <td> {car.color} </td>
          <td>
            <button type="button" className="btn btn-primary" onClick={this.toggleEditCar}>
            <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </td>
        </tr>
        :
        <tr>
          <td>
            <input type="text" className="form-control" placeholder="Make" name="make" id="make" value={car.make} onChange={this.onChange} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Model" name="model" id="model" value={car.model} onChange={this.onChange} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Year" name="year" id="year" value={car.year} onChange={this.onChange} />
          </td>
          <td>
            <input type="text" className="form-control" placeholder="Color" name="color" id="color" value={car.color} onChange={this.onChange} />
          </td>
          <td>
            <button type="button" className="btn btn-primary" onClick={this.updateCar}>
              Save
            </button>
            {/*<button type="button" className="btn btn-danger" onClick={this.toggleEditCar}>
              Cancel
            </button>*/}

          </td>
        </tr>
			)
		}

}

CarRow.propTypes = {
	car: React.PropTypes.object.isRequired,
  updateCar:React.PropTypes.func.isRequired,
  index:React.PropTypes.number.isRequired
};
