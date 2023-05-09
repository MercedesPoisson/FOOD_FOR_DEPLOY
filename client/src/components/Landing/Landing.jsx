import React from 'react';
import Validation from './Validation';

const Landing = () => {
    const handleGuestLogin = () => {
      // Código para iniciar sesión como invitado
    };
  
    const handleSignup = () => {
      // Código para ir a la página de registro
    };
  
    const handleLogin = () => {
      // Código para ir a la página de inicio de sesión
    };
  
    return (
      <div>
        <h1>Foodie Lovers</h1>
        <h3>Most tasty Experience</h3>
        <form>
          <label htmlFor='email'>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" />
          </label>
          <button type="submit">Iniciar sesión</button>
        </form>
        <button onClick={handleGuestLogin}>Be My Guest</button>
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  export default Landing;
