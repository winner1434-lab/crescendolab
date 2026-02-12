
import React from 'react';
import { 
  Trophy, 
  Calendar, 
  Settings2, 
  Users, 
  Dices, 
  Gift, 
  TrendingUp, 
  ExternalLink,
  Plus,
  Download
} from 'lucide-react';

const Campaigns: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">活動與抽獎管理</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 font-bold transition-all cursor-pointer shadow-sm">
            歷史活動
          </button>
          <button className="px-6 py-2 bg-line text-white rounded-xl shadow-md hover:bg-line-dark font-bold transition-all flex items-center gap-2 cursor-pointer">
            <Plus size={18} /> 建立新活動
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 當前進行中的活動 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <div className="relative h-48">
            <img src="https://picsum.photos/seed/campaign1/800/400" className="w-full h-full object-cover" alt="Campaign Banner" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase rounded-full tracking-widest shadow-lg">進行中</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800">2024 春季好禮大放送</h3>
                <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                  <Calendar size={14} /> 2024年3月1日 - 4月30日
                </p>
              </div>
              <button className="p-2 text-slate-400 hover:text-line cursor-pointer">
                <Settings2 size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">參與人數</p>
                <p className="text-lg font-bold text-slate-800">12,402</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">剩餘獎項</p>
                <p className="text-lg font-bold text-slate-800">45/100</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">轉換率</p>
                <p className="text-lg font-bold text-slate-800">18.4%</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-line/10 rounded-lg flex items-center justify-center text-line">
                    <Dices size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">消費抽獎規則</p>
                    <p className="text-[10px] text-slate-500">每滿 $500 可獲一次機會</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-line cursor-pointer">修改規則</button>
              </div>
              
              <div className="flex justify-between items-center p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                    <Gift size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">中獎機率設定</p>
                    <p className="text-[10px] text-slate-500">階梯式機率已啟用</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-line cursor-pointer">進行設定</button>
              </div>
            </div>
          </div>
        </div>

        {/* 活動數據概覽 */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-500" size={20} /> 績效分析
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-600">每日平均參與度</span>
                  <span className="text-sm font-bold text-line">+24%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-line w-[75%] rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">最佳來源</p>
                  <p className="text-lg font-bold text-slate-800">IG 限動廣告</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl">
                  <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">兌換最踴躍</p>
                  <p className="text-lg font-bold text-slate-800">免費咖啡券</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Users size={20} /> 中獎名單公告
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed font-medium">
              產生並發布本次活動的大獎中獎者清單至 LINE 官方帳號微網站。
            </p>
            <div className="flex gap-3">
              <button className="flex-1 py-2.5 bg-line text-white rounded-xl text-sm font-bold hover:bg-line-dark transition-colors cursor-pointer shadow-lg shadow-line/20">
                立即發布清單
              </button>
              <button className="px-4 py-2.5 bg-white/10 text-white border border-white/20 rounded-xl text-sm font-bold hover:bg-white/20 transition-colors cursor-pointer">
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
