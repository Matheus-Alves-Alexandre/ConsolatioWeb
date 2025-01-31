import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto relative">
        <h2 className="font-blackletter text-4xl md:text-5xl text-center mb-12 text-gold">
          Entre em Contato
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="lg:pl-12 flex flex-col justify-between">
            <div>
              <h3 className="font-blackletter text-2xl text-gold mb-6">
                Informações de Contato
              </h3>
              <p className="text-white/80 mb-8 font-sans leading-relaxed">
                Estamos prontos para transformar sua visão em realidade. Entre
                em contato para discutirmos seu próximo projeto.
              </p>

              <div className="space-y-4 mb-12">
                <a
                  href="mailto:contato@consolatio.com"
                  className="flex items-center gap-4 text-white hover:text-gold transition-colors duration-300"
                >
                  <Mail size={20} />
                  <span>m.alexandre016@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-blackletter text-2xl text-gold mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/consolatio_web/"
                  className="text-white hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550196061252&locale=pt_BR"
                  className="text-white hover:text-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/consolatio-web/?viewAsMember=true"
                  className="text-white hover:text-gold transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://wa.me/5511968737265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-12 p-6 border-l-2 border-gold bg-dark/30">
              <p className="cursive text-xl text-gold mb-2">
                "A verdadeira nobreza está nas ações."
              </p>
              <footer className="text-white/80 text-sm">— Boécio</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
