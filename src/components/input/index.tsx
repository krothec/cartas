import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	value: string | number;
	type: string;
	placeholder?: string;
	width?: string;
	title?: string;
	subtitle?: string;
	disabled?: boolean;
	height?: string;
	border?: string;
	radius?: string;
	padding?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	name,
	type,
	width,
	title,
	subtitle,
	height,
	border,
	radius,
	padding,
	value,
	onChange,
}) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			value={value}
			name={name}
			onChange={onChange}
			style={{
				width,
				height,
				border,
				borderRadius: radius,
				padding,
			}}
		></input>
	);
};
export default Input;
