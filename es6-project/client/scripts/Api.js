export default async () => {
  try {
    let response = await fetch('http://localhost:3000/movies');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
