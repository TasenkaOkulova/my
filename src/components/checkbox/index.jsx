import styles from './Checkbox.module.css';
import classNames from 'classnames';

export const Checkbox = ({label, checked, disabled = false, error = false, onChange}) => {
    return (
        <div className={styles.wrapper} onClick={() => onChange(!checked)}>
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