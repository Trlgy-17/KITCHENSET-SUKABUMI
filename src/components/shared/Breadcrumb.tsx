import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-editorial-500">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center text-editorial-600 hover:text-primary transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            Beranda
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-editorial-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-medium text-editorial-900 truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-editorial-600 hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
