import { FadeIn } from './Motion';

export function Vision() {
  return (
    <section className="bg-brand text-white border-b-2 border-black selection:bg-black selection:text-white">
      <div className="grid lg:grid-cols-12 min-h-[60vh]">
        <div className="lg:col-span-5 p-8 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between">
            <FadeIn>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white...mb-6 block">06 / The Catalog</span>
              <h2 className="text-5xl md:text-6xl lg:text-[80px] font-black tracking-tighter leading-[0.85] mb-12 uppercase text-balance">
                一起筹备新时代的<br/>
                <span className="text-black group-hover:bg-black">「新全概」</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="text-black font-mono text-xl font-bold bg-white p-6 border-2 border-black inline-block shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                1968 &mdash; Whole Earth Catalog
                <br />
                <div className="h-[2px] w-full bg-black my-4"></div>
                2026 &mdash; The New Catalog
              </div>
            </FadeIn>
        </div>

        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center text-lg md:text-xl font-medium leading-relaxed space-y-10 max-w-3xl">
           <FadeIn delay={0.2}>
              <p className="border-l-4 border-black pl-6">
                我们钦赞“全球概览”的精神，它是由布兰德于1968年创办的杂志，是最早将科技视为改变人类生活方式、提升人类创造能力的革命性工具的媒体。
              </p>
              <p className="mt-8">
                它不止是百科全书，更是展示了一种面向世界的好奇心，一种<span className="text-black font-black bg-white px-2 py-1 mx-1 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase tracking-tighter">“人可以借助工具、知识、网络和彼此，把生活重新组织起来”</span>的开放感。
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p>
                因此，我们也想要借助这次机会，将大家的提问和洞见，打造成独属于这个时代的“全球概览”。将大家提出的好问题、好思路、好方案都收录起来，成为一种贡献给这个时代的开源资产。
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p>
                如果你的心里也一直有放不下的问题，欢迎来创客厅和我们一起探索答案。也许在这里，你会遇见一个关心你所关心的人。<strong className="font-black text-black">记录此地此刻的人们，正在如何重新理解工具、地方、生活、知识、协作和未来。</strong>
              </p>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
