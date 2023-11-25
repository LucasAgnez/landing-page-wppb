import { MdArrowDropDown } from "react-icons/md";
import "../styles/components/colapse.css"
import { useState } from "react";


const PeR = (props) => {

    const [mostra, setMostra] = useState(false)

    function show(){
        setMostra(!mostra)
    }
    
    return(
    <main className="colapse">
        <div className="cabeca" onClick={() => show()}>
                <b>{props.pergunta}</b>
                {mostra ? 
                    <MdArrowDropDown style={{
                        transition: "transform .25s", 
                        transform: `rotate(180deg)`
                        }}/>: 
                    <MdArrowDropDown style={{
                        transition: "transform .25s", 
                        transform: `rotate(0deg)`
                        }}/>
                }
        </div>
        <p className= {mostra ? "resposta show" : 'resposta'}>{props.resposta} </p>
    </main>
    );
}

export default PeR;
