import { useCallback, useState, useRef } from 'react';
import NotificationAlert from 'components/NotificationAlert';

interface ToggleOptions {
  message: string;
  duration?: number;
  type: 'success' | 'error' | 'warning';
}

export function useNotificationAlert() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'warning'>('success');
  const [duration, setDuration] = useState(2000);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingRef = useRef(0);
  const startTimeRef = useRef(0);
  const isHoveredRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  const clearExitTimer = () => {
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
  };

  const startTimer = useCallback((ms: number) => {
    clearTimer();
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setExiting(true);
        exitTimerRef.current = setTimeout(() => {
          setVisible(false);
          setExiting(false);
        }, 500); // match CSS exit duration
      }
    }, ms);
  }, []);

  const toggle = useCallback(
    ({ message, duration = 2000, type }: ToggleOptions) => {
      setMessage(message);
      setType(type);
      setDuration(duration);
      setVisible(true);
      setExiting(false);
      startTimer(duration);
    },
    [startTimer],
  );

  const handleClose = useCallback(() => {
    clearTimer();
    setExiting(true);
    exitTimerRef.current = setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, 500); // match CSS exit duration
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    if (timerRef.current) {
      remainingRef.current = duration - (Date.now() - startTimeRef.current);
      clearTimer();
    }
    clearExitTimer();
  }, [duration]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    if (remainingRef.current > 0) {
      startTimer(remainingRef.current);
    }
  }, [startTimer]);

  const Notification = visible ? (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NotificationAlert
        message={message}
        onClose={handleClose}
        className={exiting ? 'notification-alert--exit' : ''}
        type={type}
      />
    </div>
  ) : null;

  return { Notification, toggle };
}
