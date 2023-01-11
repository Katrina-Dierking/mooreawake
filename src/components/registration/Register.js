import React, {useState, useEffect, useRef} from 'react'
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;


export default function Register () {

    const userRef= useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
 
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(()=> {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        //confirmation will check any time pwd or matchPwd changes
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(()=>{
        setErrMsg('');
        //any time one of these changes, we will clear out the error message because it has been read
    }, [user, pwd, matchPwd])

   return (
    <section>
        <p  ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
        >
        {errMsg}
        </p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                type="text"
                id="username"
                ref={useRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                //accessibility for screen reader
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={()=> setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />

            <p id="uidnote"
                className={userFocus && user && !validName ? "instructions": "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br/>
                Must begin with a letter. <br />
                Letters, numbers, underscores, hyphens allowed.
            </p>
        </form>
    </section>
  )
}


