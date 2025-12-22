import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Waarom sluit CrossFit 020?",
      a: "We konden geen langlopend huurcontract krijgen en alternatieve locaties bleken te duur of slechts tijdelijk beschikbaar. Daarom hebben we gezocht naar de beste vervanger voor onze leden."
    },
    {
      q: "Hoe werkt de overstap-actie?",
      a: "Je kiest een membership (Bronze, Silver of Gold) en krijgt 12 weken toegang voor de prijs van 8 weken. Je start op 1 januari 2025. Daarna ga je automatisch over op een 4-wekelijks contract."
    },
    {
      q: "Wat gebeurt er na de 12 weken?",
      a: "Na de overgangsperiode start automatisch je 4-wekelijkse contract. Je kunt dan kiezen voor een 1-jarig, 2-jarig of maandelijks opzegbaar contract."
    },
    {
      q: "Wat gebeurt er met mijn abonnement bij CrossFit 020?",
      a: "Je ontvangt een aparte e-mail met informatie over je lopende abonnement, eventuele terugbetalingen en credits."
    },
    {
      q: "Kan ik mijn CrossFit training voortzetten?",
      a: "Ja! Arena Gym biedt volwaardige CrossFit lessen met ervaren coaches. Met het Gold abonnement heb je toegang tot alle CrossFit en Hyrox lessen."
    },
    {
      q: "Hoe zit het met parkeren?",
      a: "Arena Gym heeft eigen parkeerplaatsen. Voor €7,50 per 4 weken kun je onbeperkt parkeren op hun terrein."
    },
    {
      q: "Kan ik ook alleen de fitness gebruiken?",
      a: "Ja, met het Bronze abonnement kun je onbeperkt zelfstandig trainen in de fitness gym en de CrossFit Open Box."
    },
    {
      q: "Wat is het verschil tussen de abonnementen?",
      a: "Bronze is fitness only, Silver voegt kickboksen/boksen groepslessen toe, en Gold geeft toegang tot alles: CrossFit, Hyrox, circuittraining én alle vechtsporten."
    }
  ];

  return (
    <>
      <Head>
        <title>CrossFit 020 → Arena Gym | Jouw nieuwe trainingsplek</title>
        <meta name="description" content="Arena Gym biedt alles wat je nodig hebt: CrossFit, Hyrox, kickboksen én fitness onder één dak." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header style={{
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        background: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '18px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>A</div>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>CrossFit 020 → Arena Gym</span>
          </Link>
{/* Taalkeuze verwijderd - nog niet actief */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container hero-content" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: '700',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '800px'
          }}>
            Jouw nieuwe <span className="accent-text">trainingsplek</span> na CrossFit 020
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            marginBottom: '40px',
            lineHeight: 1.7
          }}>
            Arena Gym biedt alles wat je nodig hebt: CrossFit, Hyrox, kickboksen én fitness onder één dak. 
            Met scherpe tarieven en eigen parkeerplaatsen.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/aanmelden" className="cta-button">
              Kies je membership →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }} className="grid-2">
            {[
              { value: '2016', label: 'Actief sinds' },
              { value: '2', label: 'Locaties' },
              { value: '€54', label: 'Vanaf per 4 wkn' },
              { value: '∞', label: 'Parkeerplek' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif', color: '#dc2626' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Arena Gym */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Waarom <span className="accent-text">Arena Gym</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Een complete sportschool met alles onder één dak, ideaal voor CrossFit-atleten die meer willen.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="grid-3">
            {[
              { icon: '🏋️', title: 'Compleet aanbod', desc: 'CrossFit, Hyrox, kickboksen, boksen, fitness – kies wat bij je past' },
              { icon: '🎯', title: 'Persoonlijke begeleiding', desc: 'Intake, trainingsplan op maat en voedingscoaching beschikbaar' },
              { icon: '👥', title: 'Ervaren coaches', desc: 'Trainers met jarenlange ervaring in CrossFit en vechtsporten' },
              { icon: '🚗', title: 'Eigen parkeerplaats', desc: 'Onbeperkt parkeren voor €7,50 per 4 weken' },
              { icon: '📍', title: 'Top locatie', desc: 'Amsterdam Arena gebied, goed bereikbaar met OV en auto' },
              { icon: '💪', title: 'Open Box', desc: 'Zelfstandig trainen in de CrossFit ruimte wanneer jij wilt' }
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, rgba(220,38,38,0.05) 0%, transparent 100%)' }}>
        <div className="container">
          <h2 className="section-title">Breed sportaanbod</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Meer dan alleen CrossFit. Ontdek wat Arena Gym allemaal te bieden heeft.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-2">
            {[
              { title: 'CrossFit', desc: 'Volledige CrossFit programmering met dagelijkse WODs. Geschikt voor beginners tot gevorderden.', included: 'Gold' },
              { title: 'Hyrox', desc: 'Train voor de populairste fitness competitie. Combinatie van running en functional fitness.', included: 'Gold' },
              { title: 'Kickboksen & Boksen', desc: 'Groepslessen van ervaren wedstrijdvechters. Voor recreatie of wedstrijdambitie.', included: 'Silver & Gold' },
              { title: 'Fitness & Open Box', desc: 'Volledige fitnessruimte en zelfstandig trainen in de CrossFit box.', included: 'Alle abonnementen' }
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', flex: 1 }}>{item.desc}</p>
                <div style={{ 
                  marginTop: '16px', 
                  fontSize: '12px', 
                  color: '#dc2626',
                  background: 'rgba(220,38,38,0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  width: 'fit-content'
                }}>
                  Inbegrepen bij: {item.included}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt de overstap */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Hoe werkt de overstap</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            In een paar simpele stappen ben je aan de slag bij Arena Gym.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-2">
            {[
              { step: '1', title: 'Kies je membership', desc: 'Bronze (fitness), Silver (+ vechtsporten) of Gold (+ CrossFit/Hyrox).' },
              { step: '2', title: '12 weken voor de prijs van 8', desc: 'Je krijgt 12 weken toegang voor de prijs van 8 weken. 4 weken gratis!' },
              { step: '3', title: 'Start 1 januari 2025', desc: 'Je begint met trainen bij Arena Gym op 1 januari.' },
              { step: '4', title: 'Automatische overgang', desc: 'Na 12 weken start je 4-wekelijkse contract automatisch.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number">{item.step}</div>
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarieven */}
      <section id="tarieven" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 className="section-title">Tarieven <span className="accent-text">overstap-actie</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px', maxWidth: '600px' }}>
            12 weken trainen voor de prijs van 8 weken. Start 1 januari 2025.
          </p>
          <div style={{ 
            background: 'rgba(34, 197, 94, 0.1)', 
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '12px',
            padding: '16px 24px',
            marginBottom: '48px',
            maxWidth: '600px'
          }}>
            <span style={{ color: '#22c55e', fontWeight: '600' }}>✓ 4 weken gratis</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '8px' }}>bij de overstap naar Arena Gym</span>
          </div>
          
          <div className="price-cards" style={{ display: 'flex', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {/* Bronze */}
            <div className="price-card" style={{ flex: '1 1 280px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#cd7f32', marginBottom: '8px' }}>Bronze</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>Fitness Only</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€108</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>eenmalig</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                2x €54 = 12 weken trainen
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {['Onbeperkt fitness gym', 'CrossFit Open Box', 'Zelfstandig trainen'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {item}
                  </li>
                ))}
                {['Groepslessen vechtsporten', 'CrossFit/Hyrox lessen'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.3)' }}>
                    <span>✗</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/aanmelden" className="secondary-button" style={{ width: '100%', textAlign: 'center' }}>
                Kies Bronze
              </Link>
            </div>

            {/* Silver */}
            <div className="price-card" style={{ flex: '1 1 280px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#9ca3af', marginBottom: '8px' }}>Silver</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>Fighting & Fitness</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€138</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>eenmalig</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                2x €69 = 12 weken trainen
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {['Onbeperkt fitness gym', 'CrossFit Open Box', 'Zelfstandig trainen', 'Kickboksen groepslessen', 'Boksen groepslessen', 'Zaktraining'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {item}
                  </li>
                ))}
                {['CrossFit/Hyrox lessen'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.3)' }}>
                    <span>✗</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/aanmelden" className="secondary-button" style={{ width: '100%', textAlign: 'center' }}>
                Kies Silver
              </Link>
            </div>

            {/* Gold */}
            <div className="price-card featured" style={{ flex: '1 1 280px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#fbbf24', marginBottom: '8px' }}>Gold</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>Unlimited</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€228</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>eenmalig</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                2x €114 = 12 weken trainen
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {[
                  'Alles van Silver +',
                  'CrossFit groepslessen',
                  'Hyrox training',
                  'Circuittraining',
                  'Volledige toegang'
                ].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#22c55e' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/aanmelden" className="cta-button" style={{ width: '100%', textAlign: 'center' }}>
                Kies Gold
              </Link>
            </div>
          </div>

          {/* Tarieven na 12 weken */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Tarieven na de overgangsperiode</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
              Na 12 weken loopt je maandelijks opzegbare abonnement door:
            </p>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              padding: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '24px'
            }} className="grid-3">
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Bronze</div>
                <div style={{ fontWeight: '600' }}>€54 per 4 weken</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Silver</div>
                <div style={{ fontWeight: '600' }}>€69 per 4 weken</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Gold</div>
                <div style={{ fontWeight: '600' }}>€114 per 4 weken</div>
              </div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px', 
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Optioneel: Onbeperkt parkeren</div>
                <div style={{ fontWeight: '600' }}>€7,50 per 4 weken</div>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                Eigen parkeerplaatsen bij Arena Gym
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locatie */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(220,38,38,0.05) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Locaties</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Twee locaties bij de Amsterdam Arena, perfect bereikbaar met OV en auto.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-2">
            <div className="feature-card">
              <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '8px', color: '#dc2626' }}>Toren C – CrossFit</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                Karspeldreef 4c<br />
                1101 CJ Amsterdam
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                Hier vind je de CrossFit box met alle equipment voor je WODs.
              </p>
            </div>
            <div className="feature-card">
              <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '8px', color: '#dc2626' }}>Toren B – Vechtsport & Fitness</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                Bullewijkpad 3b<br />
                1101 CV Amsterdam
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                De fitness gym en vechtsporten vind je hier.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <a href="https://maps.google.com/?q=Karspeldreef+4c+Amsterdam" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626', fontWeight: '500' }}>
              Bekijk op Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Wat leden zeggen</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Lees de ervaringen van Arena Gym leden.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="grid-3">
            {[
              { name: 'Nazmien, 39', text: 'Van de trainers heb ik geleerd dat alles eigenlijk met de juiste mindset te maken heeft. Mijn buikomvang ging van 92 naar 42 cm!' },
              { name: 'Sharon, 51', text: 'Ik train al 2 jaar met veel plezier. Na de zaktraining is mijn hoofd leeg en heb ik alle spieren in mijn lichaam gebruikt.' },
              { name: 'Jochem, 41', text: 'Inmiddels al 6 jaar lid. Door Arena Gym ben ik lichamelijk in de beste staat van mijn leven.' }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div style={{ fontSize: '32px', color: '#dc2626', marginBottom: '16px' }}>"</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px', fontStyle: 'italic' }}>
                  {testimonial.text}
                </p>
                <div style={{ fontWeight: '600' }}>{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 className="section-title">Veelgestelde vragen</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Alles wat je wilt weten over de overstap naar Arena Gym.
          </p>
          
          <div style={{ maxWidth: '800px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span style={{ 
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    fontSize: '20px'
                  }}>↓</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(180deg, transparent 0%, rgba(220,38,38,0.1) 100%)' }}>
        <div className="container">
          <h2 style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Klaar om te <span className="accent-text">starten</span>?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            12 weken trainen voor de prijs van 8 weken. Start 1 januari 2025.
          </p>
          <Link href="/aanmelden" className="cta-button">
            Kies je membership →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>Meer over Arena Gym</div>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <a href="https://arenagym.nl" style={{ color: 'rgba(255,255,255,0.6)' }}>Website</a>
                <a href="https://arenagym.nl/lesrooster/" style={{ color: 'rgba(255,255,255,0.6)' }}>Lesrooster</a>
                <a href="https://arenagym.nl/tarieven/" style={{ color: 'rgba(255,255,255,0.6)' }}>Tarieven</a>
                <a href="https://arenagym.nl/over-ons/" style={{ color: 'rgba(255,255,255,0.6)' }}>Over ons</a>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                Vragen? Mail naar <a href="mailto:info@arenagym.nl" style={{ color: '#dc2626' }}>info@arenagym.nl</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
            CrossFit 020
          </div>
        </div>
      </footer>
    </>
  );
}
