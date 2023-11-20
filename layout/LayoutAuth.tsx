// pages/Layouts/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { SidebarComponent } from '@/components/SidebarComponent';

interface RootState {
  selectedItem: string;
  // ... otros estados ...
}

const LayoutAuth = ({ children }:any) => {
  const router = useRouter();
  const rol = useSelector((state: RootState) => state.selectedItem); // Variable Global

  useEffect(() => {
    // Verificar la autenticación aquí
    if (rol === '') {
      router.push('/'); // Redirige a la página de inicio de sesión si no está autenticado
    }
  }, [rol]); // Agrega "rol" como dependencia del efecto para que se ejecute cuando cambie

  // Si el usuario no está autenticado, no renderizar el contenido
  if (rol === '') {
    return null;
  }

  return (< >
  <SidebarComponent/>
  {children}
  </>)
  ; // Renderiza el contenido solo si el usuario está autenticado
};

export default LayoutAuth;

