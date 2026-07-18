"use client";

import { useEffect, useState } from "react";

const storageKey = "framkant-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setVisible(window.localStorage.getItem(storageKey) == null);
    }, 0);
  }, []);

  function saveConsent(nextAnalytics: boolean, nextMarketing: boolean) {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        necessary: true,
        analytics: nextAnalytics,
        marketing: nextMarketing,
        savedAt: new Date().toISOString(),
      }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-consent" aria-label="Cookie consent">
      <div>
        <h2>Cookie Preferences</h2>
        <p>
          Necessary cookies keep the site working. Analytics and marketing cookies are
          optional and will only be used after consent.
        </p>
        <div className="cookie-options">
          <label>
            <input checked disabled type="checkbox" />
            <span>Necessary</span>
          </label>
          <label>
            <input
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
              type="checkbox"
            />
            <span>Analytics</span>
          </label>
          <label>
            <input
              checked={marketing}
              onChange={(event) => setMarketing(event.target.checked)}
              type="checkbox"
            />
            <span>Marketing</span>
          </label>
        </div>
      </div>
      <div className="cookie-actions">
        <button className="button secondary" onClick={() => saveConsent(false, false)} type="button">
          Necessary Only
        </button>
        <button
          className="button primary"
          onClick={() => saveConsent(analytics, marketing)}
          type="button"
        >
          Save Preferences
        </button>
      </div>
    </aside>
  );
}
