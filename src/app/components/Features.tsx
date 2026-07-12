"use client";

import { CheckCircle } from "lucide-react";

const features = [
  "Desenvolvimento centrado no crescimento operacional e sucesso do cliente.",
  "Tecnologias modernas que garantem carregamento instantâneo.",
  "Arquitetura focada em SEO estruturado para rankear organicamente no Google.",
  "Suporte técnico ágil, humanizado e descomplicado.",
];

export default function Features() {
  return (
    <section id="diferenciais" className="py-24 bg-[#0F1524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Por que escolher a{" "}
              <span className="text-[#10B981]">CKS Sistemas</span>?
            </h2>
            <p className="text-gray-400">
              Garantimos um ecossistema digital sólido e estratégico focado em
              gerar lucros e reduzir atritos operacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-900/40 rounded-xl border border-gray-800/80"
              >
                <CheckCircle
                  className="text-[#10B981] shrink-0 mt-0.5"
                  size={20}
                />
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
