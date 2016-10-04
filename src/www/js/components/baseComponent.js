import React from 'react';

export class BaseComponent extends React.Component {
		constructor(props) {
			super(props);
			this.onChange = this.onChange.bind(this);
		}

		onChange(e) {
  		this.setState({
        car: {
          ...this.state.car,
          [e.target.name]: e.target.value
        }
  		});
  	}
}
