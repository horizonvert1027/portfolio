import { FaArrowRight, FaDesktop, FaStar, FaCameraRetro, FaGamepad, FaMicrophone, FaRegImages, FaRegGrinSquintTears } from 'react-icons/fa';
import Portfolio from './Portfolio';

const Home = () => {
  return (
    <div className="home">
      <div className="flex bg-white p-6 px-10 dark:bg-gray-900">
        <div className="grid grid-row-3 w-1/2 items-center h-80 my-auto">
          <p className="text-[3rem] font-bold py-3 dark:text-white">
            I'm Rayan Adlrdard <span className="text-[#1890ff]">Front-End</span> Developer
          </p>
          <p className="text-[#a2a2a2]">
            Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Et, Volupat Feugiat Placerat Lobortis.
            Natoque Returm Semper Sed Suspendisse Nunc Lectus.
          </p>
          <button className="bg-[#1890ff] flex items-center justify-center text-white rounded-md px-3 py-[7px] my-3 w-[25%]">
            HIRE ME <FaArrowRight className='ml-2' />
          </button>
        </div>
        <div className="w-1/2">
          <img src="./img/chengli.jpg" className="w-[80%] mx-auto" alt="chengli" />
        </div>
      </div>
      <div className='p-6 px-10'>
        <p className='text-3xl text-center text-[#1890ff] font-bold my-6'>My Services</p>
        <p className='text-center text-[#a2a2a2] w-[60%] mx-auto'>
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dotor.
          Do Amet Sint, Velit Offical Consequant Duis Velit Mollit.
          Lorem Lpsum
        </p>
        <div className='grid grid-cols-3 gap-4 py-10'>
          <div className='bg-white p-10 dark:bg-gray-900'>
            <FaDesktop className='text-[75px] text-[#1890ff] mx-auto' />
            <p className='text-2xl font-semibold py-3 text-center dark:text-white'>Web Development</p>
            <p className='text-[#a2a2a2] text-center'>Blog, E-Commerce</p>
            <div className='flex gap-2 justify-center pt-4'>
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />              
            </div>
          </div>
          <div className='bg-white p-10 dark:bg-gray-900'>
            <FaRegImages className='text-[75px] text-[#1890ff] mx-auto' />
            <p className='text-2xl font-semibold py-3 text-center dark:text-white'>UI/UX Design</p>
            <p className='text-[#a2a2a2] text-center'>Mobile App, Website Design</p>
            <div className='flex gap-2 justify-center pt-4'>
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />              
            </div>
          </div>
          <div className='bg-white p-10 dark:bg-gray-900'>
            <FaMicrophone className='text-[75px] text-[#1890ff] mx-auto' />
            <p className='text-2xl font-semibold py-3 text-center dark:text-white'>Sound Design</p>
            <p className='text-[#a2a2a2] text-center'>Voice Over, Beat Making</p>
            <div className='flex gap-2 justify-center pt-4'>
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />              
            </div>
          </div>
          <div className='bg-white p-10 dark:bg-gray-900'>
            <FaGamepad className='text-[75px] text-[#1890ff] mx-auto' />
            <p className='text-2xl font-semibold py-3 text-center dark:text-white'>Game Design</p>
            <p className='text-[#a2a2a2] text-center'>Character Design, Props & Object</p>
            <div className='flex gap-2 justify-center pt-4'>
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />              
            </div>
          </div>
          <div className='bg-white p-10 dark:bg-gray-900'>
            <FaCameraRetro className='text-[75px] text-[#1890ff] mx-auto' />
            <p className='text-2xl font-semibold py-3 text-center dark:text-white'>Photography</p>
            <p className='text-[#a2a2a2] text-center'>Portrait, Product Photography</p>
            <div className='flex gap-2 justify-center pt-4'>
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />              
            </div>
          </div>
          <div className='bg-white p-10 dark:bg-gray-900'>
            <FaRegGrinSquintTears className='text-[75px] text-[#1890ff] mx-auto' />
            <p className='text-2xl font-semibold py-3 text-center dark:text-white'>Advertising</p>
            <p className='text-[#a2a2a2] text-center'>Advertising, Model</p>
            <div className='flex gap-2 justify-center pt-4'>
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />
              <FaStar className='text-[#1890ff]' />              
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
    </div>
  )
}

export default Home;