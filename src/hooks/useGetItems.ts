import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

export const useGetItems = <K>(func: () => Promise<AxiosResponse<K, any>>) => {
  const [items, setitems] = useState<K>();
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState<string>();

  useEffect(() => {
    setisLoading(true);
    func()
      .then((res) => {
        setitems(res.data);
      })
      .catch((err) => {
        if (typeof err === 'string') {
          seterror(err);
        } else {
          seterror('Please try again later!');
        }
      })
      .finally(() => setisLoading(false));
  }, []);

  return { items, error, isLoading };
};
