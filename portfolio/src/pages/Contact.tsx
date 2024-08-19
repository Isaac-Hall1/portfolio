const Contact = () => {
  return(
    <div className="text-white pb-96">
      <div className="flex flex-col font-mono">
        <div className="text-center text-white font-extrabold text-4xl md:text-6xl">
          To contact me click the button below.
        </div>
        <div className="pt-20">
          <button className="flex align-middle mx-auto bg-blue-600 text-4xl font-bold py-8 px-20 rounded-full">
            <span className="relative after:content-[''] after:bg-white after:h-[6px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]" onClick={() => window.location.href = 'mailto:imhall2344@gmail.com'}>Contact Me!</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Contact