import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NotificationContainer,
  NotificationMessage,
} from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationContainer>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationContainer>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
