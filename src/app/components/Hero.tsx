"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0B0F19] to-[#0B0F19]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo - Copywriting */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-xs font-medium text-[#10B981]">
            <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
            Focado em Pequenas e Médias Empresas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Transformamos a rotina da sua empresa em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-400">
              sistemas inteligentes
            </span>{" "}
            e sites que vendem.
          </h1>

          <p className="text-lg text-gray-400 max-w-xl">
            A CKS Sistemas desenvolve softwares customizados e landing pages de
            alta performance projetadas especificamente para otimizar seus
            processos internos e escalar suas vendas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-[#10B981] hover:bg-[#0D9488] rounded-lg transition-all duration-200 shadow-lg shadow-[#10B981]/20 group"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-gray-300 hover:text-white bg-gray-800/40 hover:bg-gray-800/80 border border-gray-700 rounded-lg transition-all duration-200"
            >
              Ver Soluções
            </a>
          </div>
        </motion.div>

        {/* Lado Direito - Ilustração de Código Abstrata */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/10 to-transparent blur-2xl rounded-3xl" />
          <div className="relative bg-gray-950 border border-gray-800 rounded-xl p-6 shadow-2xl font-mono text-xs text-gray-400 leading-relaxed">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]/60" />
              </div>
              <span className="text-[10px] text-gray-600 flex items-center gap-1">
                <Terminal size={12} /> cks-software-expert.ts
              </span>
            </div>
            <p className="text-purple-400">
              const <span className="text-blue-400">empresa</span> ={" "}
              <span className="text-yellow-300">{"{"}</span>
            </p>
            <p className="pl-4">
              nome:{" "}
              <span className="text-green-400">
                &apos;Sua Empresa Escalonável&apos;
              </span>
              ,
            </p>
            <p className="pl-4">
              necessidade:{" "}
              <span className="text-green-400">
                &apos;Otimizar tempo e vender mais&apos;
              </span>
              ,
            </p>
            <p className="pl-4">
              solucao:{" "}
              <span className="text-green-400">
                &apos;CKS Sistemas Customizados&apos;
              </span>
            </p>
            <p className="text-yellow-300">{"}"};</p>
            <br />
            <p className="text-purple-400">
              function <span className="text-blue-500">acelerarNegocio</span>
              <span className="text-yellow-300">()</span> {"{"}
            </p>
            <p className="pl-4 text-emerald-400">
              return process.optimize().increaseConversion(
              <span className="text-white">100%</span>);
            </p>
            <p className="text-purple-400">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
