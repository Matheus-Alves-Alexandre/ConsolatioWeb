import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Site Academia",
    category: "Academia",
    description:
      "Esta landing page é projetada para captar novos leads e incentivar a conversão com uma experiência direta e clara. A página destaca os principais serviços oferecidos pela academia, como treinos personalizados, planos de acompanhamento e aulas experimentais. O design é focado em um layout limpo e moderno, com chamadas para ação (CTAs) visíveis que incentivam o visitante a se cadastrar para uma aula gratuita ou agendar uma consulta. A página também conta com testemunhos de clientes, benefícios exclusivos e informações sobre planos e modalidades de treino, criando confiança e incentivando a ação imediata.",
    image: "https://i.imgur.com/XCQo2SK.png",
    gallery: [
      "https://i.imgur.com/XCQo2SK.png",
      "https://i.imgur.com/6efKet8.png",
      "https://i.imgur.com/VNNh5LX.png",
    ],
  },
  {
    id: 2,
    title: "Book De Fotografia",
    category: "Fotografia",
    description:
      "Cada imagem tem um poder único de contar uma história. Nós criamos fotos que não apenas capturam o momento, mas revelam a emoção e a essência por trás dele. Seja para retratar um evento, um retrato íntimo ou um marco importante da sua vida, estamos aqui para eternizar suas memórias com estilo e qualidade excepcionais. Entre em contato e agende sua sessão para criar lembranças que durarão para sempre.",
    image: "https://i.imgur.com/fEOEOHP.png",
    gallery: [
      "https://i.imgur.com/fEOEOHP.png",
      "https://i.imgur.com/ldFuPF8.png",
      "https://i.imgur.com/wHkIfOI.png",
    ],
  },
  {
    id: 3,
    title: "Site Advocacia",
    category: "Advocacia",
    description:
      "Esta landing page foi criada para conectar clientes com os serviços jurídicos especializados de forma clara e eficiente. Seu objetivo é transmitir confiança e segurança, destacando a experiência e a competência dos advogados, com um foco em resolver as questões legais dos clientes de maneira estratégica e personalizada. A página apresenta uma breve introdução ao escritório ou serviço jurídico, destaca as áreas de atuação, oferece uma forma simples de agendar consultas ou solicitar atendimento, além de incluir testemunhos e informações que reforçam a credibilidade e o compromisso com o cliente.",
    image: "https://i.imgur.com/PJuRBcn.png",
    gallery: [
      "https://i.imgur.com/PJuRBcn.png",
      "https://i.imgur.com/Mud8wRW.png",
      "https://i.imgur.com/35qkph4.png",
    ],
  },
  {
    id: 4,
    title: "Site Empresarial",
    category: "Empresas",
    description:
      "Encontre as melhores soluções financeiras para sua empresa. Nossa abordagem estratégica oferece desde planejamento até a execução de ações que visam o crescimento sustentável. Entre em contato para saber como podemos ajudar a sua empresa a prosperar.",
    image: "https://i.imgur.com/uN0tf4h.png",
    gallery: [
      "https://i.imgur.com/uN0tf4h.png",
      "https://i.imgur.com/BBH7cOT.png",
      "https://i.imgur.com/TNXvCoV.png",
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-blackletter text-4xl md:text-5xl text-center mb-12 text-gold">
          Portfólio
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-sm transition-colors duration-300 font-sans
                ${
                  selectedCategory === category
                    ? "bg-gold text-dark"
                    : "text-gold border border-gold hover:bg-gold hover:text-dark"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative cursor-pointer fade-in"
              onClick={() => setSelectedProject(project)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="font-blackletter text-2xl text-gold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-white">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-dark/95"
              onClick={() => setSelectedProject(null)}
            />
            <div className="relative bg-dark border border-gold max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gold hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <h3 className="font-blackletter text-3xl text-gold mb-4 text-center">
                  {selectedProject.title}
                </h3>

                {/* Gallery */}
                <div className="relative aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${
                      currentImageIndex + 1
                    }`}
                    className="object-cover w-full h-full"
                  />

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {selectedProject.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors duration-300
                          ${
                            currentImageIndex === index
                              ? "bg-gold"
                              : "bg-white/50 hover:bg-white"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="font-sans text-white/90 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
