import React, {useState} from "react";
import {InputText} from './style';

export const SearchBox = (props) => {
    const [texto, setTexto] = useState('');

    const handleKeyUP = (e) => {
        if (texto !== '') {
            if (e.keyCode === 13) {
                if (props.onEnter) {
                    props.onEnter(texto);
                }
                setTexto('');
            }
        }
    };

    const guardarItem = (e) => {
        setTexto(e.target.value);
    };

    return (
        <InputText
            type="text"
            value={texto}
            onChange={guardarItem}
            onKeyUp={handleKeyUP}
            placeholder={props.frasePadrao ?? "Digite Alguma coisa"}
        />
    )
};