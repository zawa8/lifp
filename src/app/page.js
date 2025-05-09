// "use client";
import { Hsciifontpicker } from "@/components/hsciifp/hsciifontpicker";
//import { Hsciifontpicker } from "hsciifontlib";
export default function Home() {
  const iplaceholer = `input: replace/paste here.ԃis is trαnsliterator for phonetical languages.`;	
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Hsciifontpicker/>        
        </div>
        <div className="flex min-w-full gap-2 items-center flex-col sm:flex-row">
          <textarea rows={12} className="min-w-full" placeholder={iplaceholer} />
        </div>
      </main>
    </div>
  );
}
