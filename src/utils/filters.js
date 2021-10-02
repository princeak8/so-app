import Vue from 'vue';
// import dayjs from 'dayjs';
// import localizedFormat from 'dayjs/plugin/localizedFormat';
// import truncate from 'lodash.truncate';

// dayjs.extend(localizedFormat);

const filters = {
  getFullName(value) {
    if (value.firstname && value.lastname) {
      return value.firstname + ' ' + value.lastname;
    }

    return '';
  },
  getInitials(value) {
    if (value.firstname && value.lastname) {
      const first = value.firstname[0].toUpperCase();
      const last = value.lastname[0].toUpperCase();
      return first + last;
    }
    return '';
  },
  // formatAmount(amount) {
  //   if (Number(amount) === 0 || amount) {
  //     return Number(amount).toLocaleString(undefined, {
  //       minimumFractionDigits: 2,
  //       maximumFractionDigits: 2,
  //     });
  //   }
  //   return '***';
  // },
  formatAmount(amount, maxDigit=8){
      if (amount === 0 || amount) {
          return new Intl.NumberFormat('en-US', { maximumFractionDigits: maxDigit }).format(amount)
      }
      
      return '***';
  },
  // formatDate(date, format = 'lll') {
  //   if (date) {
  //     return dayjs(date).format(format);
  //   }
  //   return '';
  // },
  formatCrypto(amount) {
    if (amount === 0 || amount) {
      return Number(amount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      });
    }
    return '***';
  },
  // truncate(value, length = 10) {
  //   if (!value) return '';
  //   return truncate(value, {
  //     length,
  //   });
  // },
  countFormat(num) {
    if (num === 0) {
      return 0;
    }
    if (!num) return '***';
    const units = [
      {
        value: 1,
        symbol: '',
      },
      {
        value: 1e3,
        symbol: 'k',
      },
      {
        value: 1e6,
        symbol: 'M',
      },
      {
        value: 1e9,
        symbol: 'B',
      },
      {
        value: 1e12,
        symbol: 'T',
      },
      {
        value: 1e15,
        symbol: 'Q',
      },
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = units.length - 1; i > 0; i--) {
      if (num >= units[i].value) {
        break;
      }
    }

    return (num / units[i].value).toFixed(3).replace(regex, '$1') + units[i].symbol;
  },
  uppercase(value) {
    if (typeof value !== 'string') return '';

    return value.toUpperCase();
  },
  capitalize(value) {
    if (!value) return '';
    return value.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  },
  formatTime(value) {
    if (isNaN(+value)) return '**';

    return String(value).padStart(2, '0');
  },
};

Object.keys(filters).forEach(f => Vue.filter(f, filters[f]));

export default filters;
