import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="mb-3 flex p-10">
      <h1>{t('title')}</h1>
    </div>
  );
}
