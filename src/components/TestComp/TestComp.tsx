import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import logoCPFScanner from '../../assets/logo-cpf.png';
import {
  ClearButton,
  Container,
  ErrorMessage,
  InputContainer,
  LinkedPersonWrapper,
  Logo,
  PersonDataTitle,
  PersonDataWrapper,
  ReportContainer,
  SearchButton,
} from './styles';
import Header from '../Header/Header';

type Person = {
  cpf?: string;
  'data nascimento'?: string;
  'first names': string;
  'full name': string;
  vinculo: string;
  endereco?: Adress[];
  telefone?: Phone[];
  bookmark?: string;

  sexo?: string;
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

  procon?: string;
};

type Business = {
  cnpj: string;
  vinculo: string;
  renda?: string;
  admissao?: string;
  endereco: Adress[];
  'razao social': string;
};

type Adress = {
  area?: string;
  'area code'?: string;
  'cep ou zipcode'?: string;
  bairro?: string;
  city?: string;
  complemento?: string;
  endereco: string;
  numero?: string;
  nome?: string;
  logradouro?: string;
  'telefone relacionado'?: string;
};

type Email = {
  'email address': string;
};

type Phone = {
  'phone number': string;
  operadora?: string;
  whatsapp?: string;
};

type SnapData = {
  email: Email[];
  empresa: Business[];
  endereco: Adress[];
  pessoa: Person[];
  telefone: Phone[];
};

type JsonData = {
  SNAP: SnapData[];
};

const formatCPF = (cpf: any) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const TestComp: React.FC = () => {
  const [data, setData] = useState<JsonData | null>(null);
  const [cpfInput, setCpfInput] = useState<string>('');
  const [showData, setShowData] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api-result.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error ao carregar dados:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  const snap = data.SNAP[0];

  const principalPerson = snap.pessoa.find((p) => p.bookmark === 'true');

  const handleSearchCPF = () => {
    if (principalPerson) {
      const cleanedCpfInput = cpfInput.replace(/\D/g, '');

      // console.log('CPF Inserido:', cleanedCpfInput);
      // console.log('CPF da Pessoa Principal:', principalPerson.cpf);

      if (principalPerson.cpf === cleanedCpfInput) {
        setShowData(true);
        setError(null);
      } else {
        setError('CPF não encontrado');
        setShowData(false);
      }
    } else {
      alert('Nenhuma pessoa principal com bookmark encontrada.');
      setShowData(false);
    }
  };

  const handleClearInput = () => {
    setCpfInput('');
    setShowData(false);
    setError(null);
  };

  return (
    <>
      <Header />
      <Container>
        {/* Input para CPF */}
        <ReportContainer>
          <Logo src={logoCPFScanner} alt="Logo CPF Scanner" />
          <InputContainer>
            <InputMask
              mask="999.999.999-99"
              value={cpfInput}
              onChange={(e) => setCpfInput(e.target.value)}
              placeholder="Digite o CPF"
            />
            {cpfInput && (
              <ClearButton onClick={handleClearInput}>×</ClearButton>
            )}
          </InputContainer>
          <SearchButton onClick={handleSearchCPF}>Buscar</SearchButton>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ReportContainer>

        {showData && (
          <>
            {/* Pessoa principal */}
            <PersonDataTitle>
              <h2>Pessoa Principal</h2>
            </PersonDataTitle>
            <PersonDataWrapper>
              {principalPerson ? (
                <div>
                  <p>Nome: {principalPerson['full name']}</p>
                  <p>
                    CPF: {formatCPF(principalPerson.cpf) || 'Não informado'}
                  </p>

                  {principalPerson.telefone && (
                    <p>
                      Telefone:{' '}
                      {principalPerson.telefone
                        .map((t) => t['phone number'])
                        .join(', ')}
                    </p>
                  )}
                </div>
              ) : (
                <p>Nenhuma pessoa principal com bookmark encontrada.</p>
              )}
            </PersonDataWrapper>

            {/* Emails */}
            {snap.email && (
              <>
                <h2>Emails</h2>
                {snap.email.map((e, index) => (
                  <p key={index}>{e['email address']}</p>
                ))}
              </>
            )}

            {/* Telefones */}
            <PersonDataWrapper>
              {snap.telefone && (
                <>
                  <h2>Telefones</h2>
                  {snap.telefone.map((t, index) => (
                    <p key={index}>
                      {t['phone number']}{' '}
                      <span>
                        {' '}
                        {t.operadora && ` - Operadora: ${t.operadora} `}
                      </span>
                      {t.whatsapp === 'Sim' ? `(WhatsApp)` : ''}
                    </p>
                  ))}
                </>
              )}
            </PersonDataWrapper>

            {/* Endereços gerais */}
            <PersonDataWrapper>
              {snap.endereco && (
                <>
                  <h2>Endereços</h2>

                  {snap.endereco.map((end, index) => (
                    <div key={index}>
                      {end.logradouro && <span>{end.logradouro}, </span>}
                      {end.complemento && <span>{end.complemento}, </span>}
                      {end.city && <span>{end.city} -</span>}
                      {end.area && <span> {end.area}</span>}
                      {end['area code'] && (
                        <span> - CEP: {end['area code']}</span>
                      )}
                    </div>
                  ))}
                </>
              )}
            </PersonDataWrapper>

            {/* Pessoas vinculadas */}
            {snap.pessoa.filter((p) => p.bookmark !== 'true') && (
              <>
                <PersonDataTitle>
                  <h2>Pessoas vinculadas</h2>
                </PersonDataTitle>
                {snap.pessoa
                  .filter((p) => p.bookmark !== 'true')
                  .map((p, index) => (
                    <LinkedPersonWrapper key={index}>
                      <p>
                        <strong>Nome:</strong> {p['full name']}
                      </p>
                      <p>Vínculo: {p.vinculo}</p>
                      <p>CPF: {p.cpf || <span>Não informado</span>}</p>
                      <p>
                        Endereço:{' '}
                        {p.endereco?.map((e) => e.endereco) || (
                          <span>Não informado</span>
                        )}
                      </p>
                      {p.telefone && (
                        <>
                          <p>
                            Telefone:{' '}
                            {p.telefone
                              .map((t) => t['phone number'])
                              .join(', ')}
                          </p>
                        </>
                      )}
                    </LinkedPersonWrapper>
                  ))}
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default TestComp;
