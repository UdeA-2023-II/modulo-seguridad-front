import Link from "next/link";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Dashboard from "./dashboard";
import OutOfRangeComponent from "@/components/OutOfRangeComponent";

const ExtraModulePage = () => {
    const styles = {
        title: {
            flexGrow: 1,
            textAlign: 'right',
            fontSize: '2rem', // Puedes ajustar el tamaño de la fuente según tus necesidades
        },
    };
    return (
        <Dashboard>
           <OutOfRangeComponent/>
        </Dashboard>

    );
};

export default ExtraModulePage;