import { FormBox } from "./styles";

export const RegisterPage = () => {
  return (
    <FormBox>
      <div className="bgBox">
        <div className="topBox">
          <h2>MyNoteBook</h2>
          <p>Cadastro</p>
        </div>
        <form>
          <div className="inputBox">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className="inputBox">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="inputBox">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{2}-[0-9]{9}"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
          </div>
          <div className="inputBox">
            <label htmlFor="confirmaSenha">Confirmar senha:</label>
            <input type="password" id="confirmaSenha" name="confirmaSenha" />
          </div>
          <button className="buttonRegister" type="submit">
            Cadastrar
          </button>
          <button type="button">Voltar</button>
        </form>
      </div>
    </FormBox>
  );
};
