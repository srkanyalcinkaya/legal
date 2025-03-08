export default {
  logo: (
    <div style={{ display: "flex", flexDirection: "row", alignItems:"center", gap:12 }}>
      <img src="/llg-bg-logo.png" alt="LawLinkGlobal" width={40} height={40} />
      <span style={{ fontWeight: 'bold' }}>LawLinkGlobal Legal Framework</span>
    </div>
  ),
  project: {
    link: 'https://github.com/lawlinkglobal',
  },
  docsRepositoryBase: 'https://github.com/srkanyalcinkaya/legal/blob/main',
  footer: {
    text: `© ${new Date().getFullYear()} LawLinkGlobal. Tüm hakları saklıdır.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LawLinkGlobal Legal Framework',
      description: 'LawLinkGlobal platformu resmi sözleşmeler dokümantasyonu',
      openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: 'https://legal.lawlinkglobal.com',
        site_name: 'LawLinkGlobal Legal Framework',
        images: [
          {
            url: 'https://legal.lawlinkglobal.com/og-image.png',
            width: 1200,
            height: 630,
            alt: 'LawLinkGlobal Legal Framework'
          }
        ]
      },
      twitter: {
        handle: '@lawlinkglobal',
        site: '@lawlinkglobal',
        cardType: 'summary_large_image'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="LawLinkGlobal Legal Framework" />
      <meta name="og:title" content="LawLinkGlobal Legal Framework" />
      <meta name="keywords" content="hukuk, avukat, dava yönetimi, belge yönetimi, hukuk yazılımı" />
      <meta name="author" content="LawLinkGlobal" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <link rel="canonical" href="https://legal.lawlinkglobal.com" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  primaryHue: 210, // Mavi tonları
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  search: {
    placeholder: 'Ara...'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
} 