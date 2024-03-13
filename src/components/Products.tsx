'use client';

import fetchArticles from '@/services/Articles';
import React from 'react';
import { useEffect, useState } from 'react';

export const Products = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        // Manejar el error si es necesario
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Artículos</h1>
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>{article.nombre}</li>
        ))}
      </ul>
    </div>
  );
};
