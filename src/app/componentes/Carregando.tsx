"use client"; // Adicione esta linha se o componente usa hooks como useState ou useEffect

import Image from 'next/image';

export default function Carregando() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2A87E1' }}>
            <Image
                width={724}
                height={531}
                src="/assets/Logo Footer.png"
                alt="logo"
                quality={100}
                className="w-auto h-[91px] mb-4" 
            />
            <Image
                src="/loading.svg"
                alt="imagem carregando"
                width={100}
                height={100}
                className="mb-4 " 
            />
            <h1 className="text-2xl font-semibold text-center text-white p-5">
                Trazendo Soluções para seu negócio
            </h1>
        </div>
    );
}
