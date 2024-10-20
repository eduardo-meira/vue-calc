import { useState } from "react";
import styles from "./Form.module.css";

const Formulario = () => {
  let [peso, setPeso] = useState(0);
  let [altura, setAltura] = useState(0);
  let [result, setResult] = useState(0);

  const calcIMC = () => {
    const calculaIMC = peso / (altura * altura);
    const imcFeito = calculaIMC.toFixed(1);
    return setResult(imcFeito);
  };

  const verificaResult = () => {
    if (result == 0) {
      return "preencha os campos";
    } else {
      return result;
    }
  };

  return (
    <>
      <h1>Adicione seu peso e altura e saberá seu IMC</h1>

      <div className="container">
      <form>
        <input
        className="campos"
          type="number"
          placeholder="peso ex: 80.0"
          onChange={(evento) => setPeso(evento.target.value)}
        />
        <input
        className="campos"
          type="number"
          placeholder="altura ex: 1.80"
          onChange={(evento) => setAltura(evento.target.value)}
        />
        <button
        className="button-calcular"
          onClick={(e) => {
            e.preventDefault();
            calcIMC();
          }}
        >
          CALCULAR IMC
        </button>     
      <p className="text" > sua taxa de IMC é de :</p>
      <p className="result" >{verificaResult()}</p>
      </form>

        <table>
          <thead>
            <th>IMC</th>
            <th>Classificação</th>
          </thead>
          <tbody>
            <tr>
              <td>menor que 18.5</td>
              <td>Baixo peso</td>
            </tr>
            <tr>
              <td>18.5 - 24.59</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Pré-obdesidade</td>
            </tr>
            <tr>
              <td>30.0 - 34.9</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>35.0 - 39.9</td>
              <td>Obesidade grau II</td>
            </tr>
            <tr>
              <td> maior que 40.0</td>
              <td>Obesidade grau III</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Formulario;
