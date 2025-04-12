export const Button = ({label, variant, onClick}) => {

    const commonStyles = {
        padding: '10px 40px',
        borderRadius: '30px',
        fontFamily:'Caveat, cursive'
    };

    let customStyles = {};
    if (variant === 'primary'){
        customStyles = {
            background: '#730AAF',
            border: '1px solid #730AAF',
            color: '#FFFFFF'
        }
    } else if (variant === 'secondary'){
        customStyles = {
            background: '#919191',
            border: '1px solid #919191',
            color: '#FFFFFF'
        }
    } else if (variant === 'tertiary'){
        customStyles = {
            background: '#EED8FB',
            border: '1px solid transparent',
            color: '#730AAF'
        }
    }
    return (
        <button style={{...commonStyles, ...customStyles}}onClick={onClick}>
            {label}
        </button>
    )
}