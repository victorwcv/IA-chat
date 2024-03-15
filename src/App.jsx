import { useState } from "react";
import randomCuriousQuestion from "./ranQuestions";

const App = () => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  console.log(value);

  const handleSurprise = () => {
    let question = randomCuriousQuestion();
    setValue(question);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Error! Por favor has una pregunta");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();
      console.log(data);
      setChatHistory((oldChatHistory) => [
        {
          role: "user",
          parts: value,
        },
        {
          role: "model",
          parts: data,
        },
        ...oldChatHistory,
      ]);
      setValue("");
    } catch (error) {
      console.error(error);
      setError("Algo salio mal! Por favor intentalo de nuevo mas tarde");
    }
  };

  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

  return (
    <div className="app">
      <h1>Chat IA</h1>
      <p>
        Que te gustaria saber...?
        <button
          className="surprise"
          onClick={handleSurprise}
          disabled={!chatHistory}
        >
          Sorprendeme!
        </button>
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="Cuando es Navidad...?"
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button onClick={getResponse}>Preguntar</button>}
        {error && <button onClick={clear}>Limpiar</button>}
      </div>
      {error && <p>{error}</p>}
      <div className="search-result">
        {chatHistory.map((chatItem, _index) => ( 
          <div key={_index}>
            <p className="answer">
              {chatItem.role === 'user' ? 'Usuario' : 'Modelo IA'} : {chatItem.parts}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default App;
