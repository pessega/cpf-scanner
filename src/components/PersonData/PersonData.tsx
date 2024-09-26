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

  const contactsDetails = [
    { label: 'Nome Completo', value: person['full name'] },
  ];

  return (
    <Container>
      <ResultDataTitle>
        <p>Relatório da consulta | CPF {formatCPF(person.cpf)}</p>
      </ResultDataTitle>
      <PersonDataTitle>
        <p>Dados principais</p>
      </PersonDataTitle>
      <PersonDataWrapper>
        {person['full name'] && (
          <AttributeWrapper>
            <div>
              <strong>Nome Completo:</strong>
            </div>
            <span> {person['full name']}</span>
          </AttributeWrapper>
        )}
        {person.sexo && (
          <AttributeWrapper>
            <div>
              <strong>Sexo:</strong>
            </div>
            <span>{person.sexo}</span>
          </AttributeWrapper>
        )}
        {person['data nascimento'] && (
          <AttributeWrapper>
            <div>
              <strong>Data de nascimento:</strong>
            </div>
            <span>{person['data nascimento']}</span>
          </AttributeWrapper>
        )}
        {person.nacionalidade && (
          <AttributeWrapper>
            <div>
              <strong>Nacionalidade:</strong>
            </div>
            <span>{person.nacionalidade}</span>
          </AttributeWrapper>
        )}
        {person.pais_nascimento && (
          <AttributeWrapper>
            <div>
              <strong>País de nascimento:</strong>
            </div>
            <span>{person.pais_nascimento}</span>
          </AttributeWrapper>
        )}
        {person.estado_nascimento && (
          <AttributeWrapper>
            <div>
              <strong>Estado de nascimento:</strong>
            </div>
            <span>{person.estado_nascimento}</span>
          </AttributeWrapper>
        )}
        {person.cidade_nascimento && (
          <AttributeWrapper>
            <div>
              <strong>Cidade de nascimento:</strong>
            </div>
            <span>{person.cidade_nascimento}</span>
          </AttributeWrapper>
        )}
        {person.escolaridade && (
          <AttributeWrapper>
            <div>
              {' '}
              <strong>Escolaridade:</strong>
            </div>
            <span>{person.escolaridade}</span>
          </AttributeWrapper>
        )}
        {person.profissao && (
          <AttributeWrapper>
            <div>
              <strong>Profissao:</strong>
            </div>
            <span>{person.profissao}</span>
          </AttributeWrapper>
        )}
        {person.ctps && (
          <AttributeWrapper>
            <div>
              {' '}
              <strong>CTPS:</strong>
            </div>
            <span>{person.ctps}</span>
          </AttributeWrapper>
        )}
        {person['pis/pasep'] && (
          <AttributeWrapper>
            <div>
              {' '}
              <strong>PIS/PASEP:</strong>
            </div>
            <span>{person['pis/pasep']}</span>
          </AttributeWrapper>
        )}
        {person.identidade && (
          <AttributeWrapper>
            <div>
              {' '}
              <strong>Identidade:</strong>
            </div>
            <span>{person.identidade}</span>
          </AttributeWrapper>
        )}
        {person['titulo de eleitor'] && (
          <AttributeWrapper>
            <div>
              {' '}
              <strong>Titulo de eleitor:</strong>
            </div>
            <span>{person['titulo de eleitor']}</span>
          </AttributeWrapper>
        )}
        {person['status receita'] && (
          <AttributeWrapper>
            <div>
              {' '}
              <strong>Status receita:</strong>
            </div>
            <span>{person['status receita']}</span>
          </AttributeWrapper>
        )}
      </PersonDataWrapper>

      <PersonDataTitle>
        <p>Dados de contato</p>
      </PersonDataTitle>

      <PersonDataWrapper>{/*insira o código aqui*/}</PersonDataWrapper>
    </Container>
  );
};

export default PersonData;
