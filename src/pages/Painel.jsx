import { useLocation } from "react-router-dom";

function Painel() {
  const { state } = useLocation();

  console.log(state);

  return (
    <h1>Painel</h1>
  );
}

export default Painel;
