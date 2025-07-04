"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function ThiagoPalmaSite() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set())
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsVisible(window.scrollY > 50) // Reduzido de 100 para 50
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = Number.parseInt(entry.target.getAttribute("data-card-index") || "0")
        if (entry.isIntersecting) {
          setAnimatedCards((prev) => new Set([...prev, cardIndex]))
        }
        // Removido o else que fazia o fade out
      })
    }, observerOptions)

    // Observar todos os cards de serviços
    const cards = document.querySelectorAll("[data-card-index]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem('nome') as HTMLInputElement)?.value || '';
    const empresa = (form.elements.namedItem('empresa') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const whatsapp = (form.elements.namedItem('whatsapp') as HTMLInputElement)?.value || '';
    const desafio = (form.elements.namedItem('desafio') as HTMLTextAreaElement)?.value || '';
    const mensagem =
      `Nome: ${nome}\n` +
      `Empresa: ${empresa}\n` +
      `E-mail: ${email}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Desafio com tráfego pago:\n${desafio}`;
    const url = `https://wa.me/5548999166805?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Formas Geométricas Animadas - Tons Claros */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Formas originais com cantos arredondados */}
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-3xl blur-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-2xl blur-lg transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${45 + scrollY * 0.1}deg)` }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-r from-orange-200/40 to-red-200/40 rounded-3xl blur-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.12}px) rotate(${12 + scrollY * 0.03}deg)` }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-full blur-lg transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-indigo-200/40 to-purple-200/40 rounded-2xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${45 + scrollY * 0.08}deg)` }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-36 h-36 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>

        {/* Novas formas geométricas adicionais */}
        <div
          className="absolute top-10 right-1/4 w-20 h-20 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-2xl blur-md transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * -0.06}deg)` }}
        ></div>
        <div
          className="absolute top-80 left-5 w-14 h-14 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * 0.04}deg)` }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 rounded-3xl blur-lg transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * -0.03}deg)` }}
        ></div>
        <div
          className="absolute bottom-60 right-1/4 w-18 h-18 bg-gradient-to-r from-violet-200/30 to-purple-200/30 rounded-full transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.18}px)` }}
        ></div>
        <div
          className="absolute top-1/4 right-5 w-26 h-26 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-2xl blur-sm transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.09}px) rotate(${scrollY * 0.07}deg)` }}
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-22 h-22 bg-gradient-to-r from-red-200/30 to-pink-200/30 rounded-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.14}px) rotate(${scrollY * -0.05}deg)` }}
        ></div>
        <div
          className="absolute top-2/3 right-10 w-30 h-30 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-md transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.11}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 left-5 w-16 h-16 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-2xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.16}px) rotate(${scrollY * 0.08}deg)` }}
        ></div>
        <div
          className="absolute top-3/4 left-1/4 w-12 h-12 bg-gradient-to-r from-lime-200/30 to-green-200/30 rounded-xl blur-sm transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.13}px) rotate(${scrollY * -0.04}deg)` }}
        ></div>
        <div
          className="absolute top-1/6 left-1/2 w-28 h-28 bg-gradient-to-r from-fuchsia-200/30 to-pink-200/30 rounded-3xl blur-lg transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.07}px) rotate(${scrollY * 0.06}deg)` }}
        ></div>
        <div
          className="absolute bottom-1/6 right-1/3 w-20 h-20 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.17}px)` }}
        ></div>
        <div
          className="absolute top-1/5 right-1/2 w-14 h-14 bg-gradient-to-r from-rose-200/30 to-red-200/30 rounded-2xl blur-md transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.11}px) rotate(${scrollY * 0.09}deg)` }}
        ></div>

        {/* Novas formas geométricas cinzas com movimento no scroll - MAIS VISÍVEIS */}
        <div
          className="absolute top-32 right-16 w-40 h-40 bg-gray-400/30 rounded-3xl blur-sm transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.04}deg)` }}
        ></div>
        <div
          className="absolute top-96 left-16 w-32 h-32 bg-gray-500/25 rounded-2xl blur-md transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * -0.06}deg)` }}
        ></div>
        <div
          className="absolute top-1/2 right-8 w-36 h-36 bg-gray-300/35 rounded-full blur-lg transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-32 left-8 w-44 h-44 bg-gray-400/40 rounded-3xl blur-sm transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.05}deg)` }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-28 h-28 bg-gray-500/30 rounded-2xl blur-md transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * -0.08}deg)` }}
        ></div>
        <div
          className="absolute bottom-48 right-1/4 w-38 h-38 bg-gray-300/45 rounded-full blur-lg transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.14}px)` }}
        ></div>
        <div
          className="absolute top-1/4 left-1/2 w-34 h-34 bg-gray-400/35 rounded-3xl blur-sm transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * 0.11}px) rotate(${scrollY * 0.07}deg)` }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/4 w-26 h-26 bg-gray-500/40 rounded-2xl blur-md transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.16}px) rotate(${scrollY * -0.04}deg)` }}
        ></div>
        <div
          className="absolute top-3/5 right-1/3 w-42 h-42 bg-gray-300/30 rounded-full blur-lg transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * 0.13}px)` }}
        ></div>
        <div
          className="absolute bottom-1/6 right-8 w-24 h-24 bg-gray-400/50 rounded-2xl blur-sm transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.09}px) rotate(${scrollY * 0.06}deg)` }}
        ></div>
        <div
          className="absolute top-1/6 right-1/4 w-30 h-30 bg-gray-500/35 rounded-3xl blur-md transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * 0.07}px) rotate(${scrollY * -0.05}deg)` }}
        ></div>
        <div
          className="absolute bottom-2/3 left-1/6 w-36 h-36 bg-gray-300/40 rounded-full blur-lg transition-transform duration-700"
          style={{ transform: `translateY(${scrollY * -0.11}px)` }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/80 border-b border-gray-200/50 fixed w-full top-0">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-sm">TP</span>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Portfólio
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contato
          </button>
        </nav>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero Section - Nome Centralizado */}
        <section className="w-full h-[70vh] flex items-center justify-center">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-text-fade leading-[1.2] pb-8 pt-4">
                Thiago Palma
              </h1>
              <p className="px-4 text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed italic max-w-4xl mx-auto animate-text-fade-delay">
                Há 6 anos transformando cliques em vendas, visitantes em clientes e campanhas em faturamento.
                Estratégias que geram resultados reais.
              </p>
            </div>

            {/* Indicador de Scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </section>

        {/* Seção com Foto e Informações */}
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Área da Foto */}
              <div
                className={`mx-auto lg:mx-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
              >
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl backdrop-blur-md bg-white/60 border border-gray-200/50 shadow-2xl overflow-hidden">
                    <Image
                      src="/images/thiago-palma.png"
                      alt="Thiago Palma - Especialista em Tráfego"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Efeito de brilho */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20"></div>
                </div>
              </div>

              {/* Informações */}
              <div
                className={`flex flex-col justify-center space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
              >
                <div className="space-y-4">
                  <p className="max-w-[600px] text-gray-700 md:text-lg leading-relaxed">
                    Cansado de investir e não ter retorno? Chega de desperdiçar seu dinheiro, com as estratégias certas,
                    seus anúncios vão atrair quem realmente compra. Se o objetivo é vender todos os meses, você está no
                    lugar certo.
                  </p>
                  <p className="max-w-[600px] text-gray-700 md:text-lg leading-relaxed font-medium">
                    Transformo investimentos em resultados extraordinários. Mais de 1 milhão em vendas nos últimos 6
                    meses através de campanhas estratégicas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => scrollToSection("contato")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Quero Mais Vendas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
                    onClick={() => scrollToSection("portfolio")}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Ver Casos de Sucesso
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center transform hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl font-bold text-gray-800">R$ 1M+</div>
                    <div className="text-sm text-gray-600">nos últimos 6 meses</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl font-bold text-gray-800">500+</div>
                    <div className="text-sm text-gray-600">campanhas criadas</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-200">
                    <div className="text-2xl font-bold text-gray-800">98%</div>
                    <div className="text-sm text-gray-600">clientes satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-6 md:py-12 lg:py-16 bg-gray-50/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 animate-fade-in-up">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">Sobre Mim</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
                    Especialista em Transformar Cliques em Vendas
                  </h2>
                  <p className="text-gray-700 md:text-lg leading-relaxed">
                    Sou especialista em tráfego pago com foco em resultados. Minha missão é maximizar o ROI dos meus
                    clientes através de estratégias avançadas de Google Ads, Meta Ads e otimização de conversão.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <Target className="h-6 w-6 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Estratégia Focada</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">ROI Garantido</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <Users className="h-6 w-6 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <Zap className="h-6 w-6 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">Resultados Rápidos</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 animate-fade-in-up-delay">
                <Card className="bg-white/80 border-gray-200 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Certificações</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Google Ads Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Meta Blueprint Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Google Analytics Expert</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Conversion Optimization Specialist</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-text-fade">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">Serviços</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
                Como Multiplico Suas Vendas
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-700 md:text-lg">
                Estratégias comprovadas para transformar seu investimento em tráfego em resultados extraordinários
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-3 lg:gap-8">
              <Card
                data-card-index="0"
                className={`bg-white/80 border-gray-200 hover:shadow-xl transition-all duration-700 group transform hover:scale-105 hover:-translate-y-2 ${
                  animatedCards.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardHeader>
                  <Search className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-gray-800">Google Ads</CardTitle>
                  <CardDescription className="text-gray-600">
                    Campanhas otimizadas para capturar leads qualificados e gerar vendas no momento certo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Pesquisa e Rede de Display
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Shopping e YouTube Ads
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Otimização de CPA/ROAS
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Remarketing Avançado
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                data-card-index="1"
                className={`bg-white/80 border-gray-200 hover:shadow-xl transition-all duration-700 group transform hover:scale-105 hover:-translate-y-2 ${
                  animatedCards.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardHeader>
                  <Globe className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-gray-800">Meta Ads</CardTitle>
                  <CardDescription className="text-gray-600">
                    Campanhas no Facebook e Instagram focadas em conversão e crescimento de audiência
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Facebook e Instagram Ads
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Lookalike Audiences
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Pixel e Conversions API
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Creative Testing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                data-card-index="2"
                className={`bg-white/80 border-gray-200 hover:shadow-xl transition-all duration-700 group transform hover:scale-105 hover:-translate-y-2 ${
                  animatedCards.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-gray-800">CRO & Analytics</CardTitle>
                  <CardDescription className="text-gray-600">
                    Otimização de conversão e análise de dados para maximizar resultados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Landing Page Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      A/B Testing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      GA4 e GTM Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Relatórios Avançados
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                data-card-index="3"
                className={`bg-white/80 border-gray-200 hover:shadow-xl transition-all duration-700 group transform hover:scale-105 hover:-translate-y-2 ${
                  animatedCards.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardHeader>
                  <Globe className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-gray-800">Criação de Landing Pages</CardTitle>
                  <CardDescription className="text-gray-600">
                    Landing pages otimizadas para conversão com design responsivo e foco em resultados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Design Responsivo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Otimização para Conversão
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Testes A/B
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Integração com CRM
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                data-card-index="4"
                className={`bg-white/80 border-gray-200 hover:shadow-xl transition-all duration-700 group transform hover:scale-105 hover:-translate-y-2 ${
                  animatedCards.has(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardHeader>
                  <Zap className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-gray-800">Automações</CardTitle>
                  <CardDescription className="text-gray-600">
                    Automações inteligentes para nutrir leads e aumentar a eficiência das campanhas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Email Marketing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Sequências de Nutrição
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Chatbots Inteligentes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Integração com CRM
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                data-card-index="5"
                className={`bg-white/80 border-gray-200 hover:shadow-xl transition-all duration-700 group transform hover:scale-105 hover:-translate-y-2 ${
                  animatedCards.has(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardHeader>
                  <Target className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-gray-800">Estratégia de Marca</CardTitle>
                  <CardDescription className="text-gray-600">
                    Desenvolvimento de identidade visual e posicionamento estratégico da marca
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Identidade Visual
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Posicionamento de Marca
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Estratégia de Conteúdo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                      Análise de Concorrência
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio/Cases Section */}
        <section id="portfolio" className="w-full py-6 md:py-12 lg:py-16 bg-gray-50/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
              <Badge className="bg-green-100 text-green-700 border-green-200">Casos de Sucesso</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
                Resultados Que Falam Por Si
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white/80 border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">E-commerce de Moda</CardTitle>
                  <CardDescription className="text-gray-600">Aumento de 340% no faturamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROAS:</span>
                      <span className="text-green-600 font-bold">8.5x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CPA:</span>
                      <span className="text-blue-600 font-bold">-65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversões:</span>
                      <span className="text-purple-600 font-bold">+280%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">SaaS B2B</CardTitle>
                  <CardDescription className="text-gray-600">Geração de 1.200 leads qualificados/mês</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">CPL:</span>
                      <span className="text-green-600 font-bold">R$ 45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxa Conversão:</span>
                      <span className="text-blue-600 font-bold">12.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">LTV/CAC:</span>
                      <span className="text-purple-600 font-bold">15:1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Infoproduto</CardTitle>
                  <CardDescription className="text-gray-600">R$ 2.8M em vendas em 6 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROAS:</span>
                      <span className="text-green-600 font-bold">12.3x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ticket Médio:</span>
                      <span className="text-blue-600 font-bold">R$ 1.247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vendas:</span>
                      <span className="text-purple-600 font-bold">2.247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">Contato</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
                    Pronto Para Multiplicar Suas Vendas?
                  </h2>
                  <p className="text-gray-700 md:text-lg">
                    Vamos conversar sobre como posso transformar seu investimento em tráfego em resultados
                    extraordinários. Consultoria gratuita para analisar seu negócio.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">thiagodasilvapalma@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">(48) 99916-6805</span>
                  </div>
                  <a
                    href="https://wa.me/48999166805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/80 border border-gray-200 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-gray-50 shadow-sm"
                  >
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">WhatsApp - Resposta em até 1h</span>
                  </a>
                </div>
              </div>
              <Card className="bg-white/80 border-gray-200 transform hover:scale-105 transition-all duration-500 animate-fade-in-up-delay shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Entre em contato</CardTitle>
                  <CardDescription className="text-gray-600">
                    Preencha o formulário abaixo para entrar em contato
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="nome"
                        placeholder="Nome"
                        className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 transition-colors"
                      />
                      <Input
                        name="empresa"
                        placeholder="Empresa"
                        className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 transition-colors"
                    />
                    <Input
                      name="whatsapp"
                      type="tel"
                      placeholder="WhatsApp"
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 transition-colors"
                    />
                    <Textarea
                      name="desafio"
                      placeholder="Qual seu principal desafio com tráfego pago?"
                      className="min-h-[100px] bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 transition-colors"
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero Minha Consultoria Gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white/80 backdrop-blur-md">
        <p className="text-xs text-gray-600">© 2025 Vitor Palma - Desenvolvedor Web. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Termos de Uso
          </Link>
        </nav>
      </footer>
    </div>
  )
}
