import moment from 'moment';

export const formatCurrencyNative = ({ value, locale, currency = 'US' }) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value);
};

export const formatDate = (date, format = 'LL') => moment(date).format(format);
