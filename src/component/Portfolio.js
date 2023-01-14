export default function Portfolio() {
  return (
    <div className="p-6 px-10">
      <p className="text-3xl font-bold text-[#1890ff] text-center my-6">Portfolio</p>
      <p className='text-center text-[#a2a2a2] w-[60%] mx-auto'>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dotor.
        Do Amet Sint, Velit Offical Consequant Duis Velit Mollit.
        Lorem Lpsum
      </p>
      <div className="grid grid-cols-3 gap-4 py-10">
        <img src="./img/1.png" className="w-[95%] h-[214px] mx-auto drop-shadow-lg my-3 transition duration-500 hover:blur-sm" />
        <img src="./img/2.png" className="w-[95%] h-[214px] mx-auto drop-shadow-lg my-3 transition duration-500 hover:blur-sm" />
        <img src="./img/3.png" className="w-[95%] h-[214px] mx-auto drop-shadow-lg my-3 transition duration-500 hover:blur-sm" />
        <img src="./img/4.png" className="w-[95%] h-[214px] mx-auto drop-shadow-lg my-3 transition duration-500 hover:blur-sm" />
        <img src="./img/5.jpg" className="w-[95%] h-[214px] mx-auto drop-shadow-lg my-3 transition duration-500 hover:blur-sm" />
        <img src="./img/6.jpg" className="w-[95%] h-[214px] mx-auto drop-shadow-lg my-3 transition duration-500 hover:blur-sm" />
      </div>
    </div>
  )
}