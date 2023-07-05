import { GlobalStyle } from "./styles/global";
import { MainRoutes as Routes } from "./routes";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
