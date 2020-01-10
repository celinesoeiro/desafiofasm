import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

export default function List() {
  const [companies, setCompanies] = useState();

  useEffect(async () => {
    const result = await api.get('/');

    console.tron.log(result.data);

    setCompanies(result.data);
  }, []);

  const teste = [0, 1, 2, 3, 4];

  return (
    <Container>
      {teste.map(item => (
        <li key={item.id}>
          <span>{item}</span>
        </li>
      ))}
      <Link to="/">Voltar</Link>
    </Container>
  );
}
