import { SidebarComponent } from '@/components/SidebarComponent';
import TableComponent from '@/components/table-history/TableComponent';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
export default function Dashboard() {
    const backgroundImage = '/images/imagen-landing.jpg';

    return (
        <main className="w-3/4 bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url("${backgroundImage}")`,
                minHeight: '100vh',
                maxHeight: '100vh',
            }} >
            <SidebarComponent />
        </main>
    );
}
