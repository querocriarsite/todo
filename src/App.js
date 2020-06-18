import React, {useState, useEffect} from 'react';
import GlobalStyle from './styles/global';
import {SearchBox} from './components/searchBox/input';
import {ButtonTodo, Item, Titulo} from './components/searchBox/style';

const App = () => {
    const [list, setList] = useState([]);

    const addAction = (newItem) => {
        const newList = [...list, {title: newItem, done: false}];
        setList(newList);
    };

    const handleToggleDone = (index) => {
        const newList = [...list];
        newList[index].done = !newList[index].done;
        setList(newList);
    };

    const excluirTodo = (posicao) => {
        list.splice(posicao, 1);
        if (list.length === 0)
            localStorage.clear();
        const newList = [...list];
        setList(newList);
    };

    useEffect(() => {
        if (list.length !== 0) {
            localStorage.setItem('todoList', JSON.stringify(list));
        }
    }, [list]);

    useEffect(() => {
        if (localStorage.getItem('todoList')) {
            setList(
                JSON.parse(localStorage.getItem('todoList'))
            );
        }
    }, []);

    return <>
        <GlobalStyle/>

        <Titulo>Lista de Tarefas</Titulo>

        <SearchBox
            frasePadrao="Adicione um item..."
            onEnter={addAction}
        />

        <hr/>

        <ul>
            {list.map((item, index) => (
                <Item key={index}>
                    {item.done &&
                        <del>{item.title}</del>
                    }
                    {!item.done &&
                    item.title
                    }
                    <div>
                        <ButtonTodo
                            cor={[item.done && '#5cffa5', !item.done && '#4cbdff']}
                            onClick={() => handleToggleDone(index)}>
                            {item.done && 'Desfazer'}
                            {!item.done && 'Fazer'}
                        </ButtonTodo>
                        <ButtonTodo cor={'#ff5b5c'}
                                    onClick={() => excluirTodo(index)}>
                            Excluir
                        </ButtonTodo>
                    </div>
                </Item>
            ))}
        </ul>
    </>
};

export default App;