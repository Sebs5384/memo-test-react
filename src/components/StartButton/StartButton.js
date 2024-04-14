import cx from 'classnames';
import PropTypes from 'prop-types';

function StartButton({ value, visible = true, onClick = () => {} }) {
    return (
        <button className={cx('btn btn-success', {
            'd-none': !visible
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