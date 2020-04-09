import React from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="grid-container">
      <h1>USWDS Starter Template</h1>
      <p>
        Use{" "}
        <a href="https://designsystem.digital.gov/utilities/layout-grid/" target="_blank" rel="noopener noreferrer">
          grid-col class system
        </a>{" "}
        to build responsive layout.
      </p>
      <div className="grid-row margin-bottom-2">
        <div className="tablet:grid-col">
          <Button label="Default" />
        </div>
        <div className="tablet:grid-col">
          <Button btnStyle="secondary" label="Secondary" />
        </div>
        <div className="tablet:grid-col">
          <Button btnStyle="outline" label="Outline" />
        </div>
      </div>
      <div className="grid-row margin-bottom-2">
        <div className="tablet:grid-col padding-1">
          <Alert type="success" message="Success Alert" />
        </div>
        <div className="tablet:grid-col padding-1">
          <Alert type="error" message="Error Alert" />
        </div>
      </div>
      <div className="uswds-examples">This div is using a combination of USWDS functions and mixins.</div>
    </div>
  );
}

export default App;
