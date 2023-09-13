import { useState } from "react";
import Start_game from "./Components/Start_game";
import Game_play from "./Components/Game_play";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <Game_play /> : <Start_game toggle={toggleGamePlay} />}
    </div>
  );
};

export default App;
