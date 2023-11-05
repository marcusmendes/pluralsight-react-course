window.onload = () => {
  const rootElement = document.getElementById('root');
  // rootElement.innerHTML = 'Hello form my first SPA App!';
  // const button = document.createElement('button');
  // button.innerHTML = 'Click me for current date';
  // button.addEventListener('click', () => {
  //   button.innerHTML = new Date().toString();
  // });
  // rootElement.appendChild(button);

  // const ints = [1, 2, 3];

  // ints.forEach(i =>  {
  //   let li = document.createElement('li');
  //   li.innerHTML = i;
  //   rootElement.appendChild(li);
  // })

  // Using React to render the DOM
  const root = ReactDOM.createRoot(rootElement);

  const ints = [1, 2, 3];
  const childrenElements = [];

  childrenElements.push(
    React.createElement("li", { key: ints[0] }, ints[0]),
  );

  childrenElements.push(
    React.createElement("li", { key: ints[1] }, ints[1]),
  );

  childrenElements.push(
    React.createElement("li", { key: ints[2] }, ints[2]),
  );

  root.render(childrenElements);
};
