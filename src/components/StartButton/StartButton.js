import './StartButton.css';
import cx from 'classnames';
import PropTypes from 'prop-types';

function StartButton({ value, className, visible = false, onClick = () => {} }) {
    return (
        <button className={cx('btn btn-success', className, {
            'hidden': visible
        })} onClick={onClick}>    
        {value}
        </button>
    );
};
StartButton.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    visible: PropTypes.bool,
    onClick: PropTypes.func,
};

export default StartButton;