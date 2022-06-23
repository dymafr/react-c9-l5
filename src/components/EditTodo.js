import React, { useState } from 'react';

export default function EditTodo({ todo, saveTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && value.length) {
      saveTodo(value);
      setValue('');
    }
  }

  function handleClick() {
    if (value.length) {
      saveTodo(value);
      setValue('');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Editer
      </button>
      <button onClick={cancelEditTodo} className="btn btn-reverse-primary">
        Annuler
      </button>
    </div>
  );
}
