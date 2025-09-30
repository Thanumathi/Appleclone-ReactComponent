
import Scrollingimg1 from "../assets/scrollingimg1.jpg";
import Scrollingimg2 from "../assets/scrollingimg2.jpg";
import Scrollingimg3 from "../assets/scrollingimg3.jpg";
import Scrollingimg4 from "../assets/scrollingimg4.jpg";
import Scrollingimg5 from "../assets/scrollingimg5.jpg";
import Scrollingimg6 from "../assets/scrollingimg6.jpg";
import Scrollingimg7 from "../assets/scrollingimg7.jpg";

const imgLink=[
{
    img:Scrollingimg1
},
{
    img:Scrollingimg2
},
{
    img:Scrollingimg3
},

{
    img:Scrollingimg4
},
{
    img:Scrollingimg5
},
{
    img:Scrollingimg6
},
{
    img:Scrollingimg7
}

]
const scrollingsection = () => {
  return (
    <>
     
   <div className="overflow-hidden w-full">
  <div className="flex animate-scroll">
    {[...imgLink, ...imgLink].map((link, index) => (
      <img
        key={index}
        src={link.img}
        className="w-44 h-30 md:w-3xs md:h-40 flex-shrink-0"
        alt=""
      />
    ))}
  </div>
</div>


    </>
  
  )
}

export default scrollingsection