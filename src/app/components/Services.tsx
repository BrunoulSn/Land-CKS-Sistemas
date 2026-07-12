"use client";

import { motion } from "framer-motion";
import { Layout, Cpu, Database } from "lucide-react";

const services = [
  {
    icon: <Database className="w-8 h-8 text-[#10B981]" />,
    title: "Sistemas Web Customizados",
    desc: "Desenvolvimento de sistemas internos projetados especificamente para a rotina e regras de negócio da sua empresa.",
  },
  {
    icon: <Layout className="w-8 h-8 text-[#10B981]" />,
    title: "Sites e Landing Pages de Alta Performance",
    desc: "Criação de páginas institucionais velozes, otimizadas para SEO no Google e estruturadas com foco em converter visitantes em clientes.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#10B981]" />,
    title: "Automatização de Processos",
    desc: "Integração entre ferramentas digitais e eliminação de tarefas repetitivas manuais, poupando tempo valioso da sua equipe.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Soluções Sob Medida para{" "}
            <span className="text-[#10B981]">Otimizar Seu Negócio</span>
          </h2>
          <p className="text-gray-400">
            Chega de softwares engessados que cobram por recursos que você não
            usa. Desenvolvemos exatamente o que você precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-gray-800/50 rounded-xl w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
