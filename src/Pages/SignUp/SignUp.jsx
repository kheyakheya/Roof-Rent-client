import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { useContext, useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { AuthContext } from '../../Providers/AuthProvider'
import { BiShow } from 'react-icons/bi'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const SignUp = () => {
  const { loading, setLoading, signInWithGoogle, createUser, updateUserProfile, } =
    useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  // use states
  const [show, setShow]=useState(false);
  const [password, setPassword]= useState("");
  const [email, setEamil]=useState("");
  const [passError, setPassError]= useState("");
  const [error, setError]= useState("");
  const [success, setSuccess]=useState("");
  const from = location.state?.from?.pathname || '/';
// handle email
  const handleEmail = (e) => {
    setEamil(e.target.value)
}
// handle password
const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
        setPassError("Password must be at least 6 characters long");
    }
  
    else if (!/.*[A-Z].*/.test(passwordInput)) {
        setPassError("Password must have one uppercase");
    }
    else if (!/.*[@#$%^&+=].*/.test(passwordInput)) {
        setPassError("Password must have one special character");
    }
    else {
        setPassError("");
    }
}
  // handle signup
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;
    // pass error
    if (passError) {
      event.target.password.focus();
      return;
  }
  // confirm
  if(password !== confirm){
      setError("Confirm Password did not match");
      event.target.confirm.focus();
      return;
  }
 
    // image upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const imageUrl = imageData.data.display_url;
        createUser(email, password)
          .then(result => {
            updateUserProfile(name, imageUrl)
              .then(() => {
                toast.success("success ful signup")
                navigate(from, { replace: true })
              })
              .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)

              })

            console.log(result.user)
            navigate(from, { replace: true })
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message)
            toast.error(err.message)

          })

        console.log(imageData.data.display_url)
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)

      })



  }
  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)

      })
  }

  return (
    <div className='flex justify-center items-center min-h-screen py-6 '>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold  text-[#377b82] '>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Rooftop Rent</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
              onChange={handleEmail}
                value={email}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
              onChange={handlePassword}
              value={password}
              type={show ? "text" : "password"}
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            {show ? <p className="pt-4" onClick={() => { setShow(!show) }}><AiOutlineEyeInvisible></AiOutlineEyeInvisible></p> : <p className="pt-4" onClick={() => { setShow(!show) }}><BiShow></BiShow></p>}
            {password && passError && <span className='text-red-600'>{passError}</span>}

            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='confirm' className='text-sm mb-2'>
                  Confirm Password
                </label>
              </div>
              <input
                type={show ? "text" : "password"}
                name='confirm'
                id='confirm'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
              {show ? <p className="pt-4" onClick={() => { setShow(!show) }}><BiShow></BiShow></p> : <p className="pt-4" onClick={() => { setShow(!show) }}><BiShow></BiShow></p>}

            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#f14e38] w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <ImSpinner9 className='m-auto animate-spin' size={24} />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <p className='text-green-700 px-8 py-4 text-xl'><small >{success}</small></p>
        <p className='text-red-400 px-8 py-4 text-xl'><small>{error}</small></p>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>

        </p>
      </div>
    </div>
  )
}

export default SignUp