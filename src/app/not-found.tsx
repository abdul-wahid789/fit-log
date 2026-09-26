import React from 'react';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

const NotFoundPage = () => {
    return (
       <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center w-[90%] md:container mx-auto">
            <h1 className="text-9xl font-black text-base-300 drop-shadow-sm md:text-[12rem]">
                404
            </h1>

            <div className="space-y-4 mt-10 md:mt-16">
                <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
                <p className="text-base-content/70 max-w-md mx-auto">
                    Looks like this page missed its workout. We couldn&apos;t find the lift or library you were looking for.
                </p>
            </div>

            {/* Call to Action */}
            <Link href="/" className="mt-8 z-10">
                <button className="btn btn-accent flex items-center gap-2">
                    <IoMdArrowRoundBack className="text-lg" />
                    Back to Library
                </button>
            </Link>
        </section>
    );
};

export default NotFoundPage;