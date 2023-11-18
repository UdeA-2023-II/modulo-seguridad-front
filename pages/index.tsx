import { SignIn } from '../components/SignInComponent';
import { NavBar } from '../components/navbar/NavBarComponent';





const Home = () => {

  
  

  //console.log('el rol de variable global : '+selectedItem)//prueba de que está funcionando la variable global
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
