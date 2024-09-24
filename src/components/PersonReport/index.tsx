// import React, { useEffect, useState } from 'react';

// const PersonReport: React.FC = ({}) => {
//   const [data, setData] = useState(null);
//   const [mensagem, setMensagem] = useState('');

//   useEffect(() => {
//     fetch('/data/api-result.json')
//       .then((response) => response.json())
//       .then((data) => {
//         const foundPerson = data;
//         // const foundPerson = buscarPessoaPorCPF(data, '10937593840');
//         if (foundPerson) {
//           setData(foundPerson);
//         } else {
//           setMensagem('CPF não encontrado');
//         }
//       })
//       .catch((error) => {
//         console.error('Erro ao carregar o arquivo JSON:', error);
//       });
//   }, []);

//   const buscarPessoaPorCPF = (data, cpfBuscado) => {
//     const registros = data.SNAP;
//     for (const registro of registros) {
//       const pessoas = registro.pessoa;
//       const pessoaFiltrada = pessoas.find(
//         (pessoa) => pessoa.cpf === cpfBuscado && pessoa.bookmark === 'true'
//       );
//       if (pessoaFiltrada) {
//         return pessoaFiltrada;
//       }
//     }
//     return null;
//   };

//   return (
//     <>
//       <div>
//         <h1>Relatório de Dados Pessoais</h1>
//         {/* {mensagem ? <Mensagem mensagem={mensagem} /> : null} */}
//         {data}
//         {/* {data ? <PessoaInfo dados={dados} /> : null} */}
//       </div>
//     </>
//   );
// };

// export default PersonReport;
