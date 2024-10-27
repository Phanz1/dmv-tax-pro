import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600"/></div>,
    title: "Monthly Bookkeeping",
    description:
      "Consistent, detailed tracking of your financials so you can focus on growing your business.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600"/></div>,
    title: "Financial Statement Preparation",
    description:
      "Accurate balance sheets, income statements, and cash flow statements that give you a clear picture of your business performance.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600"/></div>,
    title: "QuickBooks Setup & Management",
    description:
      "We’ll help you set up and manage your books using QuickBooks for seamless financial tracking.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600"/></div>,
    title: "Bank Reconciliation & Payroll",
    description:
      "We reconcile your accounts to ensure accuracy and help you manage payroll processing with ease",
  },
  
];
