import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const useGoTo = () => {
  const navigate = useNavigate();

  const goTo = (url: string) => navigate(url);

  const goToHome = () => goTo(ROUTES.HOME);
  const goToOrder = () => goTo(ROUTES.ORDER);
  const goToOrderDetail = (itemCd: string) => goTo(`${ROUTES.ORDER}/${itemCd}`);
  const goToCheckout = () => goTo(ROUTES.CHECKOUT);
  const goToPayment = () => goTo(ROUTES.PAYMENT);
  const goToConfirmation = () => goTo(ROUTES.CONFIRMATION);

  return { goTo, goToHome, goToOrder, goToOrderDetail, goToCheckout, goToPayment, goToConfirmation };
};
