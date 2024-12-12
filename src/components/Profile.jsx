import React from 'react';

function Profile() {
  return (
    <section id="profile">
      <h1>Profile</h1>
      <p>This is where your bio and introduction will go.</p>
      <button onClick={() => (window.location.href = '#projects')}>
        View My Projects
      </button>
    </section>
  );
}

export default Profile;
