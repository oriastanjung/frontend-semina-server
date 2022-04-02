import React from 'react';

// function normal
function Title({ title }) {
  return <h1>{title}</h1>;
}

Title.defaultProps = {
  title: 'Elfin',
};

export default Title;
