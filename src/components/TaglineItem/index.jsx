import styles from './index.module.scss';

const TaglineItem = ( { text, color } ) => {
	return (<span className={styles.TaglineItem} style={{ color: color ? color : '#2B163F'}}>
		{text}
		</span>);
};

export default TaglineItem;
