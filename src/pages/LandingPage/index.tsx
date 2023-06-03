import { LandingPageBox } from "./styles";
import { NotebookIcon } from "./styles";

export const LandingPage = () => {
  return (
    <>
      <LandingPageBox>
        <div>
          <div className="topBox">
            <NotebookIcon />
            <h2>MyNoteBook</h2>
          </div>
          <div className="bottomBox">
            <button>Cadastrar</button>
            <button>Login</button>
          </div>
        </div>
      </LandingPageBox>
    </>
  );
};
