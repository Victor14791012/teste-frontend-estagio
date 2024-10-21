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
          className="w-[131px] h-[91px] mb-4"
        />
       </div>
       

        <p className="text-white text-center text-xs md:text-[20px] mt-4 text-[20px]"> © <strong>SoftOwn 2024.</strong> Todos os direitos reservados.</p>
        <div className="flex justify-center flex-row mt-8 text-white gap-x-[20px] ">
        <i className="bi bi-facebook text-[20px]"></i>
        <i className="bi bi-linkedin text-[20px]"></i>
        <i className="bi bi-instagram text-[20px]"></i>
        <i className="bi bi-twitter-x text-[20px]"></i>
        <i className="bi bi-youtube text-[20px]"></i>
        </div>
    </div>
  );
}
