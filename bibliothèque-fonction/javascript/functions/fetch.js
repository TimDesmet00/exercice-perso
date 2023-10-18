async function fetch(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("La requête a échoué");
  }
  const data = await response.json();
  return data;
}
