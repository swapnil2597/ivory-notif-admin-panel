export type NotificationType =
  | 'transactional'
  | 'marketing'
  | 'alert'
  | 'reminder';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  createdAt: string;
  status: 'sent' | 'failed' | 'pending';
}
