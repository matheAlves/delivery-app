import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import ClientContext from './ClientContext';

function ClientProvider({ children }) {
  const contextObject = useMemo(() => ({}), []);

  return (
    <ClientContext.Provider value={ contextObject }>
      { children }
    </ClientContext.Provider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ClientProvider;
