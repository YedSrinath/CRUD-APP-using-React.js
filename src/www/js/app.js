import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CarTable } from './components/CarTable';
import { CarForm } from './components/carForm';
import carRow from './components/carRow';

class CarList extends Component {
		constructor(props) {
		super(props);

		this.state = {
			cars: [],
			editCarItem: false
		};
		this.addCar = this.addCar.bind(this);
		this.toggleFormStatus = this.toggleFormStatus.bind(this);
		this.updateCar = this.updateCar.bind(this);

		fetch('http://localhost:3010/cars').then( (response) => {
        return response.json()
    }).then(res=>{
			this.setState({
				cars: res
			})
		});

	}
	
	addCar(car){
		fetch('http://localhost:3010/cars', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(car)
		}).then(res => res.json())
			.then(res => {
				this.setState({
					cars:[
						...this.state.cars,
						res
					],
					editCarItem: false,
					showCarForm: false
				});
			});
	}

	updateCar(index, car) {
		fetch('http://localhost:3010/cars/' + car.id, {
			method: 'PUT',
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(car)
		}).then(res => res.json())
			.then(res => {
				this.setState({
					cars: [
						...this.state.cars.slice(0,index),
						{
							...res
						},
						...this.state.cars.slice(index+1)
					]
				});
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
