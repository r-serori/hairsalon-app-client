import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  IconName: React.ComponentType<any>;
  iconSrc: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  iconSrc,
  IconName,
  label,
}) => {
  return (
    <li className="w-40 h-40 bg-gray-400 flex justify-center items-center rounded-lg">
      <Link href={href}>
        <IconName src={iconSrc} className="w-20 h-20" />
        <span className="mt-2 block text-center" style={{ fontSize: "1.2rem" }}>
          {label}
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
