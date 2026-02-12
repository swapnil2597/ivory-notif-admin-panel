import type { Notification } from '../types/notification';
import './NotificationTable.css';

interface Props {
  notifications: Notification[];
  onResend: (id: string) => void;
}

export const NotificationTable = ({
  notifications,
  onResend,
}: Props) => {
  return (
    <div className="table-container">
      <h2>Notifications</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {notifications.map((n) => (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.type}</td>
              <td>{n.title}</td>
              <td>
                <span
                  className={`status ${n.status}`}
                >
                  {n.status}
                </span>
              </td>
              <td>
                {new Date(
                  n.createdAt
                ).toLocaleString()}
              </td>
              <td>
                <button
                  onClick={() => onResend(n.id)}
                >
                  Resend
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
