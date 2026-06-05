import { FadeIn } from './Motion';

export function Discovery() {
  return (
    <>
      <section className="px-8 md:px-16 py-24 bg-gray-50 border-b-2 border-black selection:bg-brand selection:text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <FadeIn className="md:w-1/2">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 block">02 / Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">好的提问，<br />比答案更重要</h2>
            
            <div className="mt-12 bg-white border-2 border-black p-8 group hover:bg-brand hover:text-white transition-colors duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 cursor-default">
               <div className="text-xs md:text-sm font-mono uppercase tracking-tighter text-brand font-bold group-hover:text-white">
                  Driven by questions, not tasks.
               </div>
            </div>
          </FadeIn>

          <div className="md:w-1/2 flex flex-col justify-end">
            <FadeIn delay={0.1}>
              <p className="text-2xl md:text-3xl font-bold leading-tight text-black mb-8">
                这个时代，信息从不稀缺。<br/>稀缺的，是好问题。
              </p>
              <div className="bg-white p-8 border-2 border-black border-l-8 text-lg font-medium leading-relaxed">
                我们相信：一个好问题，比一百个答案更有力量。所以我们想邀请你，一起来探讨这个时代真正值得被看见、被思考、被解决的问题。
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 bg-white border-b-2 border-black selection:bg-brand selection:text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
             <div className="lg:w-1/2">
                <FadeIn>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 block">03 / Vision</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">伟大往往<br/>藏于细节</h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-xl md:text-2xl text-black font-bold mb-8 leading-snug">
                    不必从一个宏大的问题开始，<br/>伟大往往诞生于细节之中。<br/>
                    <span className="font-mono text-brand font-black inline-block mt-4 uppercase tracking-tighter">Greatness lives in the details.</span>
                  </p>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed border-l-4 border-brand pl-6">
                     很多真正重要的问题，一开始都不是以“大问题”的形式出现的，而是以一种微妙的不舒服、好奇、疑惑、荒诞、困惑出现的。
                  </p>
                </FadeIn>
             </div>
             
             <div className="lg:w-1/2 flex flex-col justify-end">
                <div className="space-y-6">
                  {[
                    "为什么我们有这么多AI提效工具，反而更焦虑了？",
                    "为什么越来越多人想逃离大城市，却不确定离开后应该如何生活？",
                    "为什么有越来越多的孩子患上了抑郁症？"
                  ].map((q, i) => (
                    <FadeIn key={i} delay={0.1 * (i + 1)}>
                      <div className="border-2 border-black p-6 md:p-8 hover:bg-black hover:text-white transition-colors duration-300 flex gap-6 items-start shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 cursor-default">
                        <span className="text-brand font-mono font-black text-2xl pt-1">0{i + 1}</span>
                        <p className="text-xl md:text-2xl font-bold leading-snug">{q}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
