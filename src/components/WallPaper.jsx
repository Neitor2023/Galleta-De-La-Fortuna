const WallPaper = (imagen) => {
    let imgen = "/galletas/fondo1.jpg"
    console.log("WallPaper llegue "+imagen)
    return(
        <div className="fondo" style={{backgroundImage: `url("${imgen}")`}}>
        </div>
    )
}

export default WallPaper