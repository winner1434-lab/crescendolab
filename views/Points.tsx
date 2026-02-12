
import React from 'react';
import { 
  Coins, 
  Settings, 
  PlusCircle, 
  MinusCircle, 
  History, 
  Upload, 
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

const Points: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 點數規則設定 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800">集點規則</h3>
                <p className="text-sm text-slate-500 font-medium">定義好友如何取得與使用點數</p>
              </div>
              <button className="text-line font-bold text-sm hover:underline cursor-pointer">新增規則</button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: '一般消費集點', rule: '每消費 $1 獲得 1 點', icon: <Coins size={20} />, status: '啟用中' },
                { title: '新會員首購禮', rule: '立即贈送 100 點', icon: <PlusCircle size={20} />, status: '啟用中' },
                { title: '生日加碼倍數', rule: '當月消費享 3 倍點數', icon: <History size={20} />, status: '草稿' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl text-slate-400 group-hover:text-line transition-colors shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.rule}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${item.status === '啟用中' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-200 text-slate-500'}`}>
                      {item.status}
                    </span>
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <h3 className="text-lg font-bold text-slate-800 mb-6">批次調整</h3>
             <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-6 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                  <Upload className="text-slate-300 group-hover:text-line transition-colors" size={32} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">上傳 CSV 批次更新</p>
                    <p className="text-xs text-slate-400 font-medium">支援會員 ID、點數變更、變更原因</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-center w-full sm:w-48">
                   <button className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                     <PlusCircle size={16} /> 手動加點
                   </button>
                   <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
                     <MinusCircle size={16} /> 手動扣點
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* 全域系統設定 */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl h-fit">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <Settings size={20} className="text-line" /> 系統規則設定
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">點數有效期</label>
                <div className="flex items-center gap-2">
                   <input type="number" defaultValue={365} className="w-20 bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-white font-bold text-center focus:outline-none" />
                   <span className="text-sm font-bold">天 (自取得日算起)</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">到期提醒閾值</label>
                <div className="flex items-center gap-2">
                   <input type="number" defaultValue={30} className="w-20 bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-white font-bold text-center focus:outline-none" />
                   <span className="text-sm font-bold">天 (到期前通知)</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                   <span className="text-sm font-bold">自動發送推播？</span>
                   <button className="w-10 h-5 bg-line rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
                   </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4 shadow-sm">
             <AlertTriangle className="text-amber-500 shrink-0" size={24} />
             <div>
               <h4 className="font-bold text-amber-800 text-sm">待辦建議</h4>
               <p className="text-xs text-amber-700 mt-1 leading-relaxed font-medium">
                 有 2,400 位會員的點數將在 7 天內到期。建議發送「點數最後兌換」推播訊息以提升互動。
               </p>
               <button className="mt-3 text-xs font-bold text-amber-800 hover:underline cursor-pointer">立即建立草稿 →</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
