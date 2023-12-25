import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const NotFound = () => {
  return (
    <div className="not-found">

      {/* customised cursor */}
      <AnimatedCursor
        color='25, 135, 84'
      />

      <h1>Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/">Go back to the home page</a>
    </div>
  );
};

export default NotFound;
