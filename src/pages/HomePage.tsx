import { services, site, works } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Салон красоты · Нижний Новгород</p>
          <h1>{site.tagline}</h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions"><a className="button button-accent" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a><a className="text-link" href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>Позвонить</a></div>
        </div>
        <div className="hero-visual"><img src={site.logoUrl} alt="Логотип Volodya Salon" /><div className="hero-photo"><img src={works[0]} alt="Работа стилистов Volodya Salon" /></div><span className="hero-note">Форма, цвет<br />и уход</span></div>
      </section>
      <section className="section intro" id="about">
        <p className="eyebrow">Почему к нам возвращаются</p><div className="intro-grid"><h2>Место, где образ собирается целиком.</h2><div><p>98% положительных отзывов отмечают персонал. 100% положительных отзывов говорят о компетентности и атмосфере.</p><a className="text-link" href={site.mapsUrl} target="_blank" rel="noreferrer">Смотреть отзывы на Яндекс Картах ↗</a></div></div>
      </section>
      <section className="section services" id="services"><div className="section-heading"><div><p className="eyebrow">Выбор услуги</p><h2>Прайс</h2></div><span className="section-index">01 — 04</span></div><div className="service-list">{services.map((service, index) => <a className="service-row" href={site.bookingUrl} target="_blank" rel="noreferrer" key={service.title}><span className="service-number">0{index + 1}</span><span><strong>{service.title}</strong><small>{service.detail}</small></span><b>{service.price}</b><span className="arrow">↗</span></a>)}</div><p className="price-note">Стоимость зависит от длины волос, техники и уровня специалиста. Уточняйте актуальную стоимость при записи.</p>
      </section>
      <section className="section gallery" id="works"><div className="section-heading"><div><p className="eyebrow">Визуал салона</p><h2>Работы и пространство</h2></div><span className="section-index">02 — 06</span></div><div className="gallery-grid">{works.map((work, index) => <img className={index === 0 ? 'gallery-main' : undefined} src={work} alt={`Работа Volodya Salon ${index + 1}`} key={work} />)}</div>
      </section>
      <section className="section contact" id="contact"><div><p className="eyebrow">Ждем вас</p><h2>До встречи<br />в Volodya</h2></div><div className="contact-details"><p>{site.contact.address}</p><p>{site.contact.hours}</p><a className="phone" href="tel:+79159304040">{site.contact.phone}</a><a className="button" href={site.bookingUrl} target="_blank" rel="noreferrer">Выбрать время <span>↗</span></a><a className="text-link" href={site.mapsUrl} target="_blank" rel="noreferrer">Построить маршрут</a></div>
      </section>
    </>
  )
}
