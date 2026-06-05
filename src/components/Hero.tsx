import { ArrowRight } from 'lucide-react';
import { FadeIn } from './Motion';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between px-8 md:px-16 pt-24 pb-16 border-b-2 border-black bg-white selection:bg-brand selection:text-white">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-12 justify-between items-start lg:items-end">
        <FadeIn className="flex-1 w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 block">01 / The Initiative</span>
          <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-black tracking-tighter text-black leading-[0.85] mb-8 uppercase text-balance">
            全世界的<br className="max-md:hidden" />提问者<br/>
            <span className="text-brand">联合起来</span>
          </h1>
        </FadeIn>
        
        <div className="flex-1 flex flex-col items-start lg:items-end text-left lg:text-right w-full lg:max-w-xl">
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl font-medium text-black mb-12 leading-snug">
              我们在杭州，为那些充满好奇和创造力的人打造了一个创业者会客厅。
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-brand text-white py-6 px-10 text-xl font-bold flex justify-between gap-12 items-center hover:bg-black transition-colors border-2 border-brand hover:border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all">
              <span className="tracking-widest">导航至创客厅</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
