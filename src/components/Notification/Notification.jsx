import PropTypes from 'prop-types';

export const Notification = ({ message }) => <h3>{message}</h3>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
