/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../components/hocs/Layout';
import Link from "next/link"
import ArticleLeft from '../components/blog/article/ArticleLeft';
import ArticleRight from '../components/blog/article/ArticleRight';

const Index = () => {
    return (
        <Layout>
            <section className="py-20">
                <div className="container">
                    <ArticleLeft />
                    <ArticleRight />
                    <ArticleLeft />
                    <ArticleRight />
                    <ArticleLeft />
                    <ArticleRight />
                    <ArticleLeft />
                    <ArticleRight />
                    <div className="text-center">
                        <Link href="/blog">
                            <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-red-400 hover:bg-red-500 rounded">Show all posts</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;