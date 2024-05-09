import './styles.css';

export default function ClientPageCard() {
  return (
          <div className='box0'>
            <div className='box1'>
            
              <h2 className=''>Boas Vindas,</h2>
              <h1 className=''>NOME DO CLIENTE</h1>
              {/* <input className='' type="text" placeholder="Email"/> */}
              <h3 className='info'>Glória Eudes</h3>
              {/* <input className='' type="text" placeholder="Telefone"/> */}
              <h3 className='info'>+55 11 96534-4821</h3>
              {/* <input className='' type="text" placeholder="Cidade"/> */}
              <h3 className='info'>Itaquaquecetuba</h3>
            
            </div>
            <div className='line1'>
              
            </div>
            <div className='box2'>

              <h2 className=''>Carros Cadastrados:</h2>
              <h2 className='red'>CARRO 1</h2>
              {/* <input className='' type="text" placeholder="Marca"/> */}
              <h3 className='info'>Mitsubishi</h3>
              {/* <input className='' type="text" placeholder="Modelo"/> */}
              <h3 className='info'>Outlander</h3>
              {/* <input className='' type="text" placeholder="Ano"/> */}
              <h3 className='info'>2022</h3>
              {/* <input className='' type="text" placeholder="Quilometargem"/> */}
              <h3 className='info'>43.000KM</h3>

              <h3 className='red'>+ adicionar novo carro</h3>

            </div>
          </div>
  );
}