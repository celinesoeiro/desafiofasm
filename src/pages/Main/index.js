import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const schema = Yup.object().shape({
  cnpj: Yup.string()
    .max(10)
    .required('Esse campo é obrigatório'),
  rs: Yup.string().required('Esse campo é obrigatório'),
  nome: Yup.string().required('Esse campo é obrigatório'),
  cpf: Yup.string()
    .max(11)
    .required('Esse campo é obrigatório'),
  rua: Yup.string().required('Esse campo é obrigatório'),
  bairro: Yup.string().required('Esse campo é obrigatório'),
  cep: Yup.string()
    .max(8)
    .required('Esse campo é obrigatório'),
  cidade: Yup.string().required('Esse campo é obrigatório'),
  estado: Yup.string().required('Esse campo é obrigatório'),
});

export default function Main() {
  const [company, setCompany] = useState({
    cpnj: '',
    cpf: '',
    cep: '',
    rs: '',
    nome: '',
    rua: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  useEffect(() => {
    localStorage.setItem('company', JSON.stringify(company));
  }, [company]);

  return (
    <Container>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQE0F_h1Cf4ZRQ/company-logo_200_200/0?e=1586390400&v=beta&t=p2I6GusPQsLUDg-EdzGe0fkJH5LzEjpBIRPeJJT5wS0"
        alt="FasmInvest"
      />
      <h1>Cadastro de empresas</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="cnpj"
          placeholder="CNPJ"
          value={company.cnpj}
          onChange={e => setCompany({ ...company, cnpj: e.target.value })}
        />
        <Input
          name="rs"
          value={company.rs}
          placeholder="Razão social"
          onChange={e => setCompany({ ...company, rs: e.target.value })}
        />
        <Input
          name="nome"
          vale={company.nome}
          placeholder="Nome do responsável"
          onChange={e => setCompany({ ...company, nome: e.target.value })}
        />
        <Input
          name="cpf"
          value={company.cpf}
          placeholder="CPF"
          onChange={e => setCompany({ ...company, cpf: e.target.value })}
        />
        <h2>Endereço</h2>
        <Input
          name="rua"
          value={company.rua}
          placeholder="Rua/Avenida..."
          onChange={e => setCompany({ ...company, rua: e.target.value })}
        />
        <Input
          name="bairro"
          value={company.bairro}
          placeholder="Bairro"
          onChange={e => setCompany({ ...company, bairro: e.target.value })}
        />
        <Input
          name="cep"
          value={company.cep}
          placeholder="CEP"
          onChange={e => setCompany({ ...company, cep: e.target.value })}
        />
        <Input
          name="complemento"
          value={company.complemento}
          placeholder="Complemento"
          onChange={e =>
            setCompany({ ...company, complemento: e.target.value })
          }
        />
        <Input
          name="cidade"
          value={company.cidade}
          placeholder="Cidade"
          onChange={e => setCompany({ ...company, cidade: e.target.value })}
        />
        <Input
          name="estado"
          value={company.estado}
          placeholder="Estado"
          onChange={e => setCompany({ ...company, estado: e.target.value })}
        />
        <button type="submit" onClick={() => handleSubmit}>
          Cadastrar
        </button>
        <Link to="/list">Empresas cadastradas</Link>
      </Form>
    </Container>
  );
}
