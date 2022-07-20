/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/hocs/Layout';
import Link from "next/link"
import ArticleLeft from '../components/blog/article/ArticleLeft';
import ArticleRight from '../components/blog/article/ArticleRight';

const Index = ({ articles }) => {
    // const [articles, setArticles] = useState([]);
    // // const [loading, setLoading] = useState(true);

    // const fetchArticles = async () => {
    //     try {
    //         const response = await axios.get('https://cms.relay.club/api/articles?populate=*');
    //         console.log(response.data.data);
    //         setArticles(response.data.data);
    //         // setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchArticles();
    // }, [])

    // // if (loading) return <div>Loading</div>

    return (
        <Layout>
            <section className="py-20">
                <div className="container">
                    { !!articles.length && 
                    articles?.map((article, index) => 
                    (
                        <div key={index}><ArticleLeft article={article} /></div>
                    ))}
                    {/* <ArticleLeft /> */}
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

export async function getStaticProps(context) {
    const res = await fetch(``)
    const articles = await res.json()
  
    if (!articles) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { articles: articles.data }, // will be passed to the page component as props
    }
  }

export default Index;