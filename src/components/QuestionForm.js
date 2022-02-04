import React,{useState} from 'react';

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('f')
    const checkValue = (value) => {
        if(!value.includes('f')){
            setInputValue(value)
        }
    }
    return (
        <div>
            {isInputError && (
                <div style={{color:'red'}}>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Cliquez</button>
        </div>
    )
}

export default QuestionForm;