import { Container, Content, Row, } from './styles';
import Input from'./components/Input';
import Button from'./components/Button';
import { useState } from 'react';



const App = () => {
    const [currentNumber, setCurrentNumber] = useState ('0');
    const[firstNumber, setFirstNumber] = useState('0');
    const[operation, setOperation] = useState('');

    const handleAddNumber = (num) => {
        setCurrentNumber((prev) => (prev === '0' ? num : prev + num));
    }
    
    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
    }

    const handleClearEntry = () => {
        setCurrentNumber((prev) => {
            return prev.length > 1 ? prev.slice(0, -1) : '0';
        });
    }


    const handleSumNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(currentNumber.replace(',', '.'));
            setCurrentNumber('0')
            setOperation('+')
        }
        else{
            const num1 = Number(firstNumber.replace(',', '.'));
            const num2 = Number(currentNumber.replace(',', '.'));
            
            if (!isNaN(num1) && !isNaN(num2)) {
                const sum = num1 + num2;
                setCurrentNumber(String(sum).replace('.', ','));
                setOperation('');
            }
        }
    }

    const handleMinusNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        }
        else{
            const num1 = Number(firstNumber.replace(',', '.'));
        const num2 = Number(currentNumber.replace(',', '.'));
        if (!isNaN(num1) && !isNaN(num2)) {
            const difference = num1 - num2;
            setCurrentNumber(String(difference).replace('.', ','));
            setOperation('');
        } else {
            console.error('Invalid numbers for subtraction:', num1, num2);
        }
    }
}

    const handleMultiplyNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('X')
        }
        else {
            const num1 = Number(firstNumber.replace(',', '.'));
            const num2 = Number(currentNumber.replace(',', '.'));
            if (!isNaN(num1) && !isNaN(num2)) {
                const product = num1 * num2;
                setCurrentNumber(String(product).replace('.', ','));
                setOperation('');
            } else {
                console.error('Invalid numbers for multiplication:', num1, num2);
            }
        }
    }
    const handleDivideNumbers = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
        } else {
            const num1 = Number(firstNumber.replace(',', '.'));
            const num2 = Number(currentNumber.replace(',', '.'));
            if (!isNaN(num1) && !isNaN(num2)) {
                if (num2 !== 0) {
                    const quotient = num1 / num2;
                    setCurrentNumber(String(quotient).replace('.', ','));
                    setOperation('');
                } else {
                    console.error('Division by zero error');
                    setCurrentNumber('Error');
                }
            } else {
                console.error('Invalid numbers for division:', num1, num2);
            }
        }
    }

    const handlePowNumbers = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('^')
        } else {
            const base = Number(firstNumber.replace(',', '.'));
            const exponent = Number(currentNumber.replace(',', '.'));
            if (!isNaN(base) && !isNaN(exponent)) {
                const result = Math.pow(base, exponent);
                setCurrentNumber(String(result).replace('.', ','));
                setOperation('');
            } else {
                console.error('Invalid numbers for exponentiation:', base, exponent);
            }
        }
    }

    const handleSquareRoot = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setOperation('√')
        } else {
            const value = Number(firstNumber.replace(',', '.'));
            if (!isNaN(value)) {
                const result = Math.sqrt(value);
                setCurrentNumber(String(result).replace('.', ','));
                setOperation('');
            } else {
                console.error('Invalid number for square root:', value);
            }
        }
    }

    const handleModule = () =>{
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('||')
        } else {
            const num1 = Number(firstNumber.replace(',', '.'));
            const num2 = Number(currentNumber.replace(',', '.'));
            if (!isNaN(num1) && !isNaN(num2)) {
                const result = num1 % num2;
                setCurrentNumber(String(result).replace('.', ','));
                setOperation('');
            } else {
                console.error('Invalid numbers for modulo operation:', num1, num2);
            }
        }
    }
    const handlePercentage = () =>{
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('%')
        } else {
            const base = Number(firstNumber.replace(',', '.'));
            const percent = Number(currentNumber.replace(',', '.'));
            if (!isNaN(base) && !isNaN(percent)) {
                const result = base * (percent / 100);
                setCurrentNumber(String(result).replace('.', ','));
                setOperation('');
            } else {
                console.error('Invalid numbers for percentage calculation:', base, percent);
            }
        }
    }
    
    const handleOnePerX = () => {
        const value = Number(currentNumber.replace(',', '.'));
        if (!isNaN(value) && value !== 0) {
            const result = 1 / value;
            setCurrentNumber(String(result).replace('.', ','));
            setOperation('');
        } else {
            console.error('Invalid number for 1/x operation:', value);
            setCurrentNumber('Error');
        }
    }
    const handleToggleSign = () => {
        setCurrentNumber((prev) => {
            return prev.startsWith('-') ? prev.slice(1) : '-' + prev;
        });
    }

    const handleAddDecimal = () => {
        setCurrentNumber((prev) => {
            if (!prev.includes(',')) {
                if (prev === '0') {
                    return '0,';
                }
                return prev + ',';
            }
            return prev;
        });
    }
  
    const handleEquals = () => {
        if(firstNumber !== '0' && operation !== '' && currentNumber !== 0){
            switch(operation){
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers();
                    break;
                case '/':
                    handleDivideNumbers();
                    break;
                case 'X':
                    handleMultiplyNumbers();
                    break;
                case '^':
                    handlePowNumbers();
                    break;
                case '√':
                    handlePowNumbers();
                    break;
                case '||':
                    handleModule();
                    break;
                case '%':
                    handlePercentage();
                    break;
                case '<-':
                    handleClearEntry();
                    break;
                case '1/x':
                    handleOnePerX();
                    break;
                case '+/-':
                    handleToggleSign();
                    break;
                case ',':
                    handleAddDecimal();
                    break;
                default:
                    break;
            }
        }
        else{
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));  
        }
    }
 
    return (
        <Container>
            <Content>
                <Input value={currentNumber}/>
                <Row>
                    <Button label="%" onClick={handlePercentage} />
                    <Button label="C" onClick={handleOnClear} />
                    <Button label="||" onClick={handleModule} />
                    <Button label="<-" onClick={handleClearEntry} />
                </Row>
                <Row>
                    <Button label="1/x" onClick={handleOnePerX} />
                    <Button label="^" onClick={handlePowNumbers} />
                    <Button label="√" onClick={handleSquareRoot} />
                    <Button label="/" onClick={handleDivideNumbers} />
                </Row>
                <Row>
                    <Button label="7" onClick={() => handleAddNumber('7')} />
                    <Button label="8" onClick={() => handleAddNumber('8')} />
                    <Button label="9" onClick={() => handleAddNumber('9')} />
                    <Button label="X" onClick={handleMultiplyNumbers} />
                </Row>
                <Row>
                    <Button label="4" onClick={() => handleAddNumber('4')} />
                    <Button label="5" onClick={() => handleAddNumber('5')} />
                    <Button label="6" onClick={() => handleAddNumber('6')} />
                    <Button label="-" onClick={handleMinusNumbers} />
                    
                </Row>
                <Row>
                    <Button label="1" onClick={() => handleAddNumber('1')} />
                    <Button label="2" onClick={() => handleAddNumber('2')} />
                    <Button label="3" onClick={() => handleAddNumber('3')} />
                    <Button label="+" onClick={handleSumNumbers} />
                </Row>
                <Row>
                    <Button label="+/-" onClick={handleToggleSign} />
                    <Button label="0" onClick={() => handleAddNumber('0')} />
                    <Button label="," onClick={handleAddDecimal} />
                    <Button label="=" onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    )

}

export default App;