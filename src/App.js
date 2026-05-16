import React from 'react';
import './App.css';

function HelloWorld() {
  const message = 'Hello, World!';

  return (
    <div className="hello-block">
      <h1>{message}</h1>
      <p>Перше просте вебзастосування React.js</p>
    </div>
  );
}

function RecipeStep(props) {
  return (
    <li>{props.step}</li>
  );
}

function MashedPotatoRecipe() {
  const recipeName = 'Картопляне пюре';

  const steps = [
    'Почистити картоплю та промити її водою.',
    'Нарізати картоплю на частини.',
    'Відварити картоплю у підсоленій воді до готовності.',
    'Злити воду після варіння.',
    'Додати масло та молоко.',
    'Розім’яти картоплю до однорідної маси.',
    'Подати картопляне пюре до столу.'
  ];

  return (
    <div className="recipe-block">
      <h2>Рецепт: {recipeName}</h2>
      <h3>Кроки приготування:</h3>
      <ol>
        {steps.map((step, index) => (
          <RecipeStep key={index} step={step} />
        ))}
      </ol>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <HelloWorld />
      <MashedPotatoRecipe />
    </div>
  );
}

export default App;