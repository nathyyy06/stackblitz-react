import { useState } from 'react';
import { auth } from "./config/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { SignJWT } from 'jose';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFirebase = async (event) => {
      event.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, senha);

  const secretKey = new TextEncoder(). encode('MinhaChaveSecreta');
  const token = await new SignJWT({user: 'admin'})
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secretKey);

    localStorage.setItem('token',token);
          alert("Login realizado com sucesso!");
      } catch (err) {
          alert("Erro ao autenticar: ", err);
      }
  };

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={autenticarComFirebase}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    </div>
);
}


export default App;
