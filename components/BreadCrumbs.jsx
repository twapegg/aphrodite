import React from "react";
import Link from "next/link";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <section className="py-5 sm:py-7 bg-blue-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          {breadCrumbs.map((breadCrumb, index) => (
            <li key={index}>
              <Link href={breadCrumb.href}>
                <a className="text-blue-500 hover:text-blue-600">
                  {breadCrumb.text}
                </a>
              </Link>
              {index < breadCrumbs.length - 1 && (
                <span className="text-gray-400 mx-1">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
