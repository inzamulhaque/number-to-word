import converter from 'number-to-words'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';

function App() {
  const [number, setNumber] = useState()
  const [word, setWord] = useState("")

  const getNumber = (number) => {
    setNumber(number);
    setWord("")
  }

  const convert = () => {
    const numberToWord = converter.toWords(number);
    setWord(numberToWord)
  }

  return (
    <>
      <Container>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Number"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Enter Number" onChange={(e) => getNumber(e.target.value)} />
        </FloatingLabel>

        <Button variant="primary" onClick={convert}>Convert</Button>
        {
          word && <h1>{word}</h1>
        }
      </Container>
    </>
  );
}

export default App;
