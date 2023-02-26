const Phrase = ({phraseData}) => {
    console.log(phraseData.phrase);
    
  return (
    <div>
      <h1>{ phraseData.phrase }</h1>
    </div>
  )
}

export default Phrase