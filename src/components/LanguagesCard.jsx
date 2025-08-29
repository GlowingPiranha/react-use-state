import React from 'react'

const LanguagesCard = ({ language }) => {
  if (!language) {
    return (
      <div className="card mt-3">
        <div className="card-body">
          <p className='card-text'>Nessun linguaggio selezionato</p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center">

      <div className="card mt-3 shadow-sm">
        <div className="card-body text-start">
          <h5 className='card-title'>{language.title}</h5>
          <p className='card-text'>{language.description}</p>
        </div>
      </div>
    </div>
  );
}

export default LanguagesCard;
