import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PageSignin() {
  return (
    <div>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to='/categories'>Categories</Link>
      </nav>
    </div>
  );
}

export default PageSignin;
