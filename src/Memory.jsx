const TILE_COLORS = ["red", "green", "blue", "yellow"];

export default function Memory() {
  // Write your code here.
  function handleColor() {}
  return (
    <>
      <h1>Memory</h1>
      <div class="board">
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
        <div class="tile" onClick={handleColor}></div>
      </div>
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
