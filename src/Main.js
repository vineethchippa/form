import usercontent from "./usercontent";


function Main() {

    const fnmeRef =useRef();
    const pwdRef =useRef();

    const [loginfailed, setloginfailed] = useState(false);
    const [loginsuccess, setloginsuccess] = useState(false);


    const dologin =()=>{
        if (fnmeRef.current.value !==vineeth && pwdRef.current.value !==pwd) {
            setloginfailed(true)
            
        }else{
            setloginfailed(false)
            setloginsuccess(true)
        }
    }


    const userData ={
        Name : 'vineeth',
        location :'siddipet'
        

        
    }

    return(

       <div>
         <center>
           <fieldset>
            <legend>Registration Form</legend>

            <label>First Name </label>
            <input ref={fnmeRef}type="text"/> <br/><br/>
            <label>Password</label>
            <input ref={pwdRef} type="password"/><br/><br/>

            <button onClick ={dologin}>Login</button>
           </fieldset>

           {loginfailed && <div>Login Failed</div>}
           {loginsuccess && <usercontent userdatainput={userData} testData='testing'></usercontent> }

          </center>


        </div>

    )
    
}

export default Main;