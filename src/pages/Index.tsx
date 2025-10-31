import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: 'Server',
    title: 'Настройка серверов',
    description: 'Профессиональная настройка и администрирование серверов любой сложности',
    features: ['Linux/Windows', 'Виртуализация', 'Безопасность', 'Мониторинг'],
    price: 'от 5 000 ₽'
  },
  {
    icon: 'Wrench',
    title: 'Выезд мастера',
    description: 'Быстрый выезд специалиста для решения IT-проблем на месте',
    features: ['Диагностика', 'Ремонт ПК', 'Настройка сети', 'Консультация'],
    price: 'от 2 000 ₽'
  },
  {
    icon: 'Camera',
    title: 'Видеонаблюдение',
    description: 'Проектирование и монтаж систем видеонаблюдения под ключ',
    features: ['IP-камеры', 'DVR/NVR', 'Удалённый доступ', 'Облачное хранение'],
    price: 'от 15 000 ₽'
  },
  {
    icon: 'Network',
    title: 'Подключение офиса',
    description: 'Комплексное подключение офиса к сети и настройка инфраструктуры',
    features: ['Сетевая архитектура', 'Wi-Fi', 'VPN', 'Телефония'],
    price: 'от 10 000 ₽'
  },
  {
    icon: 'Mail',
    title: 'Настройка почтовых сервисов',
    description: 'Настройка корпоративной почты и почтовых серверов',
    features: ['Exchange/Mail', 'Антиспам', 'Синхронизация', 'Безопасность'],
    price: 'от 3 000 ₽'
  },
  {
    icon: 'FileText',
    title: 'Настройка офисных программ',
    description: 'Установка и настройка офисного ПО для эффективной работы',
    features: ['MS Office', '1C', 'CRM системы', 'Лицензирование'],
    price: 'от 1 500 ₽'
  },
  {
    icon: 'Monitor',
    title: 'Удалённая поддержка',
    description: 'Оперативная техническая поддержка через интернет',
    features: ['24/7 доступ', 'Решение проблем', 'Консультации', 'Обновления'],
    price: 'от 1 000 ₽'
  }
];

const pricingPlans = [
  {
    name: 'Базовый',
    price: '3 000',
    period: 'разовое обращение',
    features: [
      'Консультация специалиста',
      'Диагностика проблемы',
      'Базовая настройка',
      'Гарантия 1 месяц'
    ]
  },
  {
    name: 'Бизнес',
    price: '25 000',
    period: 'в месяц',
    features: [
      'Приоритетная поддержка',
      'Выезд специалиста 24/7',
      'Обслуживание инфраструктуры',
      'Мониторинг систем',
      'Гарантия 1 год'
    ],
    popular: true
  },
  {
    name: 'Корпоративный',
    price: 'по запросу',
    period: 'индивидуально',
    features: [
      'Персональный менеджер',
      'Команда специалистов',
      'SLA 99.9%',
      'Проектирование инфраструктуры',
      'Полное техническое сопровождение'
    ]
  }
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechSupport Pro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground transition">
              Услуги
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-foreground transition">
              Цены
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground transition">
              О нас
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground transition">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('request')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Оставить заявку
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="text-center lg:text-left animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  IT-поддержка нового поколения
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                  Современные решения для вашего бизнеса. Быстро, надёжно, профессионально.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button onClick={() => scrollToSection('request')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                    Получить консультацию
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                    Наши услуги
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 mix-blend-overlay"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80" 
                    alt="IT команда за работой"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent h-32"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-3xl opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-2xl blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Полный спектр IT-услуг для вашего бизнеса
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover-glow hover-scale border-border/50 bg-card/50 backdrop-blur" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle" size={16} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {service.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Выберите оптимальный план для вашего бизнеса
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative hover-glow hover-scale ${plan.popular ? 'gradient-border shadow-2xl scale-105' : 'border-border/50'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== 'по запросу' && <span className="text-lg"> ₽</span>}
                    </div>
                    <CardDescription>{plan.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => scrollToSection('request')} className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <p className="text-foreground/70">Реализованных проектов</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <p className="text-foreground/70">Лет на рынке</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <p className="text-foreground/70">Круглосуточная поддержка</p>
                </div>
              </div>
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    TechSupport Pro — это команда опытных IT-специалистов, которые используют самые современные технологии и подходы для решения задач любой сложности.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Мы специализируемся на комплексных IT-решениях для бизнеса: от настройки серверов до построения полной инфраструктуры. Наша миссия — сделать технологии простыми и доступными для каждого клиента.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="request" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставить заявку</h2>
                <p className="text-xl text-foreground/70">
                  Заполните форму и мы свяжемся с вами в течение 30 минут
                </p>
              </div>
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ваше имя"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@email.com"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Интересующая услуга</Label>
                      <Input
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder="Например: настройка серверов"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Опишите вашу задачу..."
                        rows={4}
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover-glow hover-scale bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Icon name="Phone" size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-foreground/70">+7 (495) 123-45-67</p>
                    <p className="text-foreground/70">+7 (800) 555-35-35</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover-glow hover-scale bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Icon name="Mail" size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-foreground/70">info@techsupport.pro</p>
                    <p className="text-foreground/70">support@techsupport.pro</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover-glow hover-scale bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Icon name="MapPin" size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Офис</h3>
                    <p className="text-foreground/70">г. Москва</p>
                    <p className="text-foreground/70">ул. Тверская, 1</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TechSupport Pro
              </span>
            </div>
            <p className="text-foreground/60 text-sm">
              © 2025 TechSupport Pro. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}