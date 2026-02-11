
import { SpaceBackground } from '../components/SpaceBackground'
import { motion } from 'framer-motion'
import { Check, Lock, ExternalLink, Calendar, MessageCircle, Heart, Zap, Play } from 'lucide-react'

export default function NodrizaPreparacion() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden font-montserrat">
      <SpaceBackground />
      
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-green-500/50 flex items-center justify-center bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-pulse">
              <Check className="w-10 h-10 text-green-400" />
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-cinzel text-3xl md:text-5xl lg:text-6xl leading-tight">
            ¡TU SESIÓN DE CLARIDAD ESTÁ <span className="text-gold-gradient font-bold block mt-2 md:inline md:mt-0">CONFIRMADA!</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Has dado el primer paso hacia la materialización de tu propósito.
            <br className="hidden md:block" />
            Ahora, es vital que te prepares para aprovechar al máximo nuestros 45 minutos juntos.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 mx-auto max-w-2xl bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-start gap-4 text-left backdrop-blur-sm">
             <div className="shrink-0 mt-1">
                <Lock className="w-5 h-5 text-red-400" />
             </div>
             <p className="text-sm md:text-base text-gray-200">
               <span className="font-bold text-red-400">IMPORTANTE:</span> Si no asistes a la sesión sin aviso previo, el sistema bloqueará futuras reservas.
             </p>
          </motion.div>
        </motion.div>

        {/* Step 1: Briefing Video */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <span className="text-primary-gold font-cinzel text-sm tracking-[0.2em] uppercase">Paso #1</span>
            <h2 className="text-2xl md:text-3xl font-cinzel mt-2 text-white">Briefing de Apertura</h2>
            <p className="text-gray-400 mt-2 text-sm">(Mira este video de 3 minutos antes de nuestra llamada)</p>
          </div>
          
          <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 relative group">
             {/* Placeholder for Video Embed */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/40 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-gold/90 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-primary-navy fill-current" />
                  </div>
                  <span className="font-cinzel text-sm tracking-widest text-primary-gold-light">Reproducir Video</span>
                </div>
             </div>
             {/* Replace this div with actual iframe when video ID is known */}
             {/* <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="Briefing Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                ></iframe> */}
          </div>
        </motion.section>

        {/* Step 2: Cards Grid */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
           <div className="text-center mb-12">
            <span className="text-primary-gold font-cinzel text-sm tracking-[0.2em] uppercase">Paso #2</span>
            <h2 className="text-2xl md:text-3xl font-cinzel mt-2 text-white">Garantiza tu Éxito</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                id: "01",
                icon: <MessageCircle className="w-6 h-6 text-primary-gold" />,
                title: "Monitorea tu WhatsApp",
                desc: "Te contactaré personalmente para confirmar los detalles técnicos. Es indispensable que respondas para mantener tu cupo activo."
              },
              {
                id: "02",
                icon: <Heart className="w-6 h-6 text-primary-gold" />,
                title: "Verifica tu Intención",
                desc: "Esta sesión es para personas listas para invertir en su expansión. Si solo buscas 'info gratis', por favor cancela para dar espacio a otro."
              },
              {
                id: "03",
                icon: <ExternalLink className="w-6 h-6 text-primary-gold" />, 
                title: "El costo de la inacción",
                desc: "Reflexiona antes de la llamada: ¿Cuánto te está costando (emocional y financieramente) seguir en el mismo lugar?"
              },
              {
                id: "04",
                icon: <Zap className="w-6 h-6 text-primary-gold" />,
                title: "Construye certeza",
                desc: "Mira los casos de éxito debajo. Necesito que vengas con la convicción de que es posible para ti también."
              }
            ].map((card, idx) => (
              <motion.div 
                key={card.id}
                variants={itemVariants}
                className="relative bg-primary-navy/40 border border-white/5 p-8 rounded-xl backdrop-blur-md overflow-hidden hover:border-primary-gold/30 transition-colors group"
              >
                <div className="absolute -right-4 -bottom-8 text-9xl font-cinzel font-black text-white/[0.03] select-none group-hover:text-primary-gold/[0.05] transition-colors duration-500">
                  {card.id}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-gold/10 border border-primary-gold/20">
                    {card.icon}
                  </div>
                  <h3 className="font-cinzel text-lg md:text-xl text-white font-bold">{card.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed relative z-10">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Step 3: Calendar CTA */}
        <motion.section 
          className="mb-24 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-navy/80 to-primary-navy/40 border border-primary-gold/20 p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-primary-gold/5 blur-3xl rounded-full transform scale-150 animate-pulse-slow"></div>
             
             <div className="relative z-10">
                <span className="text-primary-gold font-cinzel text-sm tracking-[0.2em] uppercase">Paso #3</span>
                <h2 className="text-2xl md:text-4xl font-cinzel mt-2 mb-6 text-white">Confirmación Definitiva</h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  He enviado una invitación a tu calendario. Por favor dale click en 'Añadir al calendario' y responde 'SÍ' a la asistencia para bloquear el espacio.
                </p>
                
                <button className="button-gold-metallic px-8 py-4 rounded-full text-base md:text-lg flex items-center justify-center gap-3 mx-auto shadow-[0_0_25px_rgba(166,124,0,0.4)] hover:shadow-[0_0_40px_rgba(166,124,0,0.6)]">
                  <Calendar className="w-5 h-5" />
                  <span>IR A MI CALENDARIO</span>
                </button>
             </div>
          </div>
        </motion.section>

        {/* Step 4: Testimonials Placeholder */}
        <section className="text-center mb-20">
            <span className="text-primary-gold font-cinzel text-sm tracking-[0.2em] uppercase">Paso #4</span>
            <h2 className="text-2xl md:text-3xl font-cinzel mt-2 text-white mb-8">Inspírate</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="aspect-[9/16] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Testimonio #{i}</span>
                 </div>
               ))}
            </div>
            <p className="mt-4 text-xs text-gray-500 italic">Los testimonios se cargarán aquí (Placeholder)</p>
        </section>

        {/* Footer Link */}
        <div className="text-center pb-8">
           <a href="/" className="text-gray-400 hover:text-white hover:text-primary-gold transition-colors text-sm tracking-widest uppercase border-b border-transparent hover:border-primary-gold pb-1">
             Volver al Inicio
           </a>
        </div>

      </main>
    </div>
  )
}
