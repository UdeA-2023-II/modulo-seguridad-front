import { SignIn } from '../components/SignInComponent';
import { NavBar } from '../components/navbar/NavBarComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home = () => {

  const stringValue = useSelector((state: RootState) => state.stringValue);

  console.log('el rol es : '+stringValue)//prueba de que está funcionando la variable global
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
