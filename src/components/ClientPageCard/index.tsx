import './styles.css';

export default function ClientPageCard() {
  return (
          <div className='box0'>
            <div className='box1'>
            
              <h2 className=''>Boas Vindas,</h2>
              <h1 className=''>NOME DO CLIENTE</h1>
              <input className='' type="text" placeholder="Email"/>
              <input className='' type="text" placeholder="Telefone"/>
              <input className='' type="text" placeholder="Cidade"/>
            
            </div>
            <div className='line1'>
              
            </div>
            <div className='box2'>

              <h2 className=''>Carros Cadastrados:</h2>
              <h2 className='red'>CARRO 1</h2>
              <input className='' type="text" placeholder="Marca"/>
              <input className='' type="text" placeholder="Modelo"/>
              <input className='' type="text" placeholder="Ano"/>
              <input className='' type="text" placeholder="Quilometargem"/>

              <h3 className='red'>+ adicionar novo carro</h3>

            </div>
          </div>
  );
}