import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavProps {
  language: string
}

const locales = {
  
}
const Nav = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">{t('main.home')}</Link>
        </li>
        <li>
          <Link to="/tracker">{t('tracker')}</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
      </ul>
    </nav>
    <nav className='nav_lang'>
      <li><button onClick={() => i18n.changeLanguage("en")}>EN</button></li>
      <li><button onClick={() => i18n.changeLanguage("ru")}>RU</button></li>
    </nav>
    </>
  );
};

export default Nav;
