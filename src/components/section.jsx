import Sectionimg1 from "../assets/Sectionimg1.jpg"
import Sectionimg2 from "../assets/sectionimg2.png"
import Sectionimg3 from "../assets/Sectionimg3.png"
import Sectionimg4 from "../assets/Sectionimg4.png"
const defaultSectionclass={
section: "bg-[#F5F5F7] p-5 text-center rounded-xl shadow ",
  name: "text-3xl font-bold p-1",
  desc: "text-xl w-xs mx-auto p-1",
  primary: "border-0 px-4 py-2 mt-2 rounded-4xl text-lg bg-[#0077ED] text-white",
  secondary:
    "border-2 border-[#0077ED] px-5 py-2 mt-2 text-lg rounded-4xl ml-4 text-[#0077ED] hover:bg-[#0077ED] hover:text-white ",
  img: " w-100 mx-auto p-3 ",
}
const createSection=(data)=>({
  sectionclass:defaultSectionclass.section,
  nameclass: defaultSectionclass.name,
  descclass: defaultSectionclass.desc,
  primaryclass: defaultSectionclass.primary,
  secondaryclass: defaultSectionclass.secondary,
  imgclass: defaultSectionclass.img,
  ...data,
})
const sectionLink=[
   createSection({
         name:"AirPods Pro 3",
                 desc:"The World's best in-ear Active Noise Cancellation ",
                primary:"LearnMore",
                secondary:"Buy",
              image:Sectionimg1,
    }),
    createSection({
       name:"Watch Series 11",
                 desc:"The Ultimate way to watch your health.",
                primary:"LearnMore",
                secondary:"Buy",
               image:Sectionimg2,
    }),
     createSection({
     name:"Watch SE 3",
                desc:"Walk it.Talk it.Track it.Love it",
                primary:"LearnMore",
                secondary:"Buy",
               image:Sectionimg3,
    }),
    createSection({
     name:"Watch Ultra 3",
                desc:"Personal Beast",
                primary:"LearnMore",
                secondary:"Buy",
               image:Sectionimg4,
               bgcolor:"bg-black"
    }),  
]
const section = () => {
  return (
    <>
     <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
       {sectionLink.map((link,index)=>(
 <section  key={index} className={`${link.sectionclass} ${link.bgcolor || ""} ${
    link.bgcolor === "bg-black" ? "text-white" : "text-black"
  }`}>
 <h1 className={link.nameclass}>{link.name}</h1>
<h4 className={link.descclass}>{link.desc}</h4>
           <button className={link.primaryclass}>{link.primary}</button>
           <button className={link.secondaryclass}>{link.secondary}</button>
     <img className={link.imgclass} src={link.image}></img> 
     </section>
 
  ))
  }
     </div>
   
     </>
  )
}

export default section