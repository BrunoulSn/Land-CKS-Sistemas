"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function CTAFinal() {
  return (
    <section id="contato" className="py-24 bg-[#0B0F19] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden px-8 py-12 md:py-20 text-center bg-gradient-to-b from-gray-900 to-[#0F1524] border border-gray-800 shadow-2xl"
        >
          {/* Efeito luminoso de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#10B981]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Pronto para elevar o nível digital da sua empresa?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Fale agora com nossos fundadores. Vamos analisar sua operação
              atual e desenhar a melhor arquitetura de software para o seu
              modelo de negócio.
            </p>
            <div className="pt-4">
              {/* O link aponta para o WhatsApp comercial. Substitua pelo link real do seu número */}
              <a
                href="https://wa.me/+554796746757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#10B981] hover:bg-[#0D9488] rounded-xl transition-all duration-200 shadow-xl shadow-[#10B981]/30 group"
              >
                <MessageSquare className="mr-2 w-5 h-5 fill-current" />
                Chamar no WhatsApp Comercial
              </a>
              <p className="text-xs text-gray-500 mt-3">
                Diagnóstico gratuito e sem compromisso comercial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
