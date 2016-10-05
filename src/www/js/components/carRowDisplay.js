import React,{ Component } from 'react';

export class CarRowDisplay extends Component{
		constructor(props) {
			super(props);
		}

		render(){
      let {car} = this.props;
			return(
        <tr>
          <td> {car.make} </td>
          <td> {car.model} </td>
          <td> {car.year} </td>
          <td> {car.color} </td>
          <td>
            <button type="button" className="btn btn-primary" onClick={this.props.toggleEditCar}>
            <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </td>
        </tr>
			)
		}

}

CarRowDisplay.propTypes = {
	car: React.PropTypes.object.isRequired,
  toggleEditCar:React.PropTypes.func.isRequired
};
