import React from 'react';
import PropTypes from 'prop-types';

function Badge({ text }) {
  return (
    <span className="badge bg-info text-white p-1 fs-6 fw-normal">
      {text}
    </span>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
