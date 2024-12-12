import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '../../styles/main.css';

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
