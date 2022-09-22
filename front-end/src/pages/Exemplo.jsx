import React, { useContext } from 'react';
import UserNavbar from '../Components/UserNavbar/UsersNavbar';
import MyContext from '../Provider/MyContext';

function Exemplo() {
  const { exemplo } = useContext(MyContext);
  return (
    <main>
      <UserNavbar />
      <h1>{exemplo}</h1>
    </main>
  );
}

export default Exemplo;
