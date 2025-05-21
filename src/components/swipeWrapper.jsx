/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

export default function SwipeWrapper({ children }) {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      navigate(-1);
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <div {...handlers} style={{ height: '100%' }}>
      {children}
    </div>
  );
}
