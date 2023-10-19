import { SignIn } from '../components/sign-in-component/SignInComponent';
import { NavBar } from '../components/navbar/NavBarComponent';

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
