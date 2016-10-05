import React,{ Component } from 'react';
import { BaseComponent } from "./baseComponent";
import {CarRowForm} from "./carRowForm";
import {CarRowDisplay} from "./carRowDisplay";

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
			this.setState({
        editMode:!this.state.editMode
			});
    }

		componentWillReceiveProps(next) {
			if(next.car) {
				this.setState({
					car: {
						...next.car
					}
				});
			}
		}

		render(){
      let {car} = this.state;
			if( this.state.editMode ) {
				return <CarRowForm car={car}  toggleEditCar={this.toggleEditCar}  updateCar={this.updateCar} onChange={this.onChange}/>;
			}
			return <CarRowDisplay car={car}  toggleEditCar={this.toggleEditCar} />;

		}

}

CarRow.propTypes = {
	car: React.PropTypes.object.isRequired,
  updateCar:React.PropTypes.func.isRequired,
  index:React.PropTypes.number.isRequired
};
