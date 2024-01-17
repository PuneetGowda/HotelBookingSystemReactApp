import { hashHistory } from 'react-router';

export const cancelForm = () => {
  hashHistory.replace({ pathname: '/home' });
};
