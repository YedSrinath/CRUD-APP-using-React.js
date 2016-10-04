import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { CarTable } from './components/CarTable';
import { CarForm } from './components/carForm';
import carRow from './components/carRow';

class CarList extends Component {
		constructor(props) {
		super(props);
		this.state = {
			cars: [
				{id: 1, make: 'Tesla', model: 'Model-S', year: 2016, color: 'gold'},
				{id: 2, make: 'Jeep', model: 'Grand-Cherokee', year: 2013, color: 'black'},
				{id: 3, make: 'Dodge', model: 'Charger', year: 2014, color: 'silver'},
				{id: 4, make: 'Nissan', model: 'GTR', year: 2015, color: 'grey'},
				{id: 5, make: 'Lexus', model: 'ES350', year: 2012, color: 'green'},
			],
			editCarItem: false
		};
		this.addCar = this.addCar.bind(this);
		this.toggleFormStatus = this.toggleFormStatus.bind(this);
		this.updateCar = this.updateCar.bind(this);


	}
	addCar(car){
		const length = this.state.cars.length;
		let id = 0;
		if( length != 0 ) {
			id = this.state.cars[length-1].id +1
		}
		const lastItem = this.state.cars
		this.setState({
			cars:[
				...this.state.cars,
				{
					...car,
					id: id
				}
			],
			editCarItem: false,
			showCarForm: false
		});
	}

	updateCar(index, car) {
		this.setState({
			cars: [
				...this.state.cars.slice(0,index),
				{
					...car
				},
				...this.state.cars.slice(index+1)
			]
		});
	}

	toggleFormStatus( ) {
		this.setState({
			showCarForm: !this.state.showCarForm
		})
	}

	render() {
		return (
				<div className="container">
					<div>
						<h1> List of Cars </h1>
			  		<CarTable cars={this.state.cars} updateCar={this.updateCar}/>
						<div className="text-center">
							<button type="button" className="btn btn-primary" onClick={this.toggleFormStatus}>
								<span className="glyphicon glyphicon-plus"></span> Add New Car
							</button>
						</div>
					</div>
					<div>
						{
							this.state.showCarForm?
							<CarForm addCar={this.addCar} />
							:
							''
						}
					</div>
			  </div>
		);
	}
}

ReactDOM.render(<CarList />, document.querySelector("main"));
