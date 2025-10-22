import React from 'react';
import './NewsCard.css'; // Importando o CSS para estilização

/**
 * Componente de Card de Notícia
 * @param {object} props - Propriedades do componente
 * @param {string} props.image - URL da imagem da notícia
 * @param {string} props.category - Editoria ou categoria da notícia (ex: 'Política')
 * @param {string} props.title - O título principal da notícia
 * @param {string} props.summary - Um breve resumo ou subtítulo da notícia
 * @param {string} props.time - Tempo desde a publicação (ex: 'Há 2 horas')
 */
function NewsCard({ image, category, title, summary, time }) {
  return (
    <a href="#" className="news-card-link">
      <div className="news-card">
        <div className="news-card__image-container">
          <img src={image} alt={title} className="news-card__image" />
        </div>
        <div className="news-card__content">
          <h3 className="news-card__category">{category}</h3>
          <h2 className="news-card__title">{title}</h2>
          {summary && <p className="news-card__summary">{summary}</p>}
          <p className="news-card__time">{time}</p>
        </div>
      </div>
    </a>
  );
}

export default NewsCard;