import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px',
        border: '1px solid #000',
        borderRadius: '4px',
        marginBottom: '15px'
    },
    strong: {
        marginRight: '15px'
    },
    input: {
        marginRight: '20px'
    },
    button: {
        marginLeft: 'auto'
    }
}

function TodoItem({ todo, index, onChange }) {

    const { removeTodo } = useContext(Context)
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                />
                <strong style={styles.strong}>{ index + 1 }</strong>
            </span>
            <span className={classes.join(' ')}>{ todo.title }</span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)} style={styles.button}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem