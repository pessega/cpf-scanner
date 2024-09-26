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

    emails?: Array<{ 'email address': string }>;
    telefones?: Array<{ operadora: string; 'phone number': string }>;
  };
}

const PersonData: React.FC<PersonDataProps> = ({ person }) => {
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

  const emails = person.emails || [];
  const telefones = person.telefones || [];

  return (
    <Container>
      <ResultDataTitle>
        <p>Relatório da consulta | CPF {formatCPF(person.cpf)}</p>
      </ResultDataTitle>
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

      <PersonDataWrapper>{/*insira o código aqui*/}</PersonDataWrapper>
    </Container>
  );
};

export default PersonData;
