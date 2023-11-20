import TableComponent from "@/components/table-history/TableComponent";
import Link from "next/link";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Dashboard from "./dashboard";

const AuditoriaPage = () => {
    const styles = {
        title: {
            flexGrow: 1,
            textAlign: 'right',
            fontSize: '2rem', // Puedes ajustar el tamaño de la fuente según tus necesidades
        },
      };
    return (
        <Dashboard>
            <TableComponent />
        </Dashboard>

    );
};

export default AuditoriaPage;