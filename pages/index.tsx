import {SignIn} from '../components/SignInComponent/SignIn';
import {NavBar} from '../components/NavbarComponent/Navbar';

const Home = () => 
{
  return (
    <div>
      <NavBar/>
      <main className='flex h-screen w-full items-center justify-center'>
        <SignIn/>
      </main>
    </div>
    
  );
};

export default Home;
