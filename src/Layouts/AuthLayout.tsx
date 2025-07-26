
import {Outlet} from 'react-router-dom';

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center
     justify-center relative">
        {/*Handler to store user data*/}
        <img src='/assets/img/bg.png' className='absolute w-full h-full object cover opacity-20'
         alt='bg'></img>
      <Outlet/>
    </div>
  )
}

export default AuthenticationLayout
