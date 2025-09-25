import { createFileRoute } from '@tanstack/react-router';
import logo from '../logo.svg';
import '../App.css';
import { authClient, useSession } from '@/lib/auth/auth-client';

export const Route = createFileRoute('/')({
  component: App,
})


function App() {
  const { data: session } = useSession();
  console.log(session);

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
        <button onClick={signIn}>Sign In with Google</button>
      </header>
    </div>
  )
}
