import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import { useState } from "react";
import Vaults from "../Vaults/Vaults";
import VaultsForm from "../Vaults/VaultsForm";

const VaultsPage = () => {
    const [vaultForm, setVaultForm] = useState(false);
    const listVaults = [
         {
             id: 1,
             name: "Vault 1",
             username: "ismail@gmail.com",
             description: "This is the first vault",
             password: "password13213"
         },
         {
             id: 2,
             name: "Vault 2",
             username: "collins@gmail.com",
             description: "This is the second vault",
             password: "password 2131"
         },
         {
             id: 3,
             name: "Vault 3",
             username: "collins@hotmail.com",
             description: "This is the third vault",
             password: "password 2313"
         },
         {
             id: 4,
             name: "Vault 4",
             username: "obah@gmail.com",
             description: "This is the fourth vault",
             password: "password 231"
         }
        
        
    ];

    return (
        <>
        <Header/>
        <div id='Vaults' className='block mx-auto md:w-3/4 py-20 justify-around'>
            
        
        <Vaults listVaults= {listVaults} setVaultForm={setVaultForm}/>
        {vaultForm && <VaultsForm setVaultForm={setVaultForm} />}
        </div>
        <Footer/>
        </>
    );
};

export default VaultsPage;