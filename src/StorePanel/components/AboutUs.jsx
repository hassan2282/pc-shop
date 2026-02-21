import win12Wallpaper from '../../AdminPanel/assets/img/wallpapers/win12.jpeg'
import {
  TbBuildingStore,
  TbMail,
  TbMapPin,
  TbPhone,
  TbShieldCheck,
  TbTargetArrow,
  TbUsers,
} from 'react-icons/tb'

function AboutUs() {
  const styles = {
    page: {
      direction: 'rtl',
      minHeight: 'calc(100vh - 120px)',
      padding: '28px 0 56px',
      backgroundImage: `radial-gradient(1000px 420px at 20% 0%, rgba(84,180,185,0.35) 0%, rgba(84,180,185,0) 65%), radial-gradient(900px 520px at 90% 20%, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0) 60%), linear-gradient(180deg, rgba(233,250,252,0.55) 0%, rgba(255,255,255,0.30) 100%)`,
    },
    shell: {
      borderRadius: 22,
      overflow: 'hidden',
      border: '1px solid rgba(84, 180, 185, 0.25)',
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 18px 50px rgba(17,24,39,0.12)',
    },
    hero: {
      position: 'relative',
      padding: '22px 18px',
      backgroundImage: `linear-gradient(180deg, rgba(160,212,214,0.32) 0%, rgba(255,255,255,0) 100%), url(${win12Wallpaper})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.40) 55%, rgba(255,255,255,0.20) 100%)',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.55)',
      border: '1px solid rgba(84, 180, 185, 0.25)',
      color: '#0f172a',
      fontSize: 12,
      backdropFilter: 'blur(12px)',
    },
    h1: {
      fontSize: 28,
      fontWeight: 800,
      color: '#0f172a',
      letterSpacing: 0.2,
      margin: '10px 0 6px',
    },
    subtitle: {
      color: '#334155',
      fontSize: 13,
      lineHeight: 1.9,
      margin: 0,
      maxWidth: 760,
    },
    card: {
      height:'100%',
      borderRadius: 18,
      border: '1px solid rgba(84, 180, 185, 0.22)',
      background: 'rgba(255,255,255,0.62)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 14px 30px rgba(17,24,39,0.08)',
    },
    cardHeader: {
      padding: '14px 16px 10px',
      borderBottom: '1px solid rgba(84, 180, 185, 0.16)',
    },
    cardBody: {
      padding: '12px 16px 16px',
    },
    cardTitle: {
      margin: 0,
      fontWeight: 800,
      fontSize: 14,
      color: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    p: {
      margin: 0,
      color: '#334155',
      fontSize: 13,
      lineHeight: 2,
    },
    stat: {
      borderRadius: 16,
      padding: '12px 14px',
      border: '1px solid rgba(148,163,184,0.30)',
      background: 'rgba(255,255,255,0.55)',
    },
    statValue: {
      fontSize: 18,
      fontWeight: 900,
      color: '#0f172a',
      margin: 0,
    },
    statLabel: {
      fontSize: 12,
      color: '#475569',
      margin: 0,
    },
    contactLink: {
      color: '#0f172a',
      textDecoration: 'none',
      fontWeight: 700,
    },
    smallHint: {
      color: '#64748b',
      fontSize: 12,
      marginTop: 6,
    },
  }

  return (
    <main className="single-product default" style={styles.page}>
      <div className="container">
        <div style={styles.shell}>
          <section style={styles.hero}>
            <div style={styles.heroOverlay} />
            <div className="position-relative">
              <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="d-flex align-items-center gap-3 p-4">
                  <div>
                    <h1 style={styles.h1}>درباره دیتی شاپ</h1>
                    <p style={styles.subtitle}>
                      دیتی شاپ از سال 1404 با هدف ارائه کالاهای باکیفیت با قیمت منصفانه شروع به فعالیت کرد. تلاش ما این است که تجربهٔ خرید آنلاین
                      سریع، شفاف و مطمئن را برای شما بسازیم.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row g-3 mt-3">
                <div className="col-12 col-md-4">
                  <div style={styles.stat}>
                    <p style={styles.statValue}>+500</p>
                    <p style={styles.statLabel}>کالا برای عموم مردم</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div style={styles.stat}>
                    <p style={styles.statValue}>تا 40٪</p>
                    <p style={styles.statLabel}>کمتر از قیمت بازار</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div style={styles.stat}>
                    <p style={styles.statValue}>پشتیبانی</p>
                    <p style={styles.statLabel}>پاسخگویی سریع و محترمانه</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-3 p-md-4">
            <div className="row g-3">
              <div className="col-12 col-lg-7">
                <div style={styles.card} className=''>
                  <div style={styles.cardHeader}>
                    <h2 style={styles.cardTitle}>
                      <TbBuildingStore size={18} style={{ color: '#54b4b9' }} />
                      داستان ما
                    </h2>
                  </div>
                  <div style={styles.cardBody} className='grid grid-rows-2'>
                    <p style={styles.p} className=''>
                      دیتی شاپ فعالیت خود را با تمرکز روی «قیمت مناسب + کیفیت واقعی» شروع کرد. ما با انتخاب دقیق کالاها، بررسی تامین‌کنندگان و
                      کنترل کیفیت، تلاش می‌کنیم خریدی مطمئن و بی‌دردسر داشته باشید.
                    </p>

                    <div className="row g-3 mt-30">
                      <div className="col-12 col-lg-6">
                        <div className="d-flex align-items-start gap-2">
                          <TbShieldCheck size={18} style={{ color: '#0ea5e9', marginTop: 3 }} />
                          <div>
                            <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13 }}>خرید امن</div>
                            <div style={styles.smallHint}>شفافیت در اطلاعات و پیگیری سفارش</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="d-flex align-items-start gap-2">
                          <TbTargetArrow size={18} style={{ color: '#22c55e', marginTop: 3 }} />
                          <div>
                            <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13 }}>قیمت منصفانه</div>
                            <div style={styles.smallHint}>تمرکز روی ارزش خرید واقعی</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mt-3">
                        <div className="d-flex align-items-start gap-2">
                          <TbUsers size={18} style={{ color: '#a855f7', marginTop: 3 }} />
                          <div>
                            <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13 }}>مشتری‌محور</div>
                            <div style={styles.smallHint}>پشتیبانی مسئولانه و محترمانه</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <div style={styles.card}>
                  <div style={styles.cardHeader}>
                    <h2 style={styles.cardTitle}>
                      <TbPhone size={18} style={{ color: '#54b4b9' }} />
                      اطلاعات تماس
                    </h2>
                  </div>
                  <div style={styles.cardBody}>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-start gap-2">
                        <TbPhone size={18} style={{ color: '#0ea5e9', marginTop: 3 }} />
                        <div>
                          <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13 }}>شماره تماس</div>
                          <div style={styles.p}>
                            <a style={styles.contactLink} href="tel:09170249855">
                              09170249855
                            </a>
                            {'  '}|{'  '}
                            <a style={styles.contactLink} href="tel:09232961534">
                              09232961534
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-start gap-2">
                        <TbMail size={18} style={{ color: '#22c55e', marginTop: 3 }} />
                        <div>
                          <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13 }}>ایمیل</div>
                          <div style={styles.p}>
                            <a style={styles.contactLink} href="mailto:dtshop@info.com">
                              DTSHOP@INFO.COM
                            </a>
                          </div>
                          <div style={styles.smallHint}>پاسخگویی در سریع‌ترین زمان ممکن</div>
                        </div>
                      </div>

                      <div className="d-flex align-items-start gap-2">
                        <TbMapPin size={18} style={{ color: '#ef4444', marginTop: 3 }} />
                        <div>
                          <div style={{ fontWeight: 800, color: '#0f172a', fontSize: 13 }}>آدرس</div>
                          <div style={styles.p}>
                            استان کهگیلویه و بویراحمد - دهدشت - کوی آزادگان 1 - پلاک 370
                            <div style={styles.smallHint}>کد پستی: 7571774845</div>
                          </div>
                        </div>
                      </div>

                      <div style={{ ...styles.stat, borderColor: 'rgba(84, 180, 185, 0.25)' }}>
                        <div style={{ fontWeight: 900, color: '#0f172a', fontSize: 13 }}>مدیریت</div>
                        <div style={styles.p}>سید حسن تقوی و سیامک بشکار</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default AboutUs
