"use client";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Carregando from "./componentes/Carregando";
import Navbar from "@componentes/Navbar";
import Footer from "@componentes/Footer";
import Fale from "@componentes/FaleComNossoTimeDeVendas";
import Faq from '@componentes/Faq';
import { useState, useEffect } from "react";

export default function Home() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 2000);

  }, []);

  if (carregando) {
    return <Carregando />; 
  }
  return (
    <>
      {/* Primeira Seção */}
      <div className="text-white relative   flex flex-col justify-between h-[680px] w-full bg-[url('/assets/background.png')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-nav-blue" style={{ backgroundColor: 'rgba(2, 119, 238, 0.75)', zIndex: 0 }}></div>
        <div className=" inset-0 z-0">
        <div className="absolute flex flex-col justify-between w-full h-full px-12 z-5 ">
          <Image
            width={347}
            height={347}
            src="/assets/dot.png"
            alt="logo"
            className="saturate-150 self-end"
            quality={100}
          />
          <Image
            width={347}
            height={347}
            src="/assets/dot.png"
            alt="logo"
            className="saturate-150 self-start"
            quality={100}
          />
        </div>
          <Navbar />
          <div className="flex flex-col items-center text-center justify-center w-full ">
            <h1 className="font-bold text-[32px] md:text-[40px] mt-4">
              Eleve sua experiência com a gestão inteligente
              <br />de processos.
            </h1>
            <div className=" w-auto md:w-[688px] mt-4">
              <p className=" text-[16px] md:text-[20px]">
                Diga adeus às planilhas e papéis!
                Nosso sistema transforma a forma como você gerencia seus casos.
                Automatize tarefas, centralize informações e ganhe mais tempo para
                focar no que realmente importa: seus clientes.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 items-center">
  <button 
    type="button" 
    className="w-full md:w-auto md:h-[42px] text-nav-blue bg-white font-bold py-3 px-8 shadow-md transition duration-300 z-0">
    Conheça nossa ferramenta
  </button>
  <button 
    className="w-full md:w-auto md:h-[42px] text-white bg-transparent border border-white font-bold py-3 px-8 shadow-md transition duration-300 z-0 hover:bg-white hover:text-blue-950">
    Conheça nossos planos
  </button>
</div>

          </div>
        </div>

        
      </div>

      <div className="relative flex justify-center -mt-14 sm:-mt-32">
        <Image
          width={3048}
          height={1671}
          src="/assets/first.png"
          alt="logo"
          quality={100}
          className="sm:w-[500px] md:w-[1000px]"
        
        />
      </div>

      {/* Primeiro Grid */}
      <div className="flex justify-center items-center mt-16 h-auto py-8 bg-[#F8F9FA]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 md:w-10/12 max-w-7xl mx-auto">
          <Image
            width={1846}
            height={1239}
            src="/assets/third.png"
            alt="logo"
            className="w-full h-auto"
            quality={100}
          />

          <div className="space-y-3 w-full">
            <h1 className="font-bold text-nav-blue text-[20px]">Foco na otimização de processos</h1>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Organize seus casos: </strong>
              Tenha todos os seus processos em um só lugar, com informações completas e atualizadas.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Automatize tarefas: </strong>
              Elimine tarefas repetitivas e ganhe mais tempo para atender seus clientes.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Melhore a comunicação: </strong>
              Facilite a comunicação com seus clientes e equipe, agilizando o processo.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Gere relatórios personalizados: </strong> Tenha insights valiosos sobre o desempenho do seu escritório.
            </p>
          </div>
        </div>
      </div>

      {/* Segundo Grid */}
      <div className="flex justify-center items-center mt-16 h-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 md:w-10/12 max-w-7xl mx-auto">
          <div className="space-y-3 w-full">
            <h1 className="font-bold text-nav-blue text-[20px]">Proteja seus dados e garanta a conformidade com as normas jurídicas.</h1>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Segurança de dados: </strong>
              Proteja os dados dos seus clientes com as mais modernas tecnologias de segurança.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Conformidade legal: </strong> 
              Garanta que seu escritório esteja em conformidade com as normas e regulamentações.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Auditoria: </strong>
              Gere relatórios detalhados para acompanhar o cumprimento das normas.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Backup: </strong>
              Garanta que seus dados estão seguros com nosso sistema de backup.
            </p>
          </div>

          <Image
            width={1849}
            height={1207}
            src="/assets/four.png"
            alt="logo"
            className="w-full h-auto"
            quality={100}
          />
        </div>
      </div>

      {/* Terceiro Grid */}
      <div className="flex justify-center items-center mt-16 h-auto py-8 bg-[#F8F9FA] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-11/12 md:w-10/12 max-w-7xl mx-auto">
          <Image
            width={602}
            height={402}
            src="/assets/fifth.png"
            alt="logo"
            className="w-full h-auto"
            quality={100}
          />

          <div className="space-y-3 w-full">
            <h1 className="font-bold text-nav-blue text-[20px]">Agenda e prontuário de seus pacientes.</h1>
            <p className="text-[#6B7280] font-sans text-[16px]">
              Explica pro Product Owner que o módulo de recursão paralela corrigiu o bug do JSON compilado a partir de proto-buffers.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Transparência total: </strong>
              A equipe de suporte precisa saber que a compilação final do programa complexificou o merge no parse retroativo do DOM.
            </p>
            <p className="text-[#6B7280] font-sans text-[16px]">
              <i className="bi bi-check-circle-fill text-nav-blue text-[16px]"></i> 
              <strong className="text-nav-blue">Colaboração eficiente: </strong>
              O módulo de recursão paralela causou uma race condition do polimorfismo aplicado nas classes.
            </p>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 text-white bg-nav-blue h-auto md:h-[570px] items-center justify-center gap-4 p-4 md:p-0 overflow-hidden">
  <div className="mx-auto md:mx-20 space-y-4 w-2/3">
    <h1 className="font-bold text-[20px]">Elimine todos os papéis do seu escritório</h1>

    <p className="text-white space-x-1 font-sans text-[16px]">
      <i className="bi bi-check-circle-fill text-white text-[16px]"></i> 
      <strong className="text-white">Agilidade nos processos: </strong>
      A digitalização acelera a busca e o compartilhamento de informações.
    </p>

    <p className="text-white space-x-1 font-sans text-[16px]">
      <i className="bi bi-check-circle-fill text-white text-[16px]"></i> 
      <strong className="text-white">Automatização de tarefas: </strong>
      Redução do trabalho manual com a digitalização de documentos e assinatura eletrônica.
    </p>

    <p className="text-white space-x-1 font-sans text-[16px]">
      <i className="bi bi-check-circle-fill text-white text-[16px]"></i> 
      <strong className="text-white">Melhoria na colaboração: </strong>
      Facilita que equipes trabalhem em conjunto em documentos digitais, independentemente da localização.
    </p>
  </div>

  <div className="relative items-center justify-center hidden md:flex h-full ">
    <Image
      width={1839}
      height={1710}
      src="/assets/sixty-decoration.png"
      alt="decoration"
      className="absolute  h-full w-full "
      quality={100}
    />
    <Image
      width={525}
      height={350}
      src="/assets/ilustration.png"
      alt="ilustração"
      className="absolute z-0 lg:-ml-60 lg:w-[524px]"
      quality={100}

    />
  </div>
</div>


<div className="flex flex-col bg-[#F8F9FA]  h-[336px] justify-center items-center gap-2 text-center p-4">
  <h1 className="text-[#1D79FB] font-bold text-[24px] sm:text-[32px]">Comece seu teste gratuito hoje!</h1>
  <p className="text-[#6B7280] text-[18px] sm:text-[22px]">Comece seu teste gratuito hoje!</p>

 <Fale />
</div>


<div className="flex flex-col h-auto md:h-auto justify-center items-center gap-4 text-center p-4">
  <h1 className="text-[#1D79FB] font-bold text-[24px] sm:text-[32px]">Nossos planos</h1>
  <p className="text-[#6B7280] text-[18px] sm:text-[22px]">
    Encontre o melhor plano de acordo com a necessidade do seu escritório.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mt-4">
    {/* Card 1: Plano Inicial */}
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-2">
      <h1 className="font-bold text-[#1D79FB] text-[22px]">Inicial</h1>
      <p className="text-gray-700 mt-2 text-[16px]">Ideal para pequenos escritórios ou startups. Ideal para pequenos escritórios ou startups.</p>
      <p className="text-nav-blue gap-2 my-2 font-extrabold flex justify-center items-center flex-row text-[50px]">
        R$30 <span className="text-gray-700 text-[20px] font-light mt-5">/mês</span>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a]  text-[12px] md:text-[16px]  mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px]  flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px]  mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px]  flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px]  mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px]  flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px]  mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <button className="bg-[#1D79FB] text-white rounded-md py-2 hover:bg-blue-950 transition-colors h-[48px] mt-4">
        Selecione este plano
      </button>
    </div>

    {/* Card 2: Plano Intermediário */}
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-2 relative">
      <h1 className="font-bold text-[#1D79FB] text-[22px]">Intermediário</h1>
      <p className="text-gray-700 mt-2 text-[16px]">Perfeito para empresas em crescimento. Perfeito para empresas em crescimento. </p>
      <p className="text-nav-blue gap-2 my-2 font-extrabold flex justify-center items-center flex-row text-[50px]">
        R$100 <span className="text-gray-700 text-[20px] font-light mt-5">/mês</span>
      </p>

      <p className="text-gray-700 font-sans text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <button className="bg-[#1D79FB] text-white rounded-md py-2 hover:bg-blue-950 transition-colors h-[48px] mt-4">
        Selecione este plano
      </button>


<div className="flex justify-center text-center"> 
      <div className="absolute  top-[-15px]   bg-[#26b99a] text-white font-light py-1 px-3 rounded-md shadow-md">
      <i className="bi bi-star"></i> Plano Mais Contratado
      </div>
</div>

    </div>

    {/* Card 3: Plano Completo */}
    <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-2">
      <h1 className="font-bold text-[#1D79FB] text-[22px]">Completo</h1>
      <p className="text-gray-700 mt-2 text-[16px]">Ideal para grandes escritórios e demandas complexas.</p>
      <p className="text-nav-blue gap-2 my-2 font-extrabold flex justify-center items-center flex-row text-[50px]">
        R$300 <span className="text-gray-700 text-[20px] font-light mt-5">/mês</span>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <p className="text-gray-700 font-sans text-[12px] md:text-[16px] flex">
        <i className="bi bi-check-circle-fill text-[#26b99a] text-[12px] md:text-[16px] mr-2"></i>
        bla bla bla bla bla <strong className="text-gray-700">Tem isso aqui.</strong>
      </p>

      <button className="bg-[#1D79FB] text-white rounded-md py-2 hover:bg-blue-950 transition-colors h-[48px] mt-4">
        Selecione este plano
      </button>
    </div>
  </div>
</div>



{/* <Faq /> */}
<Faq />

{/*  */}

<div className="flex flex-col  h-[336px] justify-center items-center gap-2 text-center p-4">
  <h1 className="text-[#1D79FB] font-bold text-[24px] sm:text-[32px]">Agende uma demonstração gratuita </h1>
  <p className="text-[#6B7280] text-[18px] sm:text-[22px]">Descubra como nossa plataforma pode transformar seu escritório.</p>

 <Fale />
</div>


      <Footer />
    </>
  );
}
