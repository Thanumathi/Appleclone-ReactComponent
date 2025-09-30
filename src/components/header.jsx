
import backgroundImage from '../assets/header.jpg'
const header = () => {
  return (
   <header className="h-[800px] w-full bg-cover bg-center text-white text-center p-10" style={{ 
            backgroundImage:`url(${backgroundImage})`,
          }}>
           <h1 className='text-2xl md:text-3xl pt-4'>iPhone 17 Pro</h1>
           <h4 className='text-2xs md:text-xl'>All Out Pro</h4>
           <button className='border-0 px-4 py-2 mt-2 rounded-4xl bg-[#0077ED]'>LearnMore</button>
           <button className='border-2 border-[#0077ED] px-5 py-2 mt-2  rounded-4xl ml-4 hover:bg-[#0077ED]'>Buy</button>
  </header> 
)
}
export default header


     
   
