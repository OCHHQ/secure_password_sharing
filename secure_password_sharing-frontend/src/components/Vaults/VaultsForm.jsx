
import PropTypes from 'prop-types';

const VaultsForm = ({setVaultForm}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#7A4FE7] backdrop-blur-sm bg-opacity-10 z-40'>
    <div className=' fixed w-full md:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F9F6F3] p-4 border-4 rounded-xl border-[#7A4FE7] shadow-lg z-50'>
                <h1 className="text-2xl font-medium text-center py-4">Create Vault</h1>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Folder Name" className="border-2 border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent rounded-lg p-4" />
                    <input type="text" placeholder="Vault Name" required className="border-2 border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent rounded-lg p-4" />
                    <input type="text" placeholder="Description"  className="border-2 border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent rounded-lg p-4" />
                    <input type="text" placeholder="Username" required className="border-2 border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent rounded-lg p-4" />
                    <input type="text" placeholder="Password" required className="border-2 border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent rounded-lg p-4" />
                    <input type="text" placeholder="Confirm Password" required className="border-2 border-gray-400 placeholder:font-medium hover:border-indigo-600 focus:outline-indigo-600 active:scale-[0.98] bg-transparent rounded-lg p-4" />
                    <div className='flex flex-wrap gap-4 justify-center'>
                    <button className="w-1/4 bg-[#7A4FE7] text-white p-2 rounded-lg">Create</button>
                    <button className="w-1/4 bg-[#7A4FE7] text-white p-2 rounded-lg" onClick={() => setVaultForm(false)}>Cancel</button>
                    </div>
                </form>
            </div>
      </div>
  )
}
VaultsForm.propTypes = {
  setVaultForm: PropTypes.func.isRequired,
};

export default VaultsForm;