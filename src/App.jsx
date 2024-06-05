import { useState } from "react"
import { LoginPage, Dashboard } from "./Compo/Main"
import './style.css'

function App() {

  const [login, setLogin] = useState(false)

  const logIn = () => {
    setLogin(true)

  }
  const SignOut = () => {
    setLogin(false)
  }



  return (
    <>
      {
        login ? (
          <>
            <div align="center" className="log shadow">
              <Dashboard />
              <button onClick={() => SignOut()}class="button login-submit" >
                        <span class="button__text">LogOut</span>
                      </button>
              {/* <button onClick={() => SignOut()}>LogOut</button> */}
            </div>
          </>
        ) : (
          <>
            <div align="center">
              <LoginPage />
           <div className="container">
  <div className="screen">
    <div className="screen__content">
      <form className="login">
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input type="text" className="login__input" placeholder="User name / Email" />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input type="password" className="login__input" placeholder="Password" />
        </div>
        <button onclick="{() => logIn()}" class="button login__submit" >
          <span className="button__text">Log In Now</span>
        </button>
      </form>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>
  </div>
</div>

            </div>
          </>
        )
      }

    </>
  )
}

export default App
