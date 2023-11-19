import TableComponent from "@/components/table-history/TableComponent";
import Link from "next/link";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const AuditoriaPage = () => {
    const styles = {
        title: {
            flexGrow: 1,
            textAlign: 'right',
            fontSize: '2rem', // Puedes ajustar el tamaño de la fuente según tus necesidades
        },
      };
    return (
        <div>
            <div className='flex'>
                <div className=" w-1/5 flex items-center justify-center h-screen">
                    <div className=" p-4">
                        <Link href='/dashboard' style={styles.title}>
                        <KeyboardReturnIcon/>
                            Regresar
                        </Link>
                    </div>
                </div>
                
                <TableComponent />
            </div>
        </div>

    );
};

export default AuditoriaPage;