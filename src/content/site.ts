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

export const works = [
  assetUrl('work-1.jpg'),
  assetUrl('work-2.jpg'),
  assetUrl('work-3.jpg'),
  assetUrl('work-4.jpg'),
  assetUrl('work-5.jpg'),
  assetUrl('work-6.jpg'),
]
