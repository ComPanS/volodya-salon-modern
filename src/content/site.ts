const assetUrl = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

export const site = {
  name: 'Volodya Salon',
  shortName: 'VOLODYA',
  locale: 'ru',
  tagline: 'Создаем красоту каждый день',
  description: 'Салон красоты в центре Нижнего Новгорода. Стрижки, окрашивания и уход за волосами с записью к стилисту.',
  contact: {
    phone: '+7 (915) 930-40-40',
    address: 'Варварская ул., 29, Нижний Новгород',
    hours: 'Ежедневно, 9:00–21:00',
  },
  rating: '4,9',
  reviews: '109 оценок',
  bookingUrl: 'https://dikidi.net/562055',
  mapsUrl: 'https://yandex.ru/maps/org/volodya_salon/55531554642/',
  vkUrl: 'https://vk.ru/volodyasalon',
  logoUrl: assetUrl('logo.jpg'),
}

export const services = [
  { title: 'Стрижка женская', detail: 'Любая длина и сложность', price: 'от 3 500 ₽' },
  { title: 'Стрижка мужская', detail: 'Форма, текстура, укладка', price: 'от 2 500 ₽' },
  { title: 'Окрашивание', detail: 'От однотона до сложных техник', price: 'от 6 000 ₽' },
  { title: 'Укладка волос', detail: 'Локоны, волны, кудри', price: 'от 3 000 ₽' },
]

export const contactChannels = [
  {
    label: 'WhatsApp',
    href: 'whatsapp://send?phone=79159304040&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%21',
  },
  { label: 'Telegram', href: 'tg://join?invite=7 915 930 40 40' },
  { label: 'Viber', href: 'viber://chat?number=%2B79159304040' },
  { label: 'ВКонтакте', href: 'https://vk.me/volodyasalon' },
]

export const works = [
  assetUrl('work-1.jpg'),
  assetUrl('work-2.jpg'),
  assetUrl('work-3.jpg'),
  assetUrl('work-4.jpg'),
  assetUrl('work-5.jpg'),
  assetUrl('work-6.jpg'),
]
