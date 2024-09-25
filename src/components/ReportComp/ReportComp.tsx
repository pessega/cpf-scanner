import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

export interface Person {
  cpf: string;
  'first names': string;
  'full name': string;
  'data nascimento': string;
  sexo: string;
  bookmark?: string;
  [key: string]: any;
}

export interface SnapData {
  SNAP: Array<{
    pessoa: Person[];
  }>;
}

const Report: React.FC = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cpfInput, setCpfInput] = useState<string>('');
  const [dataLoaded, setDataLoaded] = useState<SnapData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api-result.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const jsonData: SnapData = await response.json();
        console.log('Dados carregados:', jsonData);
        setDataLoaded(jsonData);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar os dados');
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (!dataLoaded) {
      setError('Dados não carregados');
      return;
    }

    const bookmarkedPerson = dataLoaded.SNAP.flatMap(
      (snap) => snap.pessoa
    ).find((p) => p.bookmark === 'true');

    if (
      bookmarkedPerson &&
      bookmarkedPerson.cpf === cpfInput.replace(/\D/g, '')
    ) {
      setPerson(bookmarkedPerson);
      setError(null);
    } else {
      setError('CPF não encontrado');
      setPerson(null);
    }
  };

  return (
    <div>
      <InputMask
        mask="999.999.999-99"
        value={cpfInput}
        onChange={(e) => setCpfInput(e.target.value)}
        placeholder="Digite o CPF"
      />
      <button onClick={handleSearch}>Buscar</button>{' '}
      {error && <div>{error}</div>}
      {person && (
        <div>
          <p>
            <strong>Nome Completo:</strong> {person['full name']}
          </p>
          <p>
            <strong>CPF:</strong> {person.cpf}
          </p>
          <p>
            <strong>Data de Nascimento:</strong> {person['data nascimento']}
          </p>
          <p>
            <strong>Profissão:</strong> {person.profissao}
          </p>
          <p>
            <strong>Sexo:</strong> {person.sexo}
          </p>
        </div>
      )}
    </div>
  );
};

export default Report;
