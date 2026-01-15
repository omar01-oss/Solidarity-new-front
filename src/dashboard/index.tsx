// Main Dashboard Component
export { default as DashboardPage } from './DashboardPage';

// Types
export * from './types';

// Redux Slice
export * from './features/dashboardSlice';
export { default as dashboardReducer } from './features/dashboardSlice';

// Custom Hooks
export {
  useDashboard,
  useMoodTracking,
  useAppointments,
  useTherapyProgress,
} from './hooks/useDashboard';

// UI Components
export { default as Card } from './components/ui/Card';
export { default as Button } from './components/ui/Button';

// Layout Components
export { default as Sidebar } from './components/layout/Sidebar';
export { default as Header } from './components/layout/Header';

// Widget Components
export { default as MoodStatsWidget } from './components/widgets/MoodStatsWidget';
export { default as AppointmentsWidget } from './components/widgets/AppointmentsWidget';
export { default as TherapyProgressWidget } from './components/widgets/TherapyProgressWidget';
export { default as CommunityWidget } from './components/widgets/CommunityWidget';
export { default as StatsWidget } from './components/widgets/StatsWidget';

// Table Components
export { default as UsersTable } from './components/widgets/UsersTable';