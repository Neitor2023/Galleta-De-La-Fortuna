const Phrase = ({phraseData}) => {
  return(
    <div className="frase">
      <h1>{ phraseData.phrase }</h1>
      <br />
      <h2>Autor: {phraseData.author} </h2>
    </div>
  )
}

export default Phrase