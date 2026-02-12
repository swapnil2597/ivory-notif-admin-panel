import type { Notification } from "../types/notification";

const types: Notification['type'][] = [
  'transactional',
  'marketing',
  'alert',
  'reminder',
];

const statuses: Notification['status'][] = [
  'sent',
  'failed',
  'pending',
];

export const generateMockNotifications = (
  count: number = 20
): Notification[] => {
  return Array.from({ length: count }).map(
    (_, i) => ({
      id: `${i + 1}`,
      type:
        types[
          Math.floor(Math.random() * types.length)
        ],
      title: `Notification ${i + 1}`,
      body: `This is the content of notification ${
        i + 1
      }`,
      createdAt: new Date(
        Date.now() - Math.random() * 100000000
      ).toISOString(),
      status:
        statuses[
          Math.floor(Math.random() * statuses.length)
        ],
    })
  );
};
