import {useAuth} from '../contexts/auth'


export default function LoginForm(props) {
  const { login } = useAuth();

  const handleLogin=(event)=>{
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    console.log(username,password)
    login(username, password)
  }
  return (
    <>
      <div className="w-1/3 px-5 py-5 m-auto bg-green-200 border-2 border-green-500 rounded-md ">
        <form onSubmit={handleLogin}>
        <div className="mx-auto my-2">
          <label htmlFor="username_input" className="flex justify-center w-full my-2 text-lg text-center font-bold">User Name</label>
          <input type="text" id="username_input" name="username" className="w-full h-8" placeholder=" user name" required/>
        </div>
        <div className="w-full mx-auto my-5">
          <label htmlFor="password_input" className="flex justify-center w-full my-2 text-lg text-center font-bold">Password</label>
          <input type="text" id="password_input" name="password" className="w-full h-8" placeholder=" password" required/>
        </div>
        <div>
          <button type="submit" className="w-full h-12 m-auto bg-green-600 rounded-md">
            SIGN IN
          </button>
        </div>
        </form>
      </div>
    </>
  )
}