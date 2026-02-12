
import React from 'react';
import { 
  Send, 
  Plus, 
  Clock, 
  FileText, 
  Image as ImageIcon, 
  Layout, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

const Broadcast: React.FC = () => {
  const activities = [
    { id: '1', title: 'Summer Sale Promotion', type: 'Image', status: 'Sent', sent: 34200, failed: 120, date: '2024-03-15 10:00' },
    { id: '2', title: 'New Product Announcement', type: 'Rich Menu', status: 'Scheduled', sent: 42000, failed: 0, date: '2024-04-01 14:30' },
    { id: '3', title: 'Weekly News Update', type: 'Text', status: 'Draft', sent: 0, failed: 0, date: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">Broadcast Campaigns</h2>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-line text-white rounded-xl shadow-lg shadow-line/20 hover:bg-line-dark transition-all font-bold">
          <Plus size={20} /> Create New Broadcast
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Creation Preview Card */}
        <div className="xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <FileText className="text-line" size={18} /> Quick Draft
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">Message Type</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-line bg-line/5 text-line">
                  <FileText size={20} />
                  <span className="text-[10px] font-bold uppercase">Text</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200 transition-all">
                  <ImageIcon size={20} />
                  <span className="text-[10px] font-bold uppercase">Image</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200 transition-all">
                  <Layout size={20} />
                  <span className="text-[10px] font-bold uppercase">Rich Menu</span>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">Content</label>
              <textarea 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-line/20 min-h-[120px]"
                placeholder="Enter your message here..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">Target Audience</label>
              <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none">
                <option>All Friends</option>
                <option>Tag: VIP Only</option>
                <option>Points > 1000</option>
                <option>New Friends (Last 7 days)</option>
              </select>
            </div>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors mt-2">
              Preview & Send
            </button>
          </div>
        </div>

        {/* List of Previous Broadcasts */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 px-2">
            <Clock className="text-slate-400" size={18} /> Recent Activity
          </h3>
          {activities.map(act => (
            <div key={act.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-line/30 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${
                    act.type === 'Image' ? 'bg-blue-50 text-blue-600' : 
                    act.type === 'Rich Menu' ? 'bg-amber-50 text-amber-600' : 
                    'bg-emerald-50 text-line'
                  }`}>
                    {act.type === 'Image' ? <ImageIcon size={24} /> : act.type === 'Rich Menu' ? <Layout size={24} /> : <FileText size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-line transition-colors">{act.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={12} /> {act.date}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        act.status === 'Sent' ? 'bg-emerald-50 text-emerald-600' :
                        act.status === 'Scheduled' ? 'bg-blue-50 text-blue-600' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {act.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {act.status !== 'Draft' && (
                  <div className="flex items-center gap-8 border-l border-slate-100 pl-6 sm:ml-auto">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Success</p>
                      <p className="text-sm font-bold text-slate-800 flex items-center gap-1">
                        <CheckCircle2 size={14} className="text-emerald-500" /> {act.sent.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Failed</p>
                      <p className="text-sm font-bold text-slate-800 flex items-center gap-1">
                        <AlertCircle size={14} className="text-rose-400" /> {act.failed.toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <button className="w-full py-4 text-slate-500 text-sm font-medium border-2 border-dashed border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all">
            View All Broadcast History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
