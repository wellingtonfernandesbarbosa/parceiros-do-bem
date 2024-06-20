import styles from './ServicesPage.module.scss';

import { Link } from 'react-router-dom';

import services from '@/data/services.json';
import { Paragraph, Title2, Title3 } from '@/components/Typografy';

const ServicesPage = () => {
  return (
    <main className={styles.ServicesPage}>
      <div className={styles.ServicesPage__container}>
      <header className={styles.ServicesPage__container__header}>
        <Title2>Explore Nossos Serviços Gratuitos</Title2>
        <Paragraph>
          Descubra uma variedade de serviços gratuitos que oferecemos para atender às suas necessidades. Desde atividades de lazer até cuidados pessoais, nossos serviços são projetados para proporcionar qualidade e bem-estar para a comunidade.
        </Paragraph>
      </header>
      <ul className={styles.ServicesPage__container__list}>
        {services.map((service) => (
          <li key={service.id} className={styles.ServicesPage__container__list__item}>
            <Link to={`/servicos/${service.id}`}>
              <Title3>{service.name}</Title3>
            </Link>
            <Paragraph>{service.small_description}</Paragraph>
          </li>
        ))}
      </ul>
        </div>
    </main>
  );
};

export default ServicesPage;