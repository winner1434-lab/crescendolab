
import React from 'react';
import { Shield, UserPlus, Key, Mail, MoreVertical, Search, Globe } from 'lucide-react';
import { AdminRole } from '../types.ts';

const AdminSettings: React.FC = () => {
  const admins = [
    { id: '1', name: '陳威倫', email: 'chen@line-crm.com', role: AdminRole.SUPER_ADMIN, status: '已啟用' },
    { id: '2', name: '黃愛麗', email: 'alice.h@line-crm.com', role: AdminRole.MARKETING_ADMIN, status: '已啟用' },
    { id: '3', name: '張門市', email: 'store01@line-crm.com', role: AdminRole.STORE_STAFF, status: '已啟用' },
    { id: '4', name: '測試帳號', email: 'test@line-crm.com', role: AdminRole.MARKETING_ADMIN, status: '停用中' },
  ];

  const roleMap: Record<string, string> = {
    [AdminRole.SUPER_ADMIN]: '超級管理員',
    [AdminRole.MARKETING_ADMIN]: '行銷管理員',
    [AdminRole.STORE_STAFF]: '門市人員'
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* 標題與操作區 */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-line/10 rounded-2xl flex items-center justify-center text-line shadow-inner">
               <Shield size={32} />
            </div>
            <div>
               <h2 className="text-2xl font-bold text-slate-800 tracking-tight">帳號與權限管理</h2>
               <p className="text-sm text-slate-500 font-medium">管理後台人員名單與系統存取權限</p>
            </div>
         </div>
         <button className="px-6 py-3 bg-line text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-line/20 hover:bg-line-dark transition-all cursor-pointer">
            <UserPlus size={18} /> 邀請新管理員
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左側：角色權限說明 */}
        <div className="lg:col-span-1 space-y-4">
           <h3 className="font-bold text-slate-800 text-lg px-2">權限角色說明</h3>
           {[
             { role: '超級管理員', desc: '擁有系統所有模組的完整存取權，包括帳務與稽核紀錄。' },
             { role: '行銷管理員', desc: '可管理好友、推播與活動。無法查看帳務設定。' },
             { role: '門市人員', desc: '僅能查看好友清單並使用 QR Code 核銷工具。' },
           ].map((r, i) => (
             <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-line/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <Shield size={16} className="text-line" />
                   <h4 className="font-bold text-slate-800 text-sm">{r.role}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{r.desc}</p>
             </div>
           ))}
        </div>

        {/* 右側：人員清單 */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                 <h3 className="font-bold text-slate-800">後台授權人員</h3>
                 <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input type="text" placeholder="搜尋管理員..." className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-line/20" />
                 </div>
              </div>
              <div className="divide-y divide-slate-50">
                {admins.map(admin => (
                  <div key={admin.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold">
                           {admin.name[0]}
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-800">{admin.name}</p>
                           <p className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                              <Mail size={10} /> {admin.email}
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <div className="text-right">
                           <p className={`text-[10px] font-bold uppercase tracking-wider ${
                             admin.role === AdminRole.SUPER_ADMIN ? 'text-indigo-600' : 
                             admin.role === AdminRole.MARKETING_ADMIN ? 'text-blue-600' : 'text-slate-500'
                           }`}>
                             {roleMap[admin.role]}
                           </p>
                           <p className={`text-[10px] font-bold ${admin.status === '已啟用' ? 'text-emerald-500' : 'text-slate-400'}`}>
                              {admin.status}
                           </p>
                        </div>
                        <button className="p-1.5 text-slate-300 hover:text-slate-600 cursor-pointer">
                           <MoreVertical size={18} />
                        </button>
                     </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-50 text-center">
                 <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">查看異動日誌</button>
              </div>
           </div>

           {/* 安全設定區塊 */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-lg">
                 <h4 className="font-bold flex items-center gap-2 mb-2 text-sm">
                   <Key size={16} /> 密碼安全性政策
                 </h4>
                 <p className="text-xs text-indigo-100 mb-4 opacity-80 leading-relaxed font-medium">強制所有超級管理員帳號開啟雙重驗證 (2FA) 並使用 12 位以上密碼。</p>
                 <button className="text-xs font-bold px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all cursor-pointer">立即設定</button>
              </div>
              <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-lg">
                 <h4 className="font-bold flex items-center gap-2 mb-2 text-sm">
                   <Globe size={16} /> API 整合介接
                 </h4>
                 <p className="text-xs text-slate-400 mb-4 opacity-80 leading-relaxed font-medium">管理 Webhooks 回傳與 LINE Messaging API Channel Secret 憑證。</p>
                 <button className="text-xs font-bold px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all cursor-pointer">管理金鑰</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
