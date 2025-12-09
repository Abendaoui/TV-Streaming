import italyImg01 from '../assets/imgs/italyimg01.png'
import italyImg02 from '../assets/imgs/Sky-Calcio-removebg-preview.png'
import italyImg03 from '../assets/imgs/italyimg02.png'
import italyImg04 from '../assets/imgs/italyimg03.png'


export interface Channel {
  id: string;
  name: string;
  logo: string; // ⬅️ This is the stable image URL
  views: string;
  badges: string[];
  isFavorite?: boolean;
}

// 🗺️ MAPPING: Country Code to its list of Channels
export const CountryChannelMap: Record<string, Channel[]> = {
  // --- Italy (IT) ---
  IT: [
    { id: "IT1", name: "Rai Uno HD", logo: italyImg01, views: "1.2M", badges: ["HD", "EPG"] },
    { id: "IT2", name: "Sky Calcio 4K", logo: italyImg02, views: "5.5M", badges: ["4K", "LIVE"] },
    { id: "IT3", name: "Mediaset News 24", logo: italyImg03, views: "890K", badges: ["HD", "24/7"] },
    { id: "IT4", name: "Focus Documentari", logo: italyImg04, views: "620K", badges: ["HD", "EPG"] },
  ],

  // --- Ukraine (UA) ---
  UA: [
    { id: "UA1", name: "1+1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/1%2B1_Logo.svg", views: "950K", badges: ["HD"] },
    { id: "UA2", name: "Football 1 LIVE", logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/Football_TV_channel_logo.svg", views: "2.1M", badges: ["HD", "LIVE"] },
    { id: "UA3", name: "ICTV News", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/ICTV_Logo_2022.svg", views: "510K", badges: ["24/7"] },
    { id: "UA4", name: "Novyi Kanal", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Novyi_Kanal_logo.svg", views: "780K", badges: ["HD", "EPG"] },
  ],

  // --- Brazil (BR) ---
  BR: [
    { id: "BR1", name: "Globo HD", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Rede_Globo.svg", views: "10.1M", badges: ["HD", "EPG"] },
    { id: "BR2", name: "SporTV 4K", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/SporTV_logo.svg", views: "7.9M", badges: ["4K", "LIVE"] },
    { id: "BR3", name: "Band News", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/BandNewsTV_logo.svg", views: "3.5M", badges: ["24/7"] },
    { id: "BR4", name: "History Channel BR", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/History_%28US%29_logo.svg/1200px-History_%28US%29_logo.svg.png", views: "1.1M", badges: ["HD"] },
  ],

  // --- Germany (DE) ---
  DE: [
    { id: "DE1", name: "Das Erste HD", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/DasErsteHD_Logo_2015.png", views: "4.8M", badges: ["HD", "EPG"] },
    { id: "DE2", name: "Sky Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Sky_Deutschland_logo_2020.svg", views: "8.3M", badges: ["4K", "LIVE"] },
    { id: "DE3", name: "ZDF Nachrichten", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/ZDF_logo.svg", views: "2.9M", badges: ["24/7"] },
    { id: "DE4", name: "ProSieben Maxx", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/ProSieben_Maxx_Logo.svg", views: "1.5M", badges: ["HD"] },
  ],

  // --- United States (US) ---
  US: [
    { id: "US1", name: "Nat Geo Wild HD", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Nat_Geo_Wild_logo.svg", views: "+8.2M", badges: ["HD", "EPG"], isFavorite: true },
    { id: "US2", name: "Disney Channel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Disney_Channel_logo_%282017%29.svg", views: "850K", badges: ["4K", "EPG", "$"] },
    { id: "US3", name: "HBO Family", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/HBO_Family_logo.svg", views: "1.7M", badges: ["HD", "EPG"] },
    { id: "US4", name: "ESPN Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ESPN_wordmark.svg", views: "5.1M", badges: ["HD", "LIVE"] },
  ],

  // --- France (FR) ---
  FR: [
    { id: "FR1", name: "TF1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/TF1_logo_2023.svg", views: "3.9M", badges: ["HD"] },
    { id: "FR2", name: "Canal+ Sport 4K", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Canal%2B_logo_2017.svg", views: "6.7M", badges: ["4K", "LIVE"] },
    { id: "FR3", name: "France 24", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/France_24_Logo.svg", views: "2.2M", badges: ["24/7"] },
    { id: "FR4", name: "Arte HD", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Arte_HD_Logo2.svg", views: "900K", badges: ["EPG"] },
  ],

  // --- Portugal (PT) ---
  PT: [
    { id: "PT1", name: "RTP1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/RTP1_logo.svg", views: "1.4M", badges: ["HD"] },
    { id: "PT2", name: "Sport TV+ LIVE", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Sport_TV_logo_%282021%29.svg", views: "3.3M", badges: ["HD", "LIVE"] },
    { id: "PT3", name: "TVI Noticias", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/TVI_Logo.svg", views: "750K", badges: ["24/7"] },
    { id: "PT4", name: "SIC Radical", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/SIC_Radical_Logo.svg", views: "550K", badges: ["EPG"] },
  ],

  // --- South Africa (ZA) ---
  ZA: [
    { id: "ZA1", name: "SABC 1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/SABC_1_logo.svg", views: "1.1M", badges: ["HD"] },
    { id: "ZA2", name: "SuperSport 4K", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/SuperSport_2020.svg", views: "4.2M", badges: ["4K", "LIVE"] },
    { id: "ZA3", name: "eNCA News", logo: "https://upload.wikimedia.org/wikipedia/en/5/50/ENCA_Logo.svg", views: "910K", badges: ["24/7"] },
    { id: "ZA4", name: "M-Net Movies", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/M-Net_logo.svg", views: "680K", badges: ["HD"] },
  ],

  // --- China (CN) ---
  CN: [
    { id: "CN1", name: "CCTV-1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/CCTV-1_Logo.svg", views: "15.5M", badges: ["HD"] },
    { id: "CN2", name: "CCTV-5 Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/CCTV-5_Sports_logo.svg", views: "8.1M", badges: ["LIVE"] },
    { id: "CN3", name: "Phoenix TV", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Phoenix_Television_logo.svg", views: "5.3M", badges: ["24/7"] },
    { id: "CN4", name: "Shanghai Dragon TV", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Dragon_TV_logo.png", views: "3.2M", badges: ["EPG"] },
  ],

  // --- India (IN) ---
  IN: [
    { id: "IN1", name: "Star Plus HD", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Star_Plus_2019.svg", views: "12.8M", badges: ["HD"] },
    { id: "IN2", name: "Sony TEN 1 LIVE", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Sony_Ten_1_logo.png", views: "9.9M", badges: ["4K", "LIVE"] },
    { id: "IN3", name: "NDTV India News", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/NDTV_India_logo.svg", views: "6.5M", badges: ["24/7"] },
    { id: "IN4", name: "Discovery Asia", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Discovery_Asia_logo.svg", views: "3.1M", badges: ["HDR"] },
  ],

  // --- Japan (JP) ---
  JP: [
    { id: "JP1", name: "NHK General HD", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/NHK_logo.svg", views: "7.1M", badges: ["HD"] },
    { id: "JP2", name: "J Sports 3", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/J_Sports_logo.svg", views: "4.5M", badges: ["LIVE"] },
    { id: "JP3", name: "Fuji News Network", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/FNN_logo.svg", views: "3.7M", badges: ["24/7"] },
    { id: "JP4", name: "TV Tokyo Anime", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/TV_Tokyo_logo_%282016%29.svg", views: "5.1M", badges: ["EPG"] },
  ],

  // --- Mexico (MX) ---
  MX: [
    { id: "MX1", name: "Las Estrellas HD", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Las_Estrellas_logo.svg", views: "6.8M", badges: ["HD"] },
    { id: "MX2", name: "TUDN Deportes", logo: "https://upload.wikimedia.org/wikipedia/en/c/ca/TUDN_logo.svg", views: "5.9M", badges: ["LIVE"] },
    { id: "MX3", name: "Milenio Noticias", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Milenio_Televisi%C3%B3n_Logo.svg", views: "2.4M", badges: ["24/7"] },
    { id: "MX4", name: "Discovery MX", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Discovery_Channel_Logo_%282019%29.svg", views: "1.3M", badges: ["EPG"] },
  ],

  // --- Canada (CA) ---
  CA: [
    { id: "CA1", name: "CBC Television HD", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/CBC_2023_logo.svg", views: "3.1M", badges: ["HD"] },
    { id: "CA2", name: "TSN 4K", logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/TSN_logo.svg", views: "4.1M", badges: ["4K", "LIVE"] },
    { id: "CA3", name: "CTV News", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/CTV_News_Channel_%28Canada%29_logo.svg", views: "1.9M", badges: ["24/7"] },
    { id: "CA4", name: "The Movie Network", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Movie_Network_logo.svg", views: "1.1M", badges: ["HDR"] },
  ],

  // --- Australia (AU) ---
  AU: [
    { id: "AU1", name: "Channel 7 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Seven_Network_logo.svg", views: "2.5M", badges: ["HD"] },
    { id: "AU2", name: "Fox Sports Aus", logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Fox_Sports_Australia_logo.svg", views: "3.8M", badges: ["LIVE"] },
    { id: "AU3", name: "ABC News", logo: "https://upload.wikimedia.org/wikipedia/en/c/cf/ABC_News_%28Australia%29_logo.svg", views: "1.5M", badges: ["24/7"] },
    { id: "AU4", name: "Stan Entertainment", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stan_logo.svg", views: "850K", badges: ["4K", "$"] },
  ],

  // --- Nigeria (NG) ---
  NG: [
    { id: "NG1", name: "NTA National", logo: "https://upload.wikimedia.org/wikipedia/en/f/f0/NTA_logo.svg", views: "1.5M", badges: ["HD"] },
    { id: "NG2", name: "DSTV SuperSport", logo: "https://upload.wikimedia.org/wikipedia/en/1/13/Dstv-logo.svg", views: "3.4M", badges: ["LIVE"] },
    { id: "NG3", name: "Channels TV News", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Channels_TV_logo.png", views: "1.2M", badges: ["24/7"] },
    { id: "NG4", name: "Africa Magic", logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Africa_Magic_logo_2017.png", views: "980K", badges: ["EPG"] },
  ],

  // --- Russia (RU) ---
  RU: [
    { id: "RU1", name: "Perviy Kanal HD", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Perviy_Kanal_logo.svg", views: "7.7M", badges: ["HD"] },
    { id: "RU2", name: "Match TV", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Match_TV_logo.svg", views: "5.9M", badges: ["LIVE"] },
    { id: "RU3", name: "Russia 24 News", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Russia_24_logo.svg", views: "4.1M", badges: ["24/7"] },
    { id: "RU4", name: "STS Cinema", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/STS_logo.svg", views: "2.5M", badges: ["EPG"] },
  ],

  // --- South Korea (KR) ---
  KR: [
    { id: "KR1", name: "KBS1 HD", logo: "https://upload.wikimedia.org/wikipedia/en/7/75/KBS_logo.svg", views: "4.9M", badges: ["HD"] },
    { id: "KR2", name: "SPOTV LIVE", logo: "https://upload.wikimedia.org/wikipedia/en/f/fe/SPOTV_logo.svg", views: "3.3M", badges: ["LIVE"] },
    { id: "KR3", name: "YTN News", logo: "https://upload.wikimedia.org/wikipedia/en/f/fe/YTN_Logo.svg", views: "2.1M", badges: ["24/7"] },
    { id: "KR4", name: "tvN Drama", logo: "https://upload.wikimedia.org/wikipedia/en/0/07/TvN_%28South_Korea%29_logo.svg", views: "3.9M", badges: ["EPG"] },
  ],

  // --- Spain (ES) ---
  ES: [
    { id: "ES1", name: "La 1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/La_1_logo.svg", views: "4.2M", badges: ["HD"] },
    { id: "ES2", name: "Movistar Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Movistar_Plus%2B_logo.svg", views: "6.1M", badges: ["4K", "LIVE"] },
    { id: "ES3", name: "Antena 3 Noticias", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_Antena_3_Noticias_%282023%29.svg", views: "2.9M", badges: ["24/7"] },
    { id: "ES4", name: "TVE Documentos", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/TVE_logo.svg", views: "1.1M", badges: ["EPG"] },
  ],

  // --- Netherlands (NL) ---
  NL: [
    { id: "NL1", name: "NPO 1 HD", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/NPO_1_logo_2023.svg", views: "2.8M", badges: ["HD"] },
    { id: "NL2", name: "Ziggo Sport", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Ziggo_Sport_logo.svg", views: "3.5M", badges: ["LIVE"] },
    { id: "NL3", name: "RTL Z News", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/RTL_Z_logo_2015.svg", views: "1.4M", badges: ["24/7"] },
    { id: "NL4", name: "Discovery NL", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Discovery_Channel_Logo_%282019%29.svg", views: "880K", badges: ["EPG"] },
  ],
};