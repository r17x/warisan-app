import React,{ Component } from 'react';

class Finish extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<table className="table table-responsive">
				<thead>
				<th>Ahli Waris</th>
				<th>Bagian</th>
				<th>Jumlah@orang</th>
				</thead>
				</table>
			</div>
		);
	}
}

export default Finish;
