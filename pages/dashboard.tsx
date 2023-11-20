// pages/dashboard/index.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SidebarComponent } from '@/components/SidebarComponent';
import LayoutAuth from '../layout/LayoutAuth';
import AuditoriaPage from './auditoria-page';

const Dashboard = ({ children }:any) => {
  const router = useRouter();
  const backgroundImage = '/images/imagen-landing.jpg';
  const [selectedOption, setSelectedOption] = useState('');

  // Función para cambiar dinámicamente la opción seleccionada
  const handleSidebarClick = (option:any) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex bg-no-repeat bg-gray-500">
      <LayoutAuth>
        <main
          className=" bg-cover bg-no-repeat w-full h-full flex flex-col items-end "
          style={{
            backgroundImage: children ? 'none' : `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            maxHeight: '100vh',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {children}
          
        </main>
      </LayoutAuth>
    </div>
  );
};

export default Dashboard;
