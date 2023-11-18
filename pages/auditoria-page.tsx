import TableComponent from "@/components/table-history/TableComponent";
import { NavBar } from "@/components/navbar/NavBarComponent";

const AuditoriaPage = () => {
    return (
        <div>
            <main className=''>
                <NavBar/>
                <TableComponent/>
            </main>
        </div>

    );
};

export default AuditoriaPage;