// importing React to enable JSX syntax and use React features
import React from 'react';
import './App.css';

// defining AlertButton component that accepts message and children as props
// this component allows displaying an alert with the provided message when clicked
const AlertButton = ({ message, children }) => {
  // attaching an onClick event handler to the button
  return <button onClick={() => alert(message)}>{children}</button>;
};

// defining Toolbar component that dynamically renders AlertButton components
const Toolbar = () => {
  const buttons = [
    { message: 'Eating', children: 'Eat food' },
    { message: 'Workout', children: 'Go to the gym' },
    { message: 'Hiking', children: 'Go for a hike' },
    { message: 'Driving', children: 'Drive the car' },
    // we can add more here
  ];

   // this replaces the static component rendering from the initial snippet
  return (
    <div className="toolbar"> {/* Styling applied here as per the initial snippet */}
      <p>V2 Click on each button to see the alert message.</p>
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>{button.children}</AlertButton>
      ))}
    </div>
  );
};

// main App component integrates the Toolbar with dynamic AlertButton components
function App() {
  // rendering the Toolbar component within the App's return statement
  return (
    <div className="App">
      <Toolbar />
    </div>
  );
}

// exporting App component for use in other parts of the application, like index.js
export default App;
