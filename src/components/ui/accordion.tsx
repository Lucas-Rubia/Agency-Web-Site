"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-0 font-medium transition-all [&[data-state=open]>div>span>#plus]:hidden [&[data-state=closed]>div>span>#minus]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <div
        className={
          buttonVariants({
            variant: "ghost",
            className:
              "text-[#b3b3b2] font-normal hover:bg-transparent text-base min-[1920px]:text-lg p-0",
          })
        }
      >
        <span className="size-10 min-[1920px]:size-[52px] rounded-full bg-[#1f1f1f] text-[#e7beb1] flex items-center justify-center shrink-0 border border-[#262626]">
          <Plus
            id="plus"
            className="!size-7 stroke-[1px] min-[1920px]:!size-8"
          />
          <Minus
            id="minus"
            className="!size-7 stroke-[1px] min-[1920px]:!size-8"
          />
        </span>
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
