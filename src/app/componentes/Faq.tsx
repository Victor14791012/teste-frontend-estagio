"use client";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); 

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum. Fusce nec iaculis justo, id elementum leo.",
    },
    {
      question: "Suspendisse magna nulla, pellentesque rutrum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum. Fusce nec iaculis justo, id elementum leo.",
    },
    {
      question: "Nunc at est sit amet erat ultrices gravida?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum. Fusce nec iaculis justo, id elementum leo.",
    },
    {
      question: "Curabitur elementum ante orci??",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum. Fusce nec iaculis justo, id elementum leo.",
    },
    {
        question: "Lacus id venenatis convallis, justo leo posuere purus?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat porttitor suscipit. Proin congue tristique erat quis elementum. Fusce nec iaculis justo, id elementum leo.",
      },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:w-[780px]">
        <div className="flex flex-col justify-center items-center mx-auto max-w-full">
          <div className="w-full">
            <div>
              <div className="mb-6 flex justify-center">
                <h2 className="text-3xl md:text-4xl text-center font-bold text-nav-blue mb-5">
                  Perguntas Frequentes
                </h2>
              </div>

              {faqs.map((faq, index) => (
                <div className="accordion-group" >
                  <div className="accordion pb-8 border-b border-solid border-gray-200">
                    <button
                      className="accordion-toggle flex justify-between text-xl font-normal text-gray-600 w-full transition hover:text-indigo-600"
                      onClick={() => toggleFaq(index)}
                    >
                      <h5 className="font-bold text-[#121214] text-[16px] text-start">
                        {faq.question}
                      </h5>
                      <svg
                        className={`text-nav-blue transition ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>

                    {/* Conteúdo do FAQ */}
                    <div
                      className={`accordion-content w-full overflow-hidden transition-all duration-500 ${
                        openIndex === index ? "flex" : "hidden"
                      }`}
                    >
                      <p className="text-base font-normal text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}