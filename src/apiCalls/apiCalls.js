const getMovies = async (setFunction) => {
  try {
    const response = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");
    if (!response.ok) {
      throw new Error("Sorry, we weren't able to retrieve any movies");
    }
    else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};

export {
  getMovies,
}