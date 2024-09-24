import React from 'react';

export interface PersonDataProps {
  fullName: string;
  cpf: string;
  birthDate: string;
  profession: string;
  education: string;
  nationality: string;
  identityDoc: string;
}

const Persondata: React.FC<PersonDataProps> = ({
  fullName,
  cpf,
  birthDate,
  profession,
  education,
  nationality,
  identityDoc,
}) => {
  return (
    <div>
      <p>
        <strong>Nome completo:</strong> {fullName}
      </p>
      <p>
        <strong>CPF:</strong> {cpf}
      </p>
      <p>
        <strong>data de nascimento:</strong> {birthDate}
      </p>
      <p>
        <strong>Profissão:</strong> {profession}
      </p>
      <p>
        <strong>Escolaridade:</strong> {education}
      </p>
      <p>
        <strong>Nacionalidade:</strong> {nationality}
      </p>
      <p>
        <strong>Identidade:</strong> {identityDoc}
      </p>
      {/* <p>
        <strong>PIS/PASEP:</strong> {data['pis/pasep']}
      </p>
      <p>
        <strong>Estado de nascimento:</strong> {data['estado_nascimento']}
      </p>
      <p>
        <strong>Cidade de nascimento:</strong> {data['cidade_nascimento']}
      </p>
      <p>
        <strong>Status Receita:</strong> {data['status receita']}
      </p> */}
    </div>
  );
};
