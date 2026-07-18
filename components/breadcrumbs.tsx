import Link from "next/link";
import type { Route } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span className="breadcrumb-item" key={item.href}>
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href as Route}>{item.label}</Link>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </span>
          );
        })}
      </nav>
      <BreadcrumbJsonLd
        items={items.map((item) => ({
          name: item.label,
          url: item.href,
        }))}
      />
    </>
  );
}
