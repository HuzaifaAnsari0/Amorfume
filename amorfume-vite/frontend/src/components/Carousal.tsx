import React, { useState} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DotFilledIcon } from "@radix-ui/react-icons";


const Carousal = () => {  

  const slides = [{
      url: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQUQ6g6NjGqj3qncgsJGpxzzRrL_qDAc1qQ&s",
      
    },
    {
      url: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
      
  }]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) =>  {
    setCurrentIndex(slideIndex)
  }


    return (
      <div className=" h-[600px] w-full m-auto py-2 px-2relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full  bg-center bg-cover duration-500"></div>
        <div className="hidden group-hover:block absolute top-50% translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <ArrowLeft onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-50% translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <ArrowRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
             key={slideIndex} 
             onClick={() => goToSlide(slideIndex)} 
             className="text-2xl cursor-pointer"
             >
              <DotFilledIcon />
            </div>
          ))}
        </div>
      </div>

    )
}

export default Carousal;