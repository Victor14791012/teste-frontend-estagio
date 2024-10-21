import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex bg-nav-blue flex-col h-[288px] justify-center mt-[20px] md:mt-[50px] relative z-20 ">
       <div className="w-full flex justify-center"> 

       <Image
          width={724}
          height={531}
          src="/assets/Logo Footer.png"
          alt="logo"
          quality={100}
          className="w-auto h-[91px]"
        />
       </div>
       

        <p className="text-white text-center text-xs md:text-base mt-4 text-[20px]"> © SoftOwn 2024. Todos os direitos reservados.</p>
        <div className="flex justify-center flex-row mt-4 text-white gap-x-1">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-youtube  "></i>
        </div>
    </div>
  );
}
