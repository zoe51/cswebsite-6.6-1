import { FadeIn } from './Motion';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="selection:bg-brand selection:text-white bg-white">
      <div className="grid lg:grid-cols-[1fr_1fr] border-b-2 border-black bg-white">
          <div className="p-8 md:p-16 lg:border-r-2 border-b-2 lg:border-b-0 border-black flex flex-col justify-center gap-8">
             <FadeIn>
               <h2 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter uppercase text-balance leading-none">
                 直达创客厅
               </h2>
             </FadeIn>
             <FadeIn delay={0.1}>
                 <p className="text-xl md:text-3xl font-black text-brand uppercase tracking-widest">
                   全世界的提问者联合起来。
                 </p>
             </FadeIn>
          </div>
          
          <div className="p-8 md:p-16 flex flex-col justify-center gap-12 bg-gray-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMikiLz4KPC9zdmc+')] px-8 md:px-16">
             <FadeIn delay={0.2} className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 transition-all group flex flex-col items-start cursor-pointer">
                 <div className="flex justify-between w-full items-start mb-12">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block border-b-2 border-black pb-2 px-1">Location</span>
                   <ArrowUpRight className="w-8 h-8 group-hover:text-brand transition-colors" />
                 </div>
                 
                 <p className="text-4xl md:text-6xl font-black leading-none mb-6 group-hover:text-brand transition-colors">
                   杭州市拱墅区<br/>科祥街139号
                 </p>
                 <p className="text-xl font-mono p-4 border-2 border-black inline-block bg-brand text-white font-bold tracking-tight">
                   汇金云创南门 6B-5楼
                 </p>
             </FadeIn>
          </div>
      </div>
      
      <div className="h-16 md:h-20 bg-black text-white flex items-center justify-between px-8 md:px-16 text-[10px] md:text-xs">
         <span className="font-bold uppercase tracking-[0.2em]">Join the questioners</span>
         <span className="font-mono text-gray-500">SPARK LAB &copy; 2026</span>
      </div>
    </footer>
  );
}
