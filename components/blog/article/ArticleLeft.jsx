/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function ArticleLeft({ article }) {
  return (
    <div className="flex flex-wrap -mx-4 mb-12 animate__animated animate__fadeIn animated hover-up-5">
      <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
          <Link href="/post">
              <a>
                  <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-red-50 rounded-full text-red-600">Development</span>
              </a>
          </Link>
          <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
              <Link href={`/blog/${article.attributes.slug}`}>
                  <a className="hover:text-red-500"> { article.attributes.title }</a>
              </Link>
          </h3>
          <p className="mb-4 text-sm md:text-base leading-loose text-redGray-400">Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros bibendum. Maecenas convallis tempor varius.</p>
          <Link href="/post">
              <a className="text-xs font-semibold text-red-600">
                  <span>Read More</span>
                  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
              </a>
          </Link>
      </div>
      <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
          <Link href="/post">
              <a>
                  <img className="h-80 w-full object-cover rounded" src={article.attributes.banner.data.attributes.url} alt="LW" />
              </a>
          </Link>
      </div>
  </div>
  )
}
