import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  quote?: {
    text: string;
    author: string;
  };
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Quanto custa um site profissional? Guia completo para 2025",
    excerpt:
      "Se você está pensando em criar um site para seu negócio ou projeto, é provável que tenha se perguntado: Quanto custa um site profissional? A resposta não é tão simples, pois o preço varia de acordo com diversos fatores, como complexidade, design, funcionalidades e o profissional ou empresa contratada. Neste guia, vamos detalhar os custos envolvidos na criação de um site em 2024 para ajudar você a tomar a melhor decisão.",
    content: ` preço de um site profissional varia conforme a complexidade, design e funcionalidades. Se você está pensando em criar um site, é importante entender os custos envolvidos para tomar a melhor decisão. Vamos explorar os valores mais comuns em 2024 e ajudá-lo a escolher a opção ideal para seu negócio.

        Faixas de Preço

        Básico (Landing Page) – R$ 500 a R$ 2.500 
        Ideal para quem precisa de um site simples para apresentar um serviço ou produto. Geralmente inclui uma única página com informações essenciais e um formulário de contato.

        Profissional Personalizado – R$ 3.000 a R$ 10.000
        Inclui um design exclusivo, múltiplas páginas, SEO otimizado e integrações com redes sociais e automação de marketing. Perfeito para empresas que desejam um site mais completo e profissional.

        E-commerce/Plataformas – R$ 10.000 a R$ 50.000
        Voltado para lojas virtuais e plataformas personalizadas. Inclui carrinho de compras, métodos de pagamento, banco de dados, segurança reforçada e alta performance para lidar com muitos acessos.

        Conclusão

        Criar um site é um investimento essencial para qualquer negócio. Avalie suas necessidades e escolha a melhor solução para seu orçamento. Se precisar de um site profissional, a Consolatio Web pode ajudar com projetos sob medida para você!`,
    image:
      "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    date: "28 de Janeiro, 2025",
    author: "Matheus Alexandre",
    quote: {
      text: "A simplicidade é a sofisticação suprema",
      author: "Leonardo da Vinci",
    },
  },
  {
    id: 2,
    title:
      "Como escolher a melhor agência de criação de sites para o seu negócio?",
    excerpt:
      "Escolher a agência certa para criar seu site pode fazer toda a diferença no sucesso da sua empresa. Um site profissional impacta diretamente a credibilidade, a conversão de clientes e o posicionamento no Google. Mas como saber qual agência é a melhor para você? Confira os principais pontos a considerar antes de tomar sua decisão",
    content: `O que avaliar ao escolher uma agência?

Portfólio e experiência
Verifique os projetos anteriores da agência para entender seu estilo e qualidade.

Serviços oferecidos
Algumas agências oferecem apenas o desenvolvimento do site, enquanto outras incluem SEO, marketing digital e manutenção.

Depoimentos e avaliações
Pesquise a opinião de clientes anteriores para garantir que a agência entrega bons resultados.

Custo-benefício
Compare preços, mas lembre-se: o mais barato nem sempre é a melhor opção.

Suporte e manutenção
Um site precisa de atualizações constantes. Escolha uma agência que ofereça suporte adequado.

Conclusão

A escolha da agência certa pode economizar tempo, dinheiro e garantir um site eficiente e profissional. Avalie bem as opções e encontre um parceiro que realmente atenda às suas necessidades. A Consolatio Web está pronta para ajudar você a criar um site de alta qualidade!`,
    image:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    date: "20 de Dezembro, 2024",
    author: "Matheus Alexandre",
    quote: {
      text: "O luxo é a necessidade que começa onde a necessidade termina",
      author: "Coco Chanel",
    },
  },
  {
    id: 3,
    title: "Vantagens de ter um site profissional para o seu negócio",
    excerpt:
      "No mundo digital de hoje, ter um site profissional não é mais um luxo, mas uma necessidade. Empresas que investem em um site bem estruturado ganham mais credibilidade, aumentam suas vendas e se destacam da concorrência.",
    content: `Benefícios de um site profissional

        Credibilidade e autoridade
        Um site bem projetado transmite confiança e profissionalismo aos clientes.

        Disponibilidade 24/7
        Diferente de um estabelecimento físico, um site está sempre acessível para os visitantes.

        Maior alcance e visibilidade
        Seu negócio pode ser encontrado por clientes de qualquer lugar do mundo.

        Otimização para mecanismos de busca (SEO)
        Um site bem otimizado melhora seu posicionamento no Google, atraindo mais visitantes.

        Geração de leads e vendas
        Com formulários e chamadas para ação estratégicas, um site pode converter visitantes em clientes.

        Conclusão

      Investir em um site profissional é essencial para qualquer negócio que deseja crescer e se destacar no mercado.
      A Consolatio Web pode ajudá-lo a criar um site de alta performance e impacto!`,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    date: "10 de Janeiro, 2025",
    author: "Matheus Alexandre",
    quote: {
      text: "O tipo é a voz da página",
      author: "Robert Bringhurst",
    },
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const postRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    postRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-blackletter text-4xl md:text-5xl text-center mb-12 text-gold">
          Insights & Reflexões
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (postRefs.current[index] = el)}
              className="group cursor-pointer fade-in"
              onClick={() => setSelectedPost(post)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-blackletter text-2xl text-gold mb-2">
                  {post.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {post.date} • {post.author}
                </p>
                <p className="text-white/90 font-sans">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-dark/95"
              onClick={() => setSelectedPost(null)}
            />
            <div className="relative bg-dark border border-gold max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gold hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="font-blackletter text-3xl text-gold mb-2">
                  {selectedPost.title}
                </h3>

                <p className="text-white/80 text-sm mb-6">
                  {selectedPost.date} • {selectedPost.author}
                </p>

                {selectedPost.quote && (
                  <blockquote className="my-8 p-6 border-l-2 border-gold bg-dark/50">
                    <p className="cursive text-xl text-gold mb-2">
                      "{selectedPost.quote.text}"
                    </p>
                    <footer className="text-white/80 text-sm">
                      — {selectedPost.quote.author}
                    </footer>
                  </blockquote>
                )}

                <div className="font-sans text-white/90 space-y-4 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
