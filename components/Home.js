import { useTranslation } from 'next-i18next'

export const Home = () => {
  const { t } = useTranslation('common')


  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h1>{t('bye')}</h1>
    </div>
  );
};
