import Image from 'next/image'; 

export default function Fale() {
    return (
        <a 
        href="https://wa.me/5599999999999"  
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1D79FB] text-white gap-2 text-center rounded-sm p-2 text-xs md:text-base h-[40px] w-[250px] sm:w-[300px] hover:bg-blue-950 transition-all flex flex-col sm:flex-row items-center justify-center mt-4"
      >
        Fale com nosso time de vendas <i className="bi bi-whatsapp"></i>
      </a>
    );
}
