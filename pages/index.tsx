import { SignIn } from '../components/SignInComponent/SignIn';
import { NavBar } from '../components/NavbarComponent/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className=''>
        <SignIn />
      </main>
    </div>

  );
};

export default Home;
