import dados from "../service/dados"

function DesenhosAnimados() {
        return (
        <div> 
           {dados.map(desenhos =>{
             return (
                 <div>
                 <h2> {desenhos.nome} </h2>
                 <img src={desenhos.imagem} alt={desenhos.imagem}/>
                 </div>
             )
           })}
        </div>
        )
}

export default DesenhosAnimados;