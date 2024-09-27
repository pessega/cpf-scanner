import React from 'react';
import {
  Container,
  ResultDataTitle,
  PersonDataWrapper,
  PersonDataTitle,
  AttributeWrapper,
} from './styles';

const formatCPF = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

interface PersonDataProps {
  person: {
    'full name'?: string;
    cpf: string;
    sexo?: string;
    'data nascimento'?: string;
    nacionalidade?: string;
    pais_nascimento?: string;
    estado_nascimento?: string;
    cidade_nascimento?: string;
    escolaridade?: string;
    ctps?: string;
    'pis/pasep'?: string;
    identidade?: string;
    'titulo de eleitor'?: string;
    'status receita'?: string;
    profissao?: string;

    telefones?: Array<{ operadora: string; 'phone number': string }>;
    enderecos?: Array<{ rua: string; cidade: string; estado: string }>;
    vinculos?: Array<{ 'full name': string; cpf: string }>;
  };
  email?: Array<{ 'email address': string }>;
}

const PersonData: React.FC<PersonDataProps> = ({ person, email }) => {
  const principalData = [
    { label: 'Nome Completo', value: person['full name'] },
    { label: 'Sexo', value: person.sexo },
    { label: 'Data de nascimento', value: person['data nascimento'] },
    { label: 'Nacionalidade', value: person.nacionalidade },
    { label: 'País de nascimento', value: person.pais_nascimento },
    { label: 'Estado de nascimento', value: person.estado_nascimento },
    { label: 'Cidade de nascimento', value: person.cidade_nascimento },
    { label: 'Escolaridade', value: person.escolaridade },
    { label: 'Profissão', value: person.profissao },
    { label: 'CTPS', value: person.ctps },
    { label: 'PIS/PASEP', value: person['pis/pasep'] },
    { label: 'Identidade', value: person.identidade },
    { label: 'Título de eleitor', value: person['titulo de eleitor'] },
    { label: 'Status receita', value: person['status receita'] },
  ];

  const emails = email || [];
  const telefones = person.telefones || [];
  const enderecos = person.enderecos || [];
  const vinculos = person.vinculos || [];

  return (
    <Container>
      <ResultDataTitle>
        <p>Relatório da consulta | CPF {formatCPF(person.cpf)}</p>
      </ResultDataTitle>

      {/* Dados principais */}
      <PersonDataTitle>
        <p>Dados principais</p>
      </PersonDataTitle>
      <PersonDataWrapper>
        {principalData.map(
          (item, index) =>
            item.value && (
              <AttributeWrapper key={index}>
                <div>
                  <strong>{item.label}:</strong>
                </div>
                <span>{item.value}</span>
              </AttributeWrapper>
            )
        )}
      </PersonDataWrapper>

      {/* Emails */}
      {email && (
        <PersonDataTitle>
          <p>Dados de contato</p>
        </PersonDataTitle>
      )}
      <PersonDataWrapper>
        {email &&
          email.map((email, index) => (
            <AttributeWrapper key={index}>
              <div>
                <strong>Email:</strong>
              </div>
              <span>{email['email address']}</span>
            </AttributeWrapper>
          ))}
      </PersonDataWrapper>
    </Container>
  );
};

export default PersonData;
