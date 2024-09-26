import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  ReportContainer,
  InputContainer,
  ClearButton,
  SearchButton,
  ErrorMessage,
} from './styles';
import PersonData from '../PersonData/PersonData';

export interface Person {
  cpf: string;
  bookmark?: string;
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
  const [searchClicked, setSearchClicked] = useState<boolean>(false);

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
    setSearchClicked(true);
  };

  const handleClear = () => {
    setCpfInput('');
    setPerson(null);
    setError(null);
    setSearchClicked(false);
  };

  return (
    <ReportContainer>
      <InputContainer>
        <InputMask
          mask="999.999.999-99"
          value={cpfInput}
          onChange={(e) => setCpfInput(e.target.value)}
          placeholder="Digite o CPF"
          color="#FFF"
        />
        {searchClicked && cpfInput && (
          <ClearButton onClick={handleClear}>&times;</ClearButton>
        )}
      </InputContainer>
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {person && <PersonData person={person} />}{' '}
    </ReportContainer>
  );
};

export default Report;
