import './styles.css';

import { Link } from 'react-router-dom';

export default function Project() {
  return (
          <div className='box0'>
            <div className='box1'>
              <h2>Sobre o Projeto:</h2>
              <h3 className='text'>                    

                    Integrantes e Função: <br />
                    André Luiz Viana Ribeiro rm553702 - Desenvolvimento Front End <br />
                    Bárbara Blauth Schmidt rm554124 - Product Manager e Product Owner <br />
                    Gustavo Henrique de Jesus rm553554 - Desenvolvimento Front End <br />
                    Sivaldo Stolarz de Lima rm552727 - Desenvolvimento Front End <br />
                    Paulo Sergio Morais Gonçalves rm553012 - Tech Lead e Desenvolvimento Front End 
              </h3>
              <h3 className='text '>
                    Recursos e conteúdo utilizados:
                    HTML 5, CSS, React, JavaScript e JSON. 
                    Scrum, Pitch, Canva.
              </h3>

              <div className='button'>
                <Link to="/">
                  <h4>VOLTAR</h4>
                </Link>
              </div>

            </div>
            
            </div>

            

          
  );
}