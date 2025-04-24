import { useState } from 'react'; 
import { auth } from "./config/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SignJWT } from 'jose';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const autenticarComFirebase = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);

      const secretKey = new TextEncoder().encode('MinhaChaveSecreta');
      const token = await new SignJWT({ user: email })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      localStorage.setItem('token', token);
      setLogado(true);
    } catch (err) {
      alert("Erro ao autenticar!");
      console.error(err);
    }
  };

  return (
    <div className="container">
      {!logado ? (
        <>
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
        </>
      ) : (
        <div className="home">
          <h1>🎉 Bem-vindo, {email.split('@')[0]}!</h1>
          <p>Você fez login com sucesso!</p>
        </div>
      )}
    </div>
  );
}

export default App;
