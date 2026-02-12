import { useState } from 'react';
import type { NotificationType } from '../types/notification';
import './CreateNotificationForm.css';

interface Props {
  onCreate: (
    type: NotificationType,
    title: string,
    body: string
  ) => void;
}

export const CreateNotificationForm = ({
  onCreate,
}: Props) => {
  const [type, setType] =
    useState<NotificationType>('transactional');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    onCreate(type, title, body);
    setTitle('');
    setBody('');
  };

  return (
    <div className="form-card">
      <h2>Create Notification</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type</label>
          <select
            value={type}
            onChange={(e) =>
              setType(
                e.target.value as NotificationType
              )
            }
          >
            <option value="transactional">
              Transactional
            </option>
            <option value="marketing">
              Marketing
            </option>
            <option value="alert">
              Alert
            </option>
            <option value="reminder">
              Reminder
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter notification title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Body</label>
          <textarea
            placeholder="Enter notification content"
            value={body}
            onChange={(e) =>
              setBody(e.target.value)
            }
            rows={4}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">
            Create Notification
          </button>
        </div>
      </form>
    </div>
  );
};
