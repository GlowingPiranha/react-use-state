import React from 'react'

const LanguagesButton = ({ lang, selected, onSelected }) => {
  return (
    <button
      className={`btn me-2 ${selected?.id === lang.id ? "btn-primary" : "btn-outline-primary"}`}
      onClick={() => onSelected(lang)}
    >
      {lang.title}
    </button>
  );
};


export default LanguagesButton;