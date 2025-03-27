import { useState } from 'react';
import { auth } from "./config/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const autenticarComFirebase = async (event) => {
      event.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, senha);
          alert("Login realizado com sucesso!");
      } catch (error) {
          alert("Erro ao autenticar: " + error.message);
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
