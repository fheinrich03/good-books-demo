import { useLocation, useNavigate } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

interface DynamicBreadcrumbsProps {
  className?: string;
}

export default function DynamicBreadcrumbs({
  className,
}: DynamicBreadcrumbsProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathElements = location.pathname.split("/").splice(1);
  const links = pathElements.map((_, index, arr) => {
    return {
      label: arr.slice(index, index + 1),
      href: "/" + arr.slice(0, index + 1).join("/"),
    };
  });

  const back = links.at(links.length - 2)?.href;
  function handleClick() {
    if (!back) return;
    navigate(back);
  }
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {back && links.length > 0 && (
        <Button variant="ghost" size="icon" onClick={handleClick}>
          <ArrowLeftIcon />
        </Button>
      )}
      <Breadcrumb>
        <BreadcrumbList>
          {links.map((link, index) => {
            return (
              <React.Fragment key={index.toString()}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={link.href}>{link.label}</BreadcrumbLink>
                </BreadcrumbItem>
                {index !== links.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
