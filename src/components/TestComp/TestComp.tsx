import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { ErrorMessage } from './styles';

type Endereco = {
  area: string;
  'area code'?: string;
  bairro: string;
  city: string;
  complemento?: string;
  endereco: string;
  numero?: string;
};

type Pessoa = {
  cpf?: string;
  'data nascimento'?: string;
  'first names': string;
  'full name': string;
  vinculo: string;
  endereco?: Endereco[];
  telefone?: Telefone[];
  bookmark?: string; // Aqui, bookmark é string | undefined
};

type Empresa = {
  cnpj: string;
  vinculo: string;
  renda?: string;
  admissao?: string;
  endereco: Endereco[];
  'razao social': string;
};

type Email = {
  'email address': string;
};

type Telefone = {
  'phone number': string;
  operadora?: string;
  whatsapp?: string;
};

type SnapData = {
  email: Email[];
  empresa: Empresa[];
  endereco: Endereco[];
  pessoa: Pessoa[];
  telefone: Telefone[];
};

type JsonData = {
  SNAP: SnapData[];
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

  const snap = data.SNAP[0]; // Acessando o primeiro item do array SNAP

  // Encontrar a pessoa com 'bookmark = true'
  const pessoaPrincipal = snap.pessoa.find((p) => p.bookmark === 'true'); // Comparar com string 'true'

  // Função para buscar dados
  const handleBuscarCpf = () => {
    if (pessoaPrincipal) {
      // Remover todos os caracteres não numéricos do CPF inserido
      const cleanedCpfInput = cpfInput.replace(/\D/g, '');

      // Imprimir no console para depuração
      console.log('CPF Inserido:', cleanedCpfInput);
      console.log('CPF da Pessoa Principal:', pessoaPrincipal.cpf);

      // Comparar CPF inserido com o CPF da pessoa principal
      if (pessoaPrincipal.cpf === cleanedCpfInput) {
        setShowData(true);
      } else {
        setError('CPF não encontrado');
        setShowData(false);
      }
    } else {
      alert('Nenhuma pessoa principal com bookmark encontrada.');
      setShowData(false);
    }
  };

  return (
    <div>
      {/* Input para CPF */}
      <h2>Buscar CPF</h2>
      <InputMask
        mask="999.999.999-99"
        value={cpfInput}
        onChange={(e) => setCpfInput(e.target.value)}
        placeholder="Digite o CPF"
      />
      <button onClick={handleBuscarCpf}>Buscar CPF</button>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {showData && (
        <>
          {/* Exibir a pessoa principal */}
          <h2>Pessoa Principal</h2>
          {pessoaPrincipal ? (
            <div>
              <p>Nome: {pessoaPrincipal['full name']}</p>
              <p>CPF: {pessoaPrincipal.cpf || 'Não informado'}</p>
              <p>
                Endereço:{' '}
                {pessoaPrincipal.endereco?.map((e) => e.endereco).join(', ')}
              </p>
              {pessoaPrincipal.telefone && (
                <p>
                  Telefone:{' '}
                  {pessoaPrincipal.telefone
                    .map((t) => t['phone number'])
                    .join(', ')}
                </p>
              )}
            </div>
          ) : (
            <p>Nenhuma pessoa principal com bookmark encontrada.</p>
          )}

          {/* Exibir os emails */}
          <h2>Emails</h2>
          {snap.email.map((e, index) => (
            <p key={index}>{e['email address']}</p>
          ))}

          {/* Exibir os telefones */}
          <h2>Telefones</h2>
          {snap.telefone.map((t, index) => (
            <p key={index}>
              {t['phone number']}{' '}
              {t.whatsapp ? `(WhatsApp: ${t.whatsapp})` : ''}
            </p>
          ))}

          {/* Exibir os endereços gerais */}
          <h2>Endereços</h2>
          {snap.endereco.map((end, index) => (
            <p key={index}>
              {end.endereco}, {end.bairro}, {end.city}
            </p>
          ))}

          {/* Exibir outras pessoas vinculadas */}
          <h2>Outras Pessoas Vinculadas</h2>
          {snap.pessoa
            .filter((p) => p.bookmark !== 'true') // Filtra as que não têm bookmark
            .map((p, index) => (
              <div key={index}>
                <p>Nome: {p['full name']}</p>
                <p>CPF: {p.cpf || 'Não informado'}</p>
                <p>Endereço: {p.endereco?.map((e) => e.endereco).join(', ')}</p>
                {p.telefone && (
                  <p>
                    Telefone:{' '}
                    {p.telefone.map((t) => t['phone number']).join(', ')}
                  </p>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default TestComp;
