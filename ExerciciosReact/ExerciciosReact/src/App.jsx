import CardTrilha from "./Components/CardTrilha"
import "./App.css"


function App() {
  
  const listaTrilhas = [
    {
      nomeTrilha:"Trilha da Costa da Lagoa",
      cidade:"Florianópolis",
      estado:"SC",
      duracao: 120,
      trajeto: 4,
      dificuldade:"iniciante",
      tipo:"caminhada/trekking",
      nomeUsuario:"Luiz Henrique",
      urlImagem:"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ]

  return (
    <div className="container">
      <h1 className="titulo">Explore Trilhas Incríveis</h1>
    {
      listaTrilhas.map((trilha, index)=> (
    
     <CardTrilha dadosTrilha={trilha} key={index}/>

    ))
  }
    </div>
  )
}

export default App
