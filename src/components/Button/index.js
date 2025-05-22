import styles from './index.module.scss';
import classNames from 'classnames';

const Button = ({ children, variant = 'primary', iconLeft: Icon, ...props }) => {
	return (
		<button
			className={classNames(styles.Button, styles[variant], {
				[styles.iconLeft]: !!Icon
			})}
			{...props}
		>
			{Icon && Icon}
			{children}
		</button>
	);
};

export default Button;
