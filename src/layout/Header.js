import Switcher from '../hooks/Switcher';
import { FaHome, FaFileInvoice, FaBookReader, FaCommentAlt, FaStar } from 'react-icons/fa';

export default function Example() {
  return (
    <div className='bg-white py-5 px-6 grid justify-center h-[1114px] dark:bg-gray-900'>
      <div>
        <Switcher />
      </div>
      <div className='div -mt-48'>
        <div className='bg-[#1890ff] p-2 my-4 text-white rounded-full border-[#1890ff] transition duration-700 border hover:bg-white hover:text-[#1890ff] hover:border-[#1890ff]'> 
          <FaHome /> 
        </div>
        <div className='bg-[#1890ff] p-2 my-4 text-white rounded-full border-[#1890ff] transition duration-700 border hover:bg-white hover:text-[#1890ff] hover:border-[#1890ff]'> 
          <FaFileInvoice /> 
        </div>
        <div className='bg-[#1890ff] p-2 my-4 text-white rounded-full border-[#1890ff] transition duration-700 border hover:bg-white hover:text-[#1890ff] hover:border-[#1890ff]'> 
          <FaBookReader /> 
        </div>
        <div className='bg-[#1890ff] p-2 my-4 text-white rounded-full border-[#1890ff] transition duration-700 border hover:bg-white hover:text-[#1890ff] hover:border-[#1890ff]'> 
          <FaStar /> 
        </div>
        <div className='bg-[#1890ff] p-2 my-4 text-white rounded-full border-[#1890ff] transition duration-700 border hover:bg-white hover:text-[#1890ff] hover:border-[#1890ff]'> 
          <FaCommentAlt /> 
        </div>
      </div>
    </div>
  )
}
