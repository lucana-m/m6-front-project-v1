import { LandingPageBox } from "./styles";
import { NotebookIcon } from "./styles";
import { Link } from "react-router-dom";

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
            <button>
              <Link to="/register">Cadastrar</Link>
            </button>

            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </LandingPageBox>
    </>
  );
};
