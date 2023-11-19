import { SidebarComponent } from '@/components/SidebarComponent';
import TableComponent from '@/components/table-history/TableComponent';
import React from 'react';
import LayoutAuth from '../layout/LayoutAuth';


// eslint-disable-next-line react/function-component-definition
export default function Dashboard() {
    const backgroundImage = '/images/imagen-landing.jpg';

    return (
        <div className="flex bg-no-repeat">
           <LayoutAuth> 
                <SidebarComponent />
                <main
                    className=" bg-cover bg-no-repeat w-full"
                    style={{
                        backgroundImage: `url("${backgroundImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        maxHeight: '100vh',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </main>
            </LayoutAuth>
        </div>
    );
}
