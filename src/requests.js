//The getPuzzle function fetches the randomly generated puzzle object
//and then returns the puzzle string
const getPuzzle = async wordCount => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Went Wrong');
  }
};

//Exports the getPuzzle function to allow usage across other files.
export { getPuzzle as default }