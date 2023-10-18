const randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let randomRgb = `rgb(${red}, ${green}, ${blue})`;
  return randomRgb;
};
