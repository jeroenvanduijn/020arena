import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Aanmelden() {
  return (
    <>
      <Head>
        <title>Aanmelden | CrossFit 020 → Arena Gym</title>
        <meta name="description" content="Kies je Arena Gym membership. 12 weken voor de prijs van 8 weken. Start 1 januari 2025." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header style={{
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div className="container-narrow" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <span style={{ fontWeight: '600', fontSize: '18px' }}>CrossFit 020</span>
          </Link>
{/* Taalkeuze verwijderd - nog niet actief */}
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '60px 0' }}>
        <div className="container-narrow">
          
          {/* Title */}
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Kies je <span className="accent-text">Arena Gym</span> membership
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Kies uit Bronze, Silver of Gold. Je krijgt 12 weken toegang voor de prijs van 8 weken.
            Start 1 januari 2025. Daarna ga je automatisch over op een 4-wekelijks contract.
          </p>

          {/* Info + Price Cards Grid */}
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', marginBottom: '48px' }}>
            
            {/* What you get */}
            <div className="info-card">
              <h3 style={{ fontWeight: '600', marginBottom: '16px', fontSize: '18px' }}>Wat je krijgt</h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  '12 weken toegang voor de prijs van 8 weken.',
                  'Je start op 1 januari 2025.',
                  'Daarna start je 4-wekelijkse incasso.',
                  'Je kunt dan kiezen voor 1-jaar, 2-jaar of flex.'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    padding: '10px 0', 
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.8)'
                  }}>
                    <span style={{ color: '#22c55e' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Cards */}
            <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              
              {/* Bronze */}
              <div className="price-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '11px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  color: '#cd7f32', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>Bronze</div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                  Fitness Only
                </h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€78</span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                  2x €39 voor 12 weken
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: 'rgba(255,255,255,0.4)',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  Daarna €39 / 4 wkn
                </div>
              </div>

              {/* Silver */}
              <div className="price-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '11px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  color: '#9ca3af', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>Silver</div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                  Fighting + Fitness
                </h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€108</span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                  2x €54 voor 12 weken
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: 'rgba(255,255,255,0.4)',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  Daarna €54 / 4 wkn
                </div>
              </div>

              {/* Gold */}
              <div className="price-card featured" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '11px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  color: '#fbbf24', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>Gold</div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                  Unlimited
                </h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€158</span>
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                  2x €79 voor 12 weken
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: 'rgba(255,255,255,0.4)',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  Daarna €79 / 4 wkn
                </div>
              </div>
            </div>
          </div>

          {/* Membership details */}
          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontSize: '14px', 
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Je kiest je membership in het aanmeldformulier hieronder.
          </p>

          {/* Info boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '48px' }} className="info-grid">
            <div className="info-card">
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: '#dc2626' }}>Overgangsperiode: 12 weken</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                Je krijgt 12 weken toegang bij Arena Gym voor de prijs van 8 weken. 
                Dat zijn 4 weken gratis om te wennen aan je nieuwe sportschool.
              </p>
            </div>
            <div className="info-card">
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: '#dc2626' }}>Automatische incasso na 12 weken</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                Na de overgangsperiode start je 4-wekelijkse incasso automatisch. 
                Je kunt dan upgraden, downgraden of kiezen voor een ander contracttype.
              </p>
            </div>
          </div>

          {/* Embed Section */}
          <section>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '24px'
            }}>
              Vul je gegevens in
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
              Vul hieronder je gegevens in om je aanmelding af te ronden.
            </p>

            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '12px',
              padding: '16px 24px',
              marginBottom: '24px'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                <strong style={{ color: '#3b82f6' }}>Wat gebeurt er na je aanmelding?</strong><br />
                Na het invullen van het formulier en het doen van de betaling maakt Arena Gym zo snel mogelijk een account voor je aan. Je ontvangt per e-mail een bevestiging van je account.
              </p>
            </div>
            
            <div className="embed-container" style={{ minHeight: '2219px' }}>
              <iframe
                src="https://kilo.gymleadmachine.com/widget/form/TMLnLy0NPXLVQYuYBCOM"
                style={{ width: '100%', height: '2219px', border: 'none', borderRadius: '3px' }}
                id="inline-TMLnLy0NPXLVQYuYBCOM"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Moving - Arena Form"
                data-height="2219"
                data-layout-iframe-id="inline-TMLnLy0NPXLVQYuYBCOM"
                data-form-id="TMLnLy0NPXLVQYuYBCOM"
                title="Moving - Arena Form"
              />
              <Script src="https://kilo.gymleadmachine.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Heb je vragen? Mail ons op <a href="mailto:info@crossfit020.nl" style={{ color: '#dc2626' }}>info@crossfit020.nl</a>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>
            CrossFit 020
          </p>
        </div>
      </footer>
    </>
  );
}
