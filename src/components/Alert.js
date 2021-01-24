import React from 'react';

import './Alert.css';

export default function Alert({ message }) {
  return (
    <div className="alert-card">
      { message }
    </div>
  )
}