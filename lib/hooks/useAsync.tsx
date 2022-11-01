import { FormEventHandler, SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

export function useAsync<T = any>(
  fn: () => Promise<T>,
  successMessage = "Success",
  errorMessage = "Error"
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<T>();

  async function onAction(e: SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      setData(await fn());
      toast.success(successMessage);
    } catch (err: any) {
      setError(err?.response?.data || err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    onAction,
  };
}
