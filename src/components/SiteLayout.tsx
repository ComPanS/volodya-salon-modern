import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [{ to: '#about', label: 'О салоне' }, { to: '#services', label: 'Услуги' }, { to: '#works', label: 'Работы' }, { to: '#contact', label: 'Контакты' }]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" end><img src="/images/logo.jpg" alt="" /> <span>{site.shortName}</span></NavLink>
        <nav aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <a key={to} href={to}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name} · Варварская, 29 · {site.contact.hours}</p><a href={site.vkUrl} target="_blank" rel="noreferrer">VK ↗</a>
      </footer>
    </div>
  )
}
