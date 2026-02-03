import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const locale = 'en';
 
  return {
    locale,
    messages: (await import(`../lib/messages/${locale}.json`)).default
  };
});