
import React, { useState } from 'react';
import { 
  Gift, 
  Smartphone, 
  History, 
  Plus, 
  Scan,
  CheckCircle,
  XCircle,
  QrCode
} from 'lucide-react';

const Rewards: React.FC = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  
  const rewards = [
    { id: '1', name: '免費濃縮咖啡兌換券', cost: 100, stock: 450, total: 1000, img: 'https://picsum.photos/seed/coffee/200' },
    { id: '2', name: '$50 現金折價券', cost: 500, stock: 120, total: 200, img: 'https://picsum.photos/seed/money/200' },
    { id: '3', name: '品牌質感自動傘', cost: 1200, stock: 15, total: 50, img: 'https://picsum.photos/seed/umbrella/200' },
    { id: '4', name: '會員限定隨行杯', cost: 800, stock: 0, total: 100, img: 'https://picsum.photos/seed/mug/200' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-slate-800">贈品與兌換管理</h2>
          <div className="flex bg-slate-200/50 p-1 rounded-xl">
             <button className="px-4 py-1.5 bg-white text-slate-800 rounded-lg text-xs font-bold shadow-sm cursor-pointer">贈品列表</button>
             <button className="px-4 py-1.5 text-slate-500 rounded-lg text-xs font-bold hover:text-slate-700 cursor-pointer">兌換紀錄</button>
          </div>
        </div>
        <div className="flex gap-2">
           <button 
             onClick={() => setShowScanModal(true)}
             className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 transition-all font-bold text-sm cursor-pointer"
           >
             <Scan size={18} /> 核銷 QR Code
           </button>
           <button className="flex items-center gap-2 px-5 py-2.5 bg-line text-white rounded-xl shadow-lg hover:bg-line-dark transition-all font-bold text-sm cursor-pointer">
             <Plus size={18} /> 新增贈品
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {rewards.map(item => (
          <div key={item.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-40 overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt={item.name} />
              {item.stock === 0 && (
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="px-4 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">已兌完</span>
                </div>
              )}
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-sm">
                {item.cost} 點
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-slate-800 mb-3 truncate">{item.name}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">庫存狀態</span>
                  <span className={`font-bold ${item.stock < 20 ? 'text-rose-500' : 'text-slate-600'}`}>{item.stock} / {item.total}</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${item.stock < 20 ? 'bg-rose-400' : 'bg-line'}`} 
                    style={{width: `${(item.stock / item.total) * 100}%`}}
                  ></div>
                </div>
                <div className="pt-3 flex gap-2">
                   <button className="flex-1 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 cursor-pointer">編輯詳情</button>
                   <button className="p-2 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors" title="兌換統計">
                      <History size={16} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
           <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Smartphone className="text-blue-500" size={20} /> 今日核銷數據
           </h3>
           <div className="text-xs text-slate-400 font-bold">更新時間：5 分鐘前</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                 <CheckCircle size={24} />
              </div>
              <div>
                 <p className="text-2xl font-bold text-slate-800">142</p>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">今日已核銷</p>
              </div>
           </div>
           <div className="flex items-center gap-4 border-l border-slate-100 pl-8">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-inner">
                 <History size={24} />
              </div>
              <div>
                 <p className="text-2xl font-bold text-slate-800">18</p>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">待審核紀錄</p>
              </div>
           </div>
           <div className="flex items-center gap-4 border-l border-slate-100 pl-8">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-inner">
                 <XCircle size={24} />
              </div>
              <div>
                 <p className="text-2xl font-bold text-slate-800">3</p>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">異常核銷</p>
              </div>
           </div>
        </div>
      </div>

      {showScanModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
           <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button onClick={() => setShowScanModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer">
                 <XCircle size={24} />
              </button>
              <div className="p-8 text-center">
                 <div className="w-16 h-16 bg-line/10 text-line rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <QrCode size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">核銷贈品兌換券</h3>
                 <p className="text-sm text-slate-500 mb-8">請掃描好友手機上的 QR Code 或手動輸入 8 位數核銷碼。</p>
                 
                 <div className="bg-slate-100 h-48 rounded-2xl flex items-center justify-center mb-6 border-2 border-dashed border-slate-200 text-slate-400 font-bold">
                    [ 正在初始化攝影機... ]
                 </div>

                 <div className="flex gap-3 mb-6">
                    <input type="text" placeholder="XXXX - XXXX" className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-center text-lg font-bold tracking-[0.2em] focus:outline-none focus:border-line" />
                 </div>

                 <button 
                  onClick={() => {
                    alert('核銷成功！點數已扣除並標記為已兌換。');
                    setShowScanModal(false);
                  }}
                  className="w-full py-4 bg-line text-white rounded-2xl font-bold hover:bg-line-dark transition-all shadow-lg shadow-line/20 cursor-pointer"
                 >
                    驗證並完成核銷
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Rewards;
