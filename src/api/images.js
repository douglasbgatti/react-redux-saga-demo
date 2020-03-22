const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e0";

const URL = "https://api.unsplash.com/photos/";

const fetchImages = async page => {
  const url = `${URL}?client_id=${key}&page=${page}`;

  const response = await fetch(url);

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.errors);
  }

  return data;
};

export default {
  fetchImages
};
