
import React from 'react';
import ArticleDetail from '@/pages/ArticleDetail';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.id === params.id);
  if (!article) return { title: 'Článek nenalezen' };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.id === params.id);
  if (!article) notFound();

  return <ArticleDetail lang="CZ" />;
}
