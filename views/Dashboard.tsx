
import React from 'react';
import { 
  Users, 
  UserPlus, 
  Ban, 
  Activity, 
  Download,
  Calendar
} from 'lucide-react';
import { 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  XAxis,
  YAxis
} from 'recharts';
import StatCard from '../components/StatCard.tsx';

const data = [
  { name: '週一', friends: 400, active: 240 },
  { name: '週二', friends: 700, active: 400 },
  { name: '週三', friends: 1200, active: 800 },
  { name: '週四', friends: 1100, active: 750 },
  { name: '週五', friends: 1600, active: 1100 },
  { name: '週六', friends: 2100, active: 1400 },
  { name: '週日', friends: 2500, active: 1700 },
];

const sourceData = [
  { name: '門市掃碼', value: 45, color: '#06C755' },
  { name: '官方網站', value: 30, color: '#3B82F6' },
  { name: '廣告活動', value: 25, color: '#F59E0B' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="總好友數" 
          value="42,892" 
          trend={{ value: 12.5, isUp: true }} 
          icon={<Users />} 
          color="text-line" 
        />
        <StatCard 
          label="今日新增好友" 
          value="+342" 
          trend={{ value: 5.2, isUp: true }} 
          icon={<UserPlus />} 
          color="text-blue-600" 
        />
        <StatCard 
          label="封鎖率" 
          value="4.2%" 
          trend={{ value: 0.8, isUp: false }} 
          icon={<Ban />} 
          color="text-rose-500" 
        />
        <StatCard 
          label="活躍度" 
          value="68.4%" 
          trend={{ value: 2.1, isUp: true }} 
          icon={<Activity />} 
          color="text-amber-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">成長趨勢</h3>
              <p className="text-sm text-slate-500">追蹤您的粉絲成長與互動狀況</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
                <Calendar size={14} /> 過去 7 天
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-line text-white rounded-lg shadow-sm hover:bg-line-dark transition-colors">
                <Download size={14} /> 匯出報表
              </button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorFriends" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06C755" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#06C755" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  labelStyle={{ fontWeight: 'bold' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="friends" name="總人數" stroke="#06C755" strokeWidth={3} fillOpacity={1} fill="url(#colorFriends)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">來源分析</h3>
          <div className="space-y-6">
            {sourceData.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-600 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}}></div>
                    {item.name}
                  </span>
                  <span className="text-slate-900">{item.value}%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-800 mb-4">營運洞察</h4>
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-xs text-emerald-800 leading-relaxed font-medium">
              <strong>實體門市</strong> 是本週增長的主要動力（佔比 45%）。建議針對高流量門市推出專屬掃碼禮，進一步提升轉化率。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
