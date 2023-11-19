import { RestorePasswordComponent } from "@/components/RestorePasswordComponent";
import { NavBar } from "@/components/navbar/NavBarComponent";
import { Typography } from "@mui/material";

const RecoverPasswordPage = () => {
    return (
        <div>
            <main className=''>
                 <NavBar/>
                 <RestorePasswordComponent/>
            </main>
        </div>
    );
};

export default RecoverPasswordPage;