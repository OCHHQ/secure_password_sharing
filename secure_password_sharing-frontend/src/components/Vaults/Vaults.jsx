import {useState} from 'react'
import PropTypes from 'prop-types';
import { FaKey, FaPlus } from 'react-icons/fa';


const Vaults = ({listVaults = [] ,setVaultForm }) => {
    const [showPassword, setShowPassword] = useState(false);


return (
    <>
        <div>
            <div className="flex flex-col gap-4">
                {listVaults.length > 0 ? (
                    <>
                    <h1 className="text-3xl text-left font-semibold my-8">Welcome to your vaults :</h1>
                        {listVaults.map((vault) => (
                            <div
                                key={vault.id}
                                className="flex flex-col gap-4 md:flex-row justify-between items-center border-2 border-gray-300 rounded-lg p-4"
                            >
                                <h2 className="text-lg font-medium">{vault.name}</h2>
                                <p className="text-sm text-gray-500">Description: {vault.description}</p>
                                <div className='flex flex-col'>
                                    <span className='flex flex-row gap-4'>
                                        <label className="text-sm font-medium">Username :</label>
                                        <h3>{vault.username} </h3>
                                    </span>
                                    <span>
                                        <label className="text-sm font-medium">Password :</label>
                                        <input type={showPassword ? "text" : "password"} readOnly onClick={() => setShowPassword(!showPassword)} value={vault.password} className='p-2 border-0'/>
                                    </span>
                                </div>
                                <div className='flex flex-row md:flex-col gap-4'>
                                    <button className="bg-blue-500 text-white p-2 rounded-lg">Edit</button>
                                    <button className="bg-red-500 text-white p-2 rounded-lg">Delete</button>
                                    <button className="bg-indigo-600 text-white p-2 rounded-lg">Share</button>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-4">
                            <button className="bg-indigo-600 text-white p-2 rounded-lg" onClick={() => setVaultForm(true)}>
                                Create Vault
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-4 w-full h-svh p-8">
                        <h1 className="text-3xl text-left font-semibold ">Welcome to your vaults</h1>
                        <p className="text-lg font-medium text-left mt-4 md:w-1/2">When you save something in PassShare, it appears here.
                            Passwords, You save it, the vault stores it</p>
                        <button className=" p-8 rounded-lg flex flex-row justify-around border-2 shadow-2xl mt-20 w-8/12 bg-[#F9F6F3]" onClick={() => setVaultForm(true)}>
                            <FaKey className="inline-block mr-2 text-blue-500 self-center" /> <span className=' w-3/4 text-center md:text-left '> <h2 className='text-lg text-[#007AFF] font-bold md:text-2xl '>Add your first password</h2>
                            <p className='hidden text-sm md:text-lg md:font-semibold md:block'>Every great PassShare experience starts with just one password.try it!</p></span>
                            <FaPlus className="inline-block ml-2 text-blue-500 self-center" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    </>
);
}

Vaults.propTypes = {
    setVaultForm: PropTypes.func.isRequired,
    listVaults: PropTypes.array.isRequired,
};


export default Vaults;

