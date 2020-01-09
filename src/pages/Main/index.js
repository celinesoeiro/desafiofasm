import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const schema = Yup.object().shape({
  cnpj: Yup.string().required('Esse campo é obrigatório'),
  rs: Yup.string().required('Esse campo é obrigatório'),
  nome: Yup.string().required('Esse campo é obrigatório'),
  cpf: Yup.number()
    .min(11)
    .required('Esse campo é obrigatório'),
  rua: Yup.string().required('Esse campo é obrigatório'),
  bairro: Yup.string().required('Esse campo é obrigatório'),
  cep: Yup.number()
    .min(8)
    .required('Esse campo é obrigatório'),
  cidade: Yup.string().required('Esse campo é obrigatório'),
  estado: Yup.string().required('Esse campo é obrigatório'),
});

export default function Main() {
  function handleSubmit(data) {}

  return (
    <Container>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQE0F_h1Cf4ZRQ/company-logo_200_200/0?e=1586390400&v=beta&t=p2I6GusPQsLUDg-EdzGe0fkJH5LzEjpBIRPeJJT5wS0"
        alt="FasmInvest"
      />
      <h1>Cadastro de empresas</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="cnpj" placeholder="CNPJ" />
        <Input name="rs" placeholder="Razão social" />
        <Input name="nome" placeholder="Nome do responsável" />
        <Input name="cpf" placeholder="CPF (somente números)" />
        <h2>Endereço</h2>
        <Input name="rua" placeholder="Rua/Avenida..." />
        <Input name="bairro" placeholder="Bairro" />
        <Input name="cep" placeholder="CEP (somente números)" />
        <Input name="complemento" placeholder="Complemento" />
        <Input name="cidade" placeholder="Cidade" />
        <Input name="estado" placeholder="Estado" />
        <button type="submit">Cadastrar</button>
        <Link to="/list">Empresas cadastradas</Link>
      </Form>
    </Container>
  );
}
