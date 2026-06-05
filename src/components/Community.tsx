import { FadeIn } from './Motion';
import { Coffee, Monitor, BookOpen, Printer, Users, Building, Plus } from 'lucide-react';

export function Community() {
  const features = [
    { icon: Monitor, text: "40个公园临窗工位" },
    { icon: Coffee, text: "半户外开放式讨论区" },
    { icon: BookOpen, text: "专业技术与创业书籍" },
    { icon: Printer, text: "拓竹3D打印设备" },
    { icon: Users, text: "大小型会议室资源" },
    { icon: Building, text: "免费注册与算力补贴" },
  ];

  return (
    <>
      <section className="px-8 md:px-16 py-24 bg-black text-white border-b-2 border-black selection:bg-brand selection:text-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6 block">04 / Network</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-16">来线下，<br/>遇见同类</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-16 border-t-2 border-gray-800 pt-16">
            <FadeIn delay={0.1}>
              <p className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-balance">
                不知道你最近，有没有被什么<span className="text-brand">问题抓住？</span>
              </p>
              <p className="text-lg leading-relaxed text-gray-400 font-mono border-l-2 border-brand pl-6">
                提出问题只是开始，远不止终点。也许在这里，一个好问题，可以成为一段好关系的媒介。
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col justify-end">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-medium">
                我们想要邀请对相似问题感兴趣的伙伴来到创客厅彼此认识、相互了解。也许你们可以因为共同关心某个问题而彼此看见，甚至因为一起整理线索而开始协作。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white border-b-2 border-black selection:bg-brand selection:text-white">
         <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="p-8 md:p-16 lg:border-r-2 border-b-2 lg:border-b-0 border-black bg-gray-50 flex flex-col justify-between">
               <FadeIn>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 block">05 / The Space</span>
                 <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">创客厅有什么</h2>
                 <p className="text-xl font-bold mb-12">作为DN杭州的先行空间，目前的基础设施如下：</p>
               </FadeIn>
               
               <div className="space-y-4">
                 {features.map((item, i) => (
                   <FadeIn key={i} delay={0.1 + (i * 0.05)}>
                     <div className="p-5 border-2 border-black hover:bg-brand hover:border-brand hover:text-white transition-colors duration-300 flex items-center gap-6 bg-white group shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 cursor-default">
                       <item.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                       <p className="font-bold text-lg">{item.text}</p>
                     </div>
                   </FadeIn>
                 ))}
               </div>
            </div>
            
            <div className="p-8 md:p-16 flex flex-col justify-end">
                <FadeIn delay={0.3} className="h-full">
                   <div className="p-10 border-2 border-black bg-white group hover:bg-brand hover:text-white transition-colors h-full flex flex-col justify-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-default">
                     <h3 className="font-black text-3xl md:text-5xl mb-8 flex flex-col gap-4 uppercase tracking-tighter">
                       <Plus className="w-12 h-12 text-brand group-hover:text-white transition-colors"/> 
                       Future Spaces
                     </h3>
                     <p className="text-xl font-medium leading-relaxed group-hover:text-white/90 border-l-4 border-brand group-hover:border-white pl-6">
                       未来社区主空间完善后，还将为大家提供：项目路演舞台 · Maker Lab元宇宙设备（VR / 触感手套 / 全向跑步机等）· 长期住宿区 · 餐饮健身区 · 多媒体娱乐室等。
                     </p>
                   </div>
                </FadeIn>
            </div>
         </div>
      </section>
    </>
  );
}
