import { evaluate } from 'mathjs'
import { useState } from 'react'
import Button from './Button'
import Display from './Display'

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (label: string) => {
    if (label === 'C') {
      setInput('');
    } else if (label === '=') {
      try {
        setInput(evaluate(input.trim()).toString());
      } catch {
        setInput('Error');
      }
    } else {
      if (/[\+\-\*/]$/.test(input) && /[\+\-\*/]$/.test(label)) return;
      setInput(input + label);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;