import React from 'react'
const footerLink=[
    {
    heading: "Shop and Learn",
    items: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards"
    ]
  },
  
  {
    heading: "Account",
    items: [
      "Manage Your Apple Account",
      "Apple Store Account",
      "iCloud.com"
    ]
  },
  {
    heading: "Apple Store",
    items: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help"
    ]
  },
  {
    heading: "For Business",
    items: [
      "Apple and Business",
      "Shop for Business"
    ],
    
  },
  
  {
    heading: "Apple Values",
    items: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supply Chain Innovation"
    ]
  },
  {
    heading: "About Apple",
    items: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple"
    ]
  }
];

const footer = () => {
  return (
   
    <div className='flex gap-2 md:gap-20 p-10'>
        {footerLink.map((section,index)=>(
   <div key={index}><h5 className='font-bold text-[8px] md:text-tiny'>{section.heading}</h5>
{section.items.map((item,idx)=>(
<ul className='list-style-type: none text-gray-800'><li key={idx} className='md:text-tiny text-[8px]'>{item}</li></ul>
        

))}
      
       </div>

        ))}
     
  </div>
)}


export default footer