
export enum AdminRole {
  SUPER_ADMIN = 'Super Admin',
  MARKETING_ADMIN = 'Marketing Admin',
  STORE_STAFF = 'Store Staff'
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  lastLogin: string;
}

export interface LineFriend {
  id: string;
  displayName: string;
  avatar: string;
  source: 'Activity Page' | 'QR Code' | 'Store';
  tags: string[];
  points: number;
  status: 'Active' | 'Blocked';
  createdAt: string;
}

export interface BroadcastActivity {
  id: string;
  title: string;
  type: 'Text' | 'Image' | 'Rich Menu';
  targetCount: number;
  sentCount: number;
  status: 'Draft' | 'Scheduled' | 'Sent';
  scheduledAt: string;
}

export interface LuckyDraw {
  id: string;
  name: string;
  type: 'Spend' | 'Check-in' | 'Share';
  startDate: string;
  endDate: string;
  status: 'Active' | 'Ended';
  prizes: Prize[];
}

export interface Prize {
  id: string;
  name: string;
  quantity: number;
  remaining: number;
  probability: number;
  imageUrl: string;
}

export interface Reward {
  id: string;
  name: string;
  pointsCost: number;
  stock: number;
  imageUrl: string;
  redemptionCount: number;
}
