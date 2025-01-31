import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/6b/65/bb/6b65bbbefba3a1f8538f7ef772e1a1fe.jpg")',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="font-blackletter text-4xl md:text-6xl mb-6 fade-in"
        >
          Arte e Exclusividade para o Seu Negócio
        </h2>

        <p
          ref={subtitleRef}
          className="font-sans text-lg md:text-xl mb-12 fade-in"
          style={{ transitionDelay: "300ms" }}
        >
          Sofisticação e funcionalidade para quem exige o melhor
        </p>
        <div className="mt-24">
          <p className="absolute mt-20 bottom-8 left-1/2 -translate-x-1/2 text-gold cursive text-sm md:text-base opacity-80 max-w-sm text-center">
            "Quem não busca dentro de si, não encontrará fora."
            <span className="block mt-2 text-xs">— Boécio</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
