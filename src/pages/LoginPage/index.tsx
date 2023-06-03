import { FormBox } from "../RegisterPage/styles";

export const LoginPage = () => {
  return (
    <FormBox>
      <div className="bgBox">
        <div className="topBox">
          <h2>MyNoteBook</h2>
          <p>Login</p>
        </div>
        <form>
          <div className="inputBox">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="inputBox">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
          </div>

          <button className="buttonRegister" type="submit">
            Entrar
          </button>
          <button type="button">Voltar</button>
        </form>
      </div>
    </FormBox>
  );
};
