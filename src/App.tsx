import { useState } from 'react';
import { generateMockNotifications } from './data/mockData';
import type { Notification } from './types/notification';
import { NotificationTable } from './components/NotificationTable';
import { CreateNotificationForm } from './components/CreateNotificationForm';
import './styles.css';

function App() {
  const [notifications, setNotifications] =
    useState<Notification[]>(
      generateMockNotifications(100)
    );

  const handleResend = (id: string) => {
    alert(`Resend triggered for ID ${id}`);
  };

  const handleCreate = (
    type: Notification['type'],
    title: string,
    body: string
  ) => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      type,
      title,
      body,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    setNotifications((prev) => [
      newNotification,
      ...prev,
    ]);
  };

  return (
    <div className="app">
      <CreateNotificationForm
        onCreate={handleCreate}
      />

      <NotificationTable
        notifications={notifications}
        onResend={handleResend}
      />
    </div>
  );
}

export default App;
