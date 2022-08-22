import React from 'react';
import './MySelect.scss'
interface SelectProps {
	options: { value: string, name: string }[]
	defaultValue: string
	value: string
	onChange: (e: any) => void
}
const Select: React.FC<SelectProps> = ({ options, defaultValue, value, onChange }) => {
	return (
		<select className='select' value={value} onChange={e => onChange(e.target.value)} defaultValue={defaultValue}>
			{options.map(o =>
				<option key={o.value} value={o.value}>{o.name}</option>
			)}
		</select>
	);
};


export default Select;