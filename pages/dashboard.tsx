import { SidebarComponent } from '@/components/SidebarComponent';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
export default function Dashboard() {
    const backgroundImage = '/images/imagen-landing.jpg';

    return (
        <div className="flex">
            <SidebarComponent />
            <main
                className="w-3/4 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                    minHeight: '100vh',
                    maxHeight: '100vh',
                }}
            >
            </main>
        </div>
    );
}
