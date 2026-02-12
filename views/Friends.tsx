
import React, { useState } from 'react';
import { Search, Filter, Download, MoreHorizontal, MessageCircle, Tag, Plus } from 'lucide-react';

const MOCK_FRIENDS = [
  { id: '1', displayName: '王大明', avatar: 'https://picsum.photos/seed/john/100', source: '門市', tags: ['VIP', '咖啡控'], points: 1250, status: '活躍', createdAt: '2023-10-12' },
  { id: '2', displayName: '李小美', avatar: 'https://picsum.photos/seed/jane/100', source: '官方網站', tags: ['新朋友'], points: 100, status: '活躍', createdAt: '2024-01-05' },
  { id: '3', displayName: '張艾莉', avatar: 'https://picsum.photos/seed/alice/100', source: '廣告QR', tags: ['KOL', '美妝'], points: 3400, status: '活躍', createdAt: '2023-05-20' },
  { id: '4', displayName: '陳先生', avatar: 'https://picsum.photos/seed/bob/100', source: '門市', tags: ['常客'], points: 890, status: '已封鎖', createdAt: '2023-08-11' },
  { id: '5', displayName: '林果果', avatar: 'https://picsum.photos/seed/carol/100', source: '官方網站', tags: ['優惠券達人'], points: 450, status: '活躍', createdAt: '2024-02-15' },
];

const Friends: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="搜尋好友姓名或 ID..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-line/20 focus:border-line transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm shadow-sm cursor-pointer">
            <Filter size={18} /> 篩選
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm shadow-sm cursor-pointer">
            <Download size={18} /> 匯出名單
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-line text-white rounded-xl shadow-md hover:bg-line-dark transition-all font-bold text-sm cursor-pointer">
            <Plus size={18} /> 批次標籤
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">好友資訊</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">來源</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">標籤</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">點數</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">狀態</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">加入日期</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_FRIENDS.map((friend) => (
                <tr key={friend.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={friend.avatar} className="w-10 h-10 rounded-full border border-slate-100 object-cover" alt={friend.displayName} />
                      <div>
                        <p className="font-bold text-slate-800 leading-tight">{friend.displayName}</p>
                        <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-tighter">ID: {friend.id.padStart(6, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{friend.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {friend.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-slate-800">{friend.points.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      friend.status === '活躍' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                    }`}>
                      {friend.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{friend.createdAt}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-line transition-colors cursor-pointer" title="發送訊息">
                        <MessageCircle size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer" title="編輯標籤">
                        <Tag size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-bold">顯示 1 到 5 位，共 42,892 位好友</p>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">上一頁</button>
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-sm cursor-pointer">下一頁</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
