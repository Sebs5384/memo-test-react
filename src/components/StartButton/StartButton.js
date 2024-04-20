import useVisibilityState from '../../hooks/useVisibilityState';
import cx from 'classnames';
import PropTypes from 'prop-types';

function StartButton({ value, onClick = () => {} }) {
    const { visible, handleVisibilityChange } = useVisibilityState(true);

    return (
        <button className={cx('btn btn-success', {
            'd-none': !visible
        })} onClick={() => {
            onClick();
            handleVisibilityChange();
        }}>    
        {value}
        </button>
    );
};
StartButton.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
};

export default StartButton;