import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumbs = ({ breadCrumbs }) => {
  const currentPath = decodeURIComponent(window.location.pathname);

  // Split the path into segments
  const pathSegments = currentPath
    .split("/")
    .filter((segment) => segment !== "");

  // Generate breadcrumbs array dynamically
  const breadcrumbs = pathSegments.map((segment, index) => {
    const link = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { name, link };
  });

  // Add the home breadcrumb
  breadcrumbs.unshift({ name: "Home", link: "/" });

  return (
    <div className="container max-w-screen-xl mx-auto">
      <ol className="flex flex-wrap text-sm font-medium text-gray-600 space-x-2 md:space-x-4 items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <Link
              href={breadcrumb.link}
              className={`${
                breadcrumb.link === currentPath
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 `}
            >
              <span className="underline-animation">

              {breadcrumb.name}
              </span>
            </Link>
            {index < breadcrumbs.length - 1 && (
              <FaChevronRight className="mx-2 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BreadCrumbs;
