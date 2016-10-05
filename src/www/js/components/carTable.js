import React,{ Component } from 'react';
import { CarRow } from "./carRow";

export class CarTable extends Component{
		constructor(props) {
			super(props);
		}

		render(){
			return(
				<div className="car-list">
					<table className="table">
						<thead>
							<tr>
								<th>Make</th>
								<th>Model</th>
								<th>Year</th>
								<th>Color</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
						{
							this.props.cars.length ?

								this.props.cars.map((car, index) => (
									<CarRow key={car.id} car={car} updateCar={this.props.updateCar} index={index}/>
							 ))
							:
							<tr>
								<td colSpan="5">No Cars available</td>
							</tr>
						}

						</tbody>
					</table>
				</div>
			)
		}

}

CarTable.propTypes = {
	cars: React.PropTypes.array.isRequired,
	updateCar: React.PropTypes.func.isRequired
};
