'use client';

import { Navbar } from '@/components/Navbar';
import { NewProduct } from '@/components/newProduct/NewProduct';
import { useState } from 'react';

export default function page() {
  return (
    <>
      <Navbar />
      <NewProduct />
    </>
  );
}
