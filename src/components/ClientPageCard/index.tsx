import './styles.css';

export default function ClientPageCard() {
  return (
          <div className='client-page-box'>
            <div className='client-info'>
            
              <h2 className='welcome-title'>Boas Vindas,</h2>
              <h1 className='client-name'>NOME DO CLIENTE</h1>
              {/* <input className='' type="text" placeholder="Email"/> */}
              <h3 className='info-client'>Glória Eudes</h3>
              {/* <input className='' type="text" placeholder="Telefone"/> */}
              <h3 className='info-client'>+55 11 96534-4821</h3>
              {/* <input className='' type="text" placeholder="Cidade"/> */}
              <h3 className='info-client'>Itaquaquecetuba</h3>
            
            </div>
            <div className='line1'>
              
            </div>
            <div className='car-info'>

              <h2 className='registered-car'>Carros Cadastrados:</h2>
              <h2 className='red'>CARRO 1</h2>
              {/* <input className='' type="text" placeholder="Marca"/> */}
              <h3 className='info-client'>Mitsubishi</h3>
              {/* <input className='' type="text" placeholder="Modelo"/> */}
              <h3 className='info-client'>Outlander</h3>
              {/* <input className='' type="text" placeholder="Ano"/> */}
              <h3 className='info-client'>2022</h3>
              {/* <input className='' type="text" placeholder="Quilometargem"/> */}
              <h3 className='info'>43.000KM</h3>

              <h3 className='add-car'>+ adicionar novo carro</h3>

            </div>
          </div>
  );
}