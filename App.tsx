
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Send, 
  Trophy, 
  Coins, 
  Gift, 
  Settings, 
  Bell, 
  LogOut,
  ChevronRight
} from 'lucide-react';

import DashboardView from './views/Dashboard.tsx';
import FriendsView from './views/Friends.tsx';
import BroadcastView from './views/Broadcast.tsx';
import CampaignsView from './views/Campaigns.tsx';
import PointsView from './views/Points.tsx';
import RewardsView from './views/Rewards.tsx';
import AdminSettingsView from './views/AdminSettings.tsx';

const SidebarItem: React.FC<{ 
  to: string; 
  icon: React.ReactNode; 
  label: string; 
  active: boolean;
}> = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
      active 
        ? 'bg-line text-white shadow-md' 
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <div className={`shrink-0 ${active ? 'text-white' : 'group-hover:text-line'}`}>{icon}</div>
    <span className="font-medium hidden lg:block whitespace-nowrap overflow-hidden text-ellipsis">{label}</span>
    {active && <ChevronRight className="ml-auto w-4 h-4 hidden lg:block" />}
  </Link>
);

const AppContent: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <LayoutDashboard size={20} />, label: '營運概覽' },
    { to: '/friends', icon: <Users size={20} />, label: '好友管理' },
    { to: '/broadcast', icon: <Send size={20} />, label: '活動推播' },
    { to: '/campaigns', icon: <Trophy size={20} />, label: '抽獎活動' },
    { to: '/points', icon: <Coins size={20} />, label: '點數規則' },
    { to: '/rewards', icon: <Gift size={20} />, label: '贈品核銷' },
    { to: '/settings', icon: <Settings size={20} />, label: '系統設定' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <aside className="w-20 lg:w-64 transition-all duration-300 bg-white border-r border-slate-200 flex flex-col z-40 shrink-0 shadow-sm">
        <div className="p-4 lg:p-6 flex items-center gap-3 border-b border-slate-100 overflow-hidden">
          <div className="bg-line p-1.5 rounded-lg shrink-0 shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" className="w-6 h-6 invert brightness-0" alt="LINE" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800 whitespace-nowrap hidden lg:block">LINE CRM</h1>
        </div>

        <nav className="flex-1 px-3 lg:px-4 py-6 space-y-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {navItems.map((item) => (
            <SidebarItem
              key={item.to}
              {...item}
              active={location.pathname === item.to}
            />
          ))}
        </nav>

        <div className="p-3 lg:p-4 border-t border-slate-100">
          <button 
            onClick={() => confirm('確定要登出系統嗎？')}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut size={20} className="shrink-0" />
            <span className="font-medium hidden lg:block">安全登出</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
             <h2 className="text-lg font-bold text-slate-800">
                {navItems.find(i => i.to === location.pathname)?.label || '管理後台'}
             </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors cursor-pointer group">
              <Bell size={20} className="group-hover:text-line" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800 leading-none">管理員 小陳</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">超級管理員</p>
              </div>
              <img 
                src="https://picsum.photos/seed/admin/100" 
                className="w-10 h-10 rounded-full border-2 border-slate-100 object-cover shadow-sm" 
                alt="Profile" 
              />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50/50">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/friends" element={<FriendsView />} />
            <Route path="/broadcast" element={<BroadcastView />} />
            <Route path="/campaigns" element={<CampaignsView />} />
            <Route path="/points" element={<PointsView />} />
            <Route path="/rewards" element={<RewardsView />} />
            <Route path="/settings" element={<AdminSettingsView />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
