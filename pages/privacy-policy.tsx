import React from "react";
import { privacyPolicy } from "@/lib/privacy-policy";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function PrivacyPolicy() {
  return (
    <div
      className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
      <main className="flex flex-col items-center px-4">
        <ul role="list" className="divide-y divide-gray-100">
          {privacyPolicy.map((policy) => (
            <li
              key={policy.title}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {policy.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {policy.content}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
