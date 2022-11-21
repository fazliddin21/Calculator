import{ React , useState ,useRef , useEffect }from 'react'
import s from'./Kal.module.css';
const Kal = () => {
    let [kal ,  setKal] = useState("");
    let inputkal = useRef(null);
    useEffect(() =>inputkal.current.focus());
    function kalTarget(e){
        setKal(kal.concat(e.target.name));
    }
    function ochorgich(){
        setKal("");
    }
    function ravno(){
        try{
            setKal(eval(kal).toString());

        }catch(error){
            setKal("Error");
        }
    }
  return (
    <div className={s.appp}>  
    <div className={s.header}> <form><input type="text" value={kal} ref={inputkal}/></form> </div>
    <div className={s.btnheader}>
      <button name='1' onClick={kalTarget}>1</button>
      <button name='2' onClick={kalTarget}>2</button>
      <button name='3' onClick={kalTarget}>3</button>
      <button name='+' className={s.yellow} onClick={kalTarget}>+</button>
    </div>
    <div className={s.btnheader}>
      <button name='4' onClick={kalTarget}>4</button>
      <button name='5' onClick={kalTarget}>5</button>
      <button name='6' onClick={kalTarget}>6</button>
      <button name='-' className={s.yellow} onClick={kalTarget}>-</button>
    </div>
    <div className={s.btnheader}>
      <button name='7' onClick={kalTarget}>7</button>
      <button name='8' onClick={kalTarget}>8</button>
      <button name='9' onClick={kalTarget}>9</button>
      <button name='/' className={s.yellow} onClick={kalTarget}>/</button>
    </div>
    <div className={s.btnheader}>
      <button id="ochorgich" className={s.red} onClick={ochorgich} >c</button>
      <button name='0' onClick={kalTarget}>0</button>
      <button onClick={ravno}>=</button>
      <button name='*' className={s.yellow} onClick={kalTarget}>*</button>
    </div>
    
</div>
  )
}

export default Kal