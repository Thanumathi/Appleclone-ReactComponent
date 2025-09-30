import Heroimage from "../assets/heroimage.png"
import Heroimg from"../assets/heroimg.png"
const defaultHeroClasses = {
  section: "bg-[#F5F5F7] text-center p-10 mt-3",
  name: "text-6xl font-bold p-1",
  desc: "text-2xl w-xs mx-auto p-1",
  primary: "border-0 px-4 py-2 mt-2 rounded-4xl text-lg bg-[#0077ED] text-white",
  secondary:
    "border-2 border-[#0077ED] px-5 py-2 mt-2 text-lg rounded-4xl ml-4 text-[#0077ED] hover:bg-[#0077ED] hover:text-white ",
  img: "h-50px md:h-100 w-270  p-10 mx-auto",
};

const createHero = (data) => ({
  sectionclass: defaultHeroClasses.section,
  nameclass: defaultHeroClasses.name,
  descclass: defaultHeroClasses.desc,
  primaryclass: defaultHeroClasses.primary,
  secondaryclass: defaultHeroClasses.secondary,
  imgclass: defaultHeroClasses.img,
  ...data,
});
const heroLink=[
    createHero(
    {
        name:"iPhone Air",
        desc:"The thinnest phone ever.With the power of pro inside",
        primary:"LearnMore",
        secondary:"Buy",
        image: Heroimage, 
    }),
    createHero({
        name:"iPhone 17",
        desc:"Magichromatic",
        primary:"LearnMore",
        secondary:"Buy",
        image:Heroimg,
    })
]
const hero = () => {
  return (
    <>
     {heroLink.map((link,index)=>(
    <section  key={index} className={link.sectionclass}> 
<h1 className={link.nameclass}>{link.name}</h1>
<h4 className={link.descclass}>{link.desc}</h4>
           <button className={link.primaryclass}>{link.primary}</button>
           <button className={link.secondaryclass}>{link.secondary}</button>
    <img className={link.imgclass} src={link.image}></img>
    </section>
  ))
}
</>
  )
}
export default hero