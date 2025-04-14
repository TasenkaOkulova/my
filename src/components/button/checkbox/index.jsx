import styles from './Checkbox.module.css';
import classNames from 'classnames';

export const Checkbox = ({label, checked, disabled = false, error = false}) => {
    return (
        <div className={styles.wrapper}>
            <div className={ classNames({
                [styles.checkbox]:true,
                [styles.activeBorder]:checked, 
                [styles.checked]:checked,
                [styles.disabled]: disabled,
                [styles.error]: error,
            })}></div>
           {label && <div>{label} </div>}
        </div>
    )
};