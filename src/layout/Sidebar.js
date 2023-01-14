import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaClone, FaDownload } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="bg-white py-5 px-6 justify-center dark:bg-gray-900">
      <img src="./img/james.png" className="rounded-full mb-2 mx-auto" alt="james" />
      <p className="text-xl font-semibold my-2 text-center text-[#1890ff]">James Lee</p>
      <p className="text-md text-[#a2a2a2] text-center">Front-End Developer</p>
      <div className="flex justify-center gap-3 my-4 pb-5 border-b-[1px]">
        <div className='bg-[#1890ff] p-1 text-white rounded-full transition duration-500 hover:scale-125'> <FaFacebookF /> </div>
        <div className='bg-[#1890ff] p-1 text-white rounded-full transition duration-500 hover:scale-125'> <FaInstagram /> </div>
        <div className='bg-[#1890ff] p-1 text-white rounded-full transition duration-500 hover:scale-125'> <FaTwitter /> </div>
        <div className='bg-[#1890ff] p-1 text-white rounded-full transition duration-500 hover:scale-125'> <FaLinkedin /> </div>
        <div className='bg-[#1890ff] p-1 text-white rounded-full transition duration-500 hover:scale-125'> <FaYoutube /> </div>
      </div>
      <div className='flex justify-between py-[4px]'>
        <p className='bg-[#1890ff] text-white px-2'>Age:</p>
        <p className='dark:text-white'>24</p>
      </div>
      <div className='flex justify-between py-[4px]'>
        <p className='bg-[#1890ff] text-white px-2'>Residence:</p>
        <p className='dark:text-white'>BD</p>
      </div>
      <div className='flex justify-between py-[4px]'>
        <p className='bg-[#1890ff] text-white px-2'>Freelance:</p>
        <p className='dark:text-white'>Available</p>
      </div>
      <div className='flex justify-between py-[4px] pb-5 border-b-[1px]'>
        <p className='bg-[#1890ff] text-white px-2'>Address:</p>
        <p className='dark:text-white'>Beijing, China</p>
      </div>
      <div className='py-3 border-b-[1px]'>
        <p className='text-xl font-bold mb-2 text-[#1890ff]'>Language</p>
        <div className='flex justify-between py-[4px]'>
          <p className='dark:text-white'>English</p>
          <p className='dark:text-white'>Native</p>
        </div>
        <div className='flex justify-between py-[4px]'>
          <p className='dark:text-white'>Chinese</p>
          <p className='dark:text-white'>Native</p>
        </div>
      </div>
      <div className='py-3 border-b-[1px]'>
        <p className='text-xl font-bold mb-1 text-[#1890ff]'>Skills</p>
        <div className='grid py-[3px]'>
          <div className='flex justify-between'>
            <p className='dark:text-white'>React.Js</p>
            <p className='dark:text-white'>100%</p>
          </div>
          <div className='border border-[#1890ff] h-[4px] mt-[3px]'>
            <div className='w-[100%] bg-[#1890ff] h-[3px]'></div>
          </div>
        </div>
        <div className='grid py-[3px]'>
          <div className='flex justify-between'>
            <p className='dark:text-white'>Node.Js</p>
            <p className='dark:text-white'>90%</p>
          </div>
          <div className='border border-[#1890ff] h-[4px] mt-[3px]'>
            <div className='w-[90%] bg-[#1890ff] h-[3px]'></div>
          </div>
        </div>
        <div className='grid py-[3px]'>
          <div className='flex justify-between'>
            <p className='dark:text-white'>Express</p>
            <p className='dark:text-white'>95%</p>
          </div>
          <div className='border border-[#1890ff] h-[4px] mt-[3px]'>
            <div className='w-[95%] bg-[#1890ff] h-[3px]'></div>
          </div>
        </div>
        <div className='grid py-[3px]'>
          <div className='flex justify-between'>
            <p className='dark:text-white'>MongoDB</p>
            <p className='dark:text-white'>100%</p>
          </div>
          <div className='border border-[#1890ff] h-[4px] mt-[3px]'>
            <div className='w-[100%] bg-[#1890ff] h-[3px]'></div>
          </div>
        </div>
        <div className='grid py-[3px] mb-1'>
          <div className='flex justify-between'>
            <p className='dark:text-white'>Vue.Js</p>
            <p className='dark:text-white'>98%</p>
          </div>
          <div className='border border-[#1890ff] h-[4px] mt-[3px]'>
            <div className='w-[98%] bg-[#1890ff] h-[3px]'></div>
          </div>
        </div>
      </div>
      <div className='extra py-3 border-b-[1px]'>
        <p className='text-xl font-bold text-[#1890ff] mb-1'>Extra Skills</p>
        <div className='flex items-center'>
          <FaClone className='text-[#1890ff] mr-2' />
          <p className='py-[3px] dark:text-white'>Bootstrap, Materialize</p>
        </div>
        <div className='flex items-center'>
          <FaClone className='text-[#1890ff] mr-2' />
          <p className='py-[3px] dark:text-white'>Stylus, Sass, Less</p>
        </div>
        <div className='flex items-center'>
          <FaClone className='text-[#1890ff] mr-2' />
          <p className='py-[3px] dark:text-white'>Gulp, Webpack, Grunt</p>
        </div>
        <div className='flex items-center'>
          <FaClone className='text-[#1890ff] mr-2' />
          <p className='py-[3px] dark:text-white'>Tailwindcss, Figma</p>
        </div>
        <div className='flex items-center'>
          <FaClone className='text-[#1890ff] mr-2' />
          <p className='py-[3px] dark:text-white'>Git Knowledge</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='bg-[#1890ff] text-white py-[6px] px-5 mt-5 flex items-center'><FaDownload className='mr-3' /> Download CV</button>
      </div>
    </div>
  )
}