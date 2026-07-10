"use client";

import { motion } from "framer-motion";
import { Users, Code, Target } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0F1524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Aproximando Pequenos e Médios Negócios da{" "}
              <span className="text-[#10B981]">Alta Tecnologia</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              A CKS Sistemas nasceu com um propósito claro: desmistificar o
              desenvolvimento de software de ponta para empresas em crescimento.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Acreditamos que planilhas confusas e sistemas genéricos engessam o
              crescimento do seu negócio. Por isso, projetamos soluções digitais
              exclusivas que se adaptam exatamente ao seu fluxo de trabalho,
              gerando clareza operacional e resultados financeiros reais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 space-y-3">
              <div className="p-3 bg-[#10B981]/10 rounded-lg text-[#10B981] w-fit">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Atendimento Direto
              </h3>
              <p className="text-sm text-gray-400">
                Você lida diretamente com os fundadores e especialistas
                responsáveis pelo projeto.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 space-y-3">
              <div className="p-3 bg-[#10B981]/10 rounded-lg text-[#10B981] w-fit">
                <Code size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Código Premium
              </h3>
              <p className="text-sm text-gray-400">
                Arquitetura de software limpa, rápida, escalonável e
                extremamente segura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
