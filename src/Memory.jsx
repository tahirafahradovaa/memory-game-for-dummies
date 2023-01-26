import { useEffect, useState } from "react";

const TILE_COLORS = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "red",
  "green",
  "blue",
  "yellow",
];

export default function Memory() {
  const [colorArr, setColorArr] = useState([]);
  const [tiles, setTiles] = useState([]);
  const [counter, setCounter] = useState(1);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    setColorArr(TILE_COLORS);
    shuffle(TILE_COLORS);
  }, []);
  // Write your code here.
  function handleColor(item) {
    setTiles([...tiles, item]);
    setCounter((counter) => counter + 1);
    if (counter === 1) {
      if (tiles[0]?.toLowerCase() == item?.toLowerCase()) {
        setSelected([...selected, tiles[0], item]);
      }
      setTimeout(() => {
        setTiles([]);
        setCounter(0);
      }, [700]);
    }
  }
  return (
    <>
      <h1>Memory GAME</h1>
      <div className="board">
        {colorArr &&
          colorArr.map((panel) => {
            return (
              <>
                <div
                  style={{
                    background: tiles.includes(panel)
                      ? panel
                      : selected.includes(panel)
                      ? panel
                      : "white",
                  }}
                  className={`tile ${
                    tiles.includes(panel)
                      ? panel
                      : selected.includes(panel)
                      ? panel
                      : ""
                  }`}
                  onClick={(e) => handleColor(panel)}
                ></div>
              </>
            );
          })}
      </div>
      {selected.length === TILE_COLORS.length && (
        <>
          <h1>YOU WIN</h1>

          <button
            onClick={() => {
              setSelected([]);
              shuffle(colorArr);
              setColorArr(TILE_COLORS);
            }}
          >
            Restart the game
          </button>
        </>
      )}
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
