import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';
import ProductName from './Name';
import ProductPrice from './Price';
import ProductDescription from './Description';
import ProductImage from './Image';

const firstName = "Sahar";
function App() {
    return (
      <div className="App">
        <header className="App-header">
        <Card style={{ width: '18rem' }}>
          <div variant="top"> <ProductImage /> </div>
          <Card.Body>
            <Card.Title className="custom-title"> <ProductName /> </Card.Title>
            <Card.Text>
              <ProductPrice />
              <ProductDescription />
              </Card.Text>
          </Card.Body>
        </Card>
        <div className="greeting">
          {firstName ? (
            <>
              <p style = {{color: "red"}}>Hello, {firstName}!</p>
              <img src="https://www.shutterstock.com/shutterstock/photos/2185546957/display_1500/stock-photo-hello-salutation-or-greeting-word-to-welcome-someone-or-initiate-a-conversation-design-with-2185546957.jpg" alt="Greeting" />
            </>
          ) : (
            <p>Hello, there!</p>
          )}
        </div>
        </header>
      </div>
    );
}

export default App;



