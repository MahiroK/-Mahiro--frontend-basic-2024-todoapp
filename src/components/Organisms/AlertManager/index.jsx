import { Alert } from "../../Atoms/Alert";
import { useAlertHandlerContext } from "../../contexts/alert_handler";
import { useEffect } from "react";

export const AlertManager = () => {
  const { visible, closeAlert } = useAlertHandlerContext();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, closeAlert]);

  return <Alert />;
};
