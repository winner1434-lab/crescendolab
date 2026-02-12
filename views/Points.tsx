
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
        {/* Rules Config */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Earning Rules</h3>
                <p className="text-sm text-slate-500">Define how friends get points</p>
              </div>
              <button className="text-line font-bold text-sm hover:underline">Add New Rule</button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Base Consumption', rule: '1 Point per $1 Spent', icon: <Coins size={20} />, status: 'Active' },
                { title: 'New Member Gift', rule: 'Instant 100 Points', icon: <PlusCircle size={20} />, status: 'Active' },
                { title: 'Birthday Bonus', rule: '3x Points on Birthday', icon: <History size={20} />, status: 'Draft' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl text-slate-400 group-hover:text-line transition-colors shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.rule}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-200 text-slate-500'}`}>
                      {item.status}
                    </span>
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <h3 className="text-lg font-bold text-slate-800 mb-6">Bulk Adjustments</h3>
             <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-6 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-slate-50 cursor-pointer transition-colors">
                  <Upload className="text-slate-300" size={32} />
                  <div>
                    <p className="text-sm font-bold text-slate-800">Upload CSV to batch update</p>
                    <p className="text-xs text-slate-400">Support member ID, points change, reason</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-center w-full sm:w-48">
                   <button className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                     <PlusCircle size={16} /> Add Points
                   </button>
                   <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                     <MinusCircle size={16} /> Deduct Points
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Global Settings */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl h-fit">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <Settings size={20} className="text-line" /> System Logic
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Points Validity</label>
                <div className="flex items-center gap-2">
                   <input type="number" defaultValue={365} className="w-20 bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-white font-bold text-center focus:outline-none" />
                   <span className="text-sm font-medium">Days from earning</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Notification Threshold</label>
                <div className="flex items-center gap-2">
                   <input type="number" defaultValue={30} className="w-20 bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-white font-bold text-center focus:outline-none" />
                   <span className="text-sm font-medium">Days before expiry</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                   <span className="text-sm">Auto-send Push?</span>
                   <div className="w-10 h-5 bg-line rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4">
             <AlertTriangle className="text-amber-500 shrink-0" size={24} />
             <div>
               <h4 className="font-bold text-amber-800 text-sm">Action Needed</h4>
               <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                 2,400 members have points expiring in 7 days. We recommend sending a "Last Chance to Redeem" broadcast message.
               </p>
               <button className="mt-3 text-xs font-bold text-amber-800 hover:underline">Draft Message Now →</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
