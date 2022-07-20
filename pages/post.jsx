/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../components/hocs/Layout';
import Link from "next/link"

const Post = () => {
    return (
        <>
            <Layout>
                <section className="pb-20">
                    <div className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat">
                        <div className="container">
                            <div className="max-w-2xl mx-auto">
                                <div className="text-center mb-6">
                                    <span className="text-base md:text-lg">
                                        <Link href="/blog-2">
                                            <a className="text-blueGray-200 hover:underline">
                                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-red-100 text-red-600 rounded-xl mr-3">Business</span>
                                            </a>
                                        </Link>
                                        <span className="text-blueGray-500 text-sm">24 Jan, 2021</span>
                                    </span>
                                    <h2 className="text-4xl md:text-5xl mt-4 font-bold font-heading">Building your personal blog</h2>
                                </div>
                                <div className="flex justify-center mb-8">
                                    <img className="w-12 h-12 object-cover rounded-full" src="https://picsum.photos/500/500" alt="LW" />
                                    <div className="pl-4">
                                        <p className="text-blueGray-500 mb-1">Alice Bradley</p>
                                        <p className="text-xs text-blueGray-500 font-semibold">Co Founders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="max-w-2xl mx-auto">
                            <p className="mb-6 leading-loose text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
                            <div className="w-full mx-auto px-12 pt-5 pb-10">
                                <div className="w-full mb-6 border-l-4 border-gray-100">
                                    <p className="text-lg text-gray-600 px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
                                </div>
                                <div className="w-full pl-6">
                                    <p className="text-md text-indigo-500 font-bold">Scott Windon</p>
                                    <p className="text-xs text-gray-500">@scott.windon</p>
                                </div>
                            </div>
                            <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis.
                            </p>
                        </div>

                        <div className="pt-40 pb-40 mb-12 bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: "url('https://picsum.photos/500/500')" }}>
                            <div className="max-w-2xl mx-auto">
                                <div className="text-center mb-6"></div>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
                            </p>

                            <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
                            </p>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Post;