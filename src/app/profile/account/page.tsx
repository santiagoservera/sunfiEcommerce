import Image from 'next/image';

//Components

import { Account } from '@/components/Account';
import { Navbar } from '@/components/Navbar';
import { AsideProfile } from '@/components/profile/AsideProfile';

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <AsideProfile></AsideProfile>
    </>
  );
}
