
import React from 'react';
import { Shield, UserPlus, Key, Mail, MoreVertical, Search, Globe } from 'lucide-react';
import { AdminRole } from '../types.ts';

const AdminSettings: React.FC = () => {
  const admins = [
    { id: '1', name: 'Chen Wei-Lun', email: 'chen@line-crm.com', role: AdminRole.SUPER_ADMIN, status: 'Active' },
    { id: '2', name: 'Alice Huang', email: 'alice.h@line-crm.com', role: AdminRole.MARKETING_ADMIN, status: 'Active' },
    { id: '3', name: 'Bob Store Mgr', email: 'store01@line-crm.com', role: AdminRole.STORE_STAFF, status: 'Active' },
    { id: '4', name: 'Inactive User', email: 'test@line-crm.com', role: AdminRole.MARKETING_ADMIN, status: 'Inactive' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Info */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-line/10 rounded-2xl flex items-center justify-center text-line">
               <Shield size={32} />
            </div>
            <div>
               <h2 className="text-2xl font-bold text-slate-800 tracking-tight">System Access</h2>
               <p className="text-sm text-slate-500 font-medium">Manage permissions and team access levels</p>
            </div>
         </div>
         <button className="px-6 py-3 bg-line text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-line/20 hover:bg-line-dark transition-all">
            <UserPlus size={18} /> Invite New Admin
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Role Definitions */}
        <div className="lg:col-span-1 space-y-4">
           <h3 className="font-bold text-slate-800 text-lg px-2">Role Permissions</h3>
           {[
             { role: 'Super Admin', desc: 'Full access to all system modules, including finance and audit logs.' },
             { role: 'Marketing Admin', desc: 'Manage friends, broadcasts, and campaigns. No billing access.' },
             { role: 'Store Staff', desc: 'Read-only access to friend lists. Verification tool access only.' },
           ].map((r, i) => (
             <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-line/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <Shield size={16} className="text-line" />
                   <h4 className="font-bold text-slate-800 text-sm">{r.role}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
             </div>
           ))}
        </div>

        {/* Right: User List */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                 <h3 className="font-bold text-slate-800">Authorized Personnel</h3>
                 <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input type="text" placeholder="Find admin..." className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none" />
                 </div>
              </div>
              <div className="divide-y divide-slate-50">
                {admins.map(admin => (
                  <div key={admin.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold">
                           {admin.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-800">{admin.name}</p>
                           <p className="text-xs text-slate-400 flex items-center gap-1">
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
                             {admin.role}
                           </p>
                           <p className={`text-[10px] font-bold ${admin.status === 'Active' ? 'text-emerald-500' : 'text-slate-400'}`}>
                              {admin.status}
                           </p>
                        </div>
                        <button className="p-1.5 text-slate-300 hover:text-slate-600">
                           <MoreVertical size={18} />
                        </button>
                     </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-50 text-center">
                 <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">View Inactive Logs</button>
              </div>
           </div>

           {/* Security Settings Area */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-lg">
                 <h4 className="font-bold flex items-center gap-2 mb-2 text-sm">
                   <Key size={16} /> Password Policy
                 </h4>
                 <p className="text-xs text-indigo-100 mb-4 opacity-80 leading-relaxed">Require 2FA and 12-character passwords for all Super Admin accounts.</p>
                 <button className="text-xs font-bold px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">Configure</button>
              </div>
              <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-lg">
                 <h4 className="font-bold flex items-center gap-2 mb-2 text-sm">
                   <Globe size={16} /> API Integration
                 </h4>
                 <p className="text-xs text-slate-400 mb-4 opacity-80 leading-relaxed">Manage Webhooks and LINE Messaging API Channel Secret.</p>
                 <button className="text-xs font-bold px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">Manage Keys</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
