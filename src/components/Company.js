import React from 'react';
import style from './Company.css';

const Company = ({ companyData }) => (<div>
	<ul>
		{Object.entries(companyData['Meta Data'] || {}).map(entry => <li>{entry[0]} : {entry[1]}</li>)}
	</ul>
	<table>
		<thead>
			<tr>
{/*}				{Object.values(companyData['Time Series (Daily)'] || {}).forEach(value => {
					{(Object.keys(value) || {}).map(key=> (
						<th>{key}</th>
					))}
					
					})}
				*/}			</tr>
		</thead>
		<tbody>
			{Object.entries(companyData['Time Series (Daily)'] || {}).map(entry => (
				<tr>
					<td>{entry[0]}</td>
					{Object.values(entry[1] || {}).map(value => (
						<td>{value}</td>
					))}
				</tr>
			))}
		</tbody>
	</table>
</div>
)

export default Company;
