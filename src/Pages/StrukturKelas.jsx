import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
  const [aosLoaded, setAosLoaded] = useState(false)

  useEffect(() => {
    if (!aosLoaded) {
      AOS.init()
      AOS.refresh()
      setAosLoaded(true)
    }
  }, [aosLoaded])

  return (
    <div className="z-1 relative h-auto lg:overflow-hidden">
      {/* wali kelas */}
      <div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
        <BorderStruktur Jabatan="Wali Kelas" Nama="Andina Baiti Isnaeni, S.Pd." Width="150px" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />
        <div className="lg:flex">
          <img src="LineHorizontal.svg" alt="" className="relative top-[-1rem]" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="" className="relative top-[-1rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="" className="relative top-[-1rem] hidden lg:flex lg:w-[4.2rem]" data-aos="fade-up" data-aos-duration="600" />
        </div>
        <div className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-1.93rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>
        <div className="flex gap-[10.6rem] lg:gap-[27.4rem] relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>
        {/* ketua dan wakil kelas */}
        <div className="flex relative top-[-3rem]" data-aos="fade-up" data-aos-duration="1200">
          <div className="relative left-[0.2rem]">
            <BorderStruktur Jabatan="Ketua Kelas" Nama="Arshavin" Width="120px" />
          </div>
          <img src="LineHorizontalPendek.svg" className="relative top-3" />
          <img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
          <img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
          <img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
          <div className="relative right-[0.2rem]">
            <BorderStruktur Jabatan="Wakil Ketua" Nama="Afdal" Width="120px" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="120" className="">
          <img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
        </div>
        {/* sekertaris dan bendahara */}
        <div className="lg:flex">
          <img src="LineHorizontal.svg" alt="" className="relative top-[-5.5rem]" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="" className="relative top-[-5.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="" className="relative top-[-5.5rem] hidden lg:flex lg:w-[4.2rem]" data-aos="fade-up" data-aos-duration="600" />
        </div>
        <div className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>
        
        <div className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>
        <div className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[22rem]" data-aos="fade-up" data-aos-duration="1200">
          <div className="flex-col">
            <BorderStruktur Jabatan="Sekertaris" Nama="Baim" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="Erul" Width="120px" />
          </div>
          <div className="flex-col">
            <BorderStruktur Jabatan="Bendahara" Nama="Evan" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="Marchel" Width="120px" />
          </div>
        </div>
        
        {/* keamanan dan keagamaan */}
        <div className="lg:flex">
          <img src="LineHorizontal.svg" alt="" className="relative top-[-9.5rem]" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="" className="relative top-[-9.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
          <img src="LineHorizontal.svg" alt="" className="relative top-[-9.5rem] hidden lg:flex" data-aos="fade-up" data-aos-duration="600" />
        </div>
        <div className="flex gap-[10.6rem] relative top-[-10.4rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="800">
          <img src="LineKananKiri.svg" alt="" />
          <img src="LineKananKiri.svg" alt="" />
        </div>
        <div className="flex gap-[10.6rem] relative top-[-11.1rem] lg:gap-[27.4rem]" data-aos="fade-up" data-aos-duration="1000">
          <img src="Circle.svg" alt="" />
          <img src="Circle.svg" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-duration="120" className="relative top-[-11.5rem]">
          <img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
        </div>
        <div className="flex gap-[5rem] relative top-[-12.5rem] lg:gap-[22rem]" data-aos="fade-up" data-aos-duration="1200">
          <div className="flex-col">
            <BorderStruktur Jabatan="Keamanan" Nama="Hamam" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="Nabil" Width="120px" />
          </div>
          <div className="flex-col">
            <BorderStruktur Jabatan="Keagamaan" Nama="Andre" Width="120px" />
            <div className="py-[3%]"></div>
            <BorderStruktur Jabatan="" Nama="Gusti" Width="120px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StrukturKelas
