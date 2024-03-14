'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function page() {
  const router = useRouter();

  //function to redirect to the account page

  useEffect(() => {
    const redirect = async () => {
      await router.push('/profile/account');
    };
    redirect();
  }, []);

  return <></>;
}
