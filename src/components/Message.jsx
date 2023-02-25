const Message = ({ visible, dataSalida }) => {
    
    return(
        <div>
            <h1
            style={{display : visible ? "block": "none"}}
            >
                Este mensaje es un texto que desaparece y aparece
            </h1>
            <button onClick={ dataSalida }>
                Aparece/Desaparece
            </button>
        </div>
    );
}

export default Message;