import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center mt-[20px] md:mt-[50px] relative z-20 ">
      <nav className="flex justify-between items-center w-11/12 md:w-9/12">
        <Image
          width={1016}
          height={304}
          src="/assets/Logo white.png"
          alt="logo"
          className="w-[120px]  md:w-[260px] md:h-[77.76px]"
       

        />

        <button className="bg-white text-nav-blue text-center rounded-md p-3 md:p-3 text-xs md:text-base h-[30px] w-[100px] md:h-[40px] md:w-[167px] hover:bg-gray-200 transition-all flex flex-col sm:flex-row items-center justify-center">
          Acessar o <strong className="ml-1"> Sistema</strong>
        </button>
      </nav>
    </div>
  );
}
