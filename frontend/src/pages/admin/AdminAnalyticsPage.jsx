import React, { useState } from 'react';
import { BarChart3, ExternalLink, Activity, Eye, MousePointer, ShieldCheck, CheckCircle2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { studioStore } from '../../data/store';

export default function AdminAnalyticsPage() {
  const analytics = studioStore.analytics;

  return (
    <AdminLayout activeTab="analytics">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
            Analytics &amp; Behavioral Telemetry
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#6B7280' }}>
            Google Analytics 4 &amp; Microsoft Clarity integration overview as specified in TSD/BAS v2.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ borderRadius: '4px', padding: '0.65rem 1.15rem', fontSize: '0.78rem', borderColor: '#D1D5DB' }}
          >
            <span>Launch GA4 Console</span>
            <ExternalLink size={13} />
          </a>
          <a
            href="https://clarity.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ borderRadius: '4px', padding: '0.65rem 1.15rem', fontSize: '0.78rem', borderColor: '#D1D5DB' }}
          >
            <span>Launch Clarity Heatmaps</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Integration Overview Cards */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        {/* Google Analytics 4 Card */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart3 size={20} color="#EA580C" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111827' }}>
                Google Analytics 4
              </h3>
            </div>
            <span style={{ fontSize: '0.72rem', backgroundColor: '#ECFDF5', color: '#065F46', padding: '0.25rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>
              CONFIGURED &bull; ACTIVE
            </span>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '1.25rem' }}>
            Measurement ID: <code>{analytics.ga4Stats.measurementId}</code> (Initialized via tag runner)
          </p>

          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4B5563', marginBottom: '0.75rem', fontWeight: 600 }}>
            Tracked Custom Events
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {analytics.ga4Stats.events.map((evt, idx) => (
              <div key={idx} style={{ backgroundColor: '#F9FAFB', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between' }}>
                <code style={{ fontSize: '0.75rem', color: '#111827' }}>{evt.name}</code>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4F46E5' }}>{evt.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Microsoft Clarity Card */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MousePointer size={20} color="#2563EB" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111827' }}>
                Microsoft Clarity
              </h3>
            </div>
            <span style={{ fontSize: '0.72rem', backgroundColor: '#ECFDF5', color: '#065F46', padding: '0.25rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>
              HEATMAPS READY
            </span>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#6B7280', marginBottom: '1.25rem' }}>
            Project Identifier: <code>{analytics.clarityStats.clarityProjectId}</code> (No private credentials exposed)
          </p>

          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4B5563', marginBottom: '0.75rem', fontWeight: 600 }}>
            Session Behavior Metrics
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            <div style={{ backgroundColor: '#F9FAFB', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #E5E7EB' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', color: '#6B7280' }}>Recordings Logged</span>
              <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{analytics.clarityStats.recordingsCount.toLocaleString()}</strong>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #E5E7EB' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', color: '#6B7280' }}>Avg Scroll Depth</span>
              <strong style={{ fontSize: '0.9rem', color: '#059669' }}>{analytics.clarityStats.scrollDepthAvg}</strong>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #E5E7EB' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', color: '#6B7280' }}>Dead Click Friction</span>
              <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{analytics.clarityStats.deadClicksPct}</strong>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #E5E7EB' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', color: '#6B7280' }}>Rage Click Friction</span>
              <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{analytics.clarityStats.rageClicksPct}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Top Pages Traffic Table */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}>
            Top Traffic Pages &amp; Monograph Views
          </h3>
          <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
            Ranked by total pageview engagement over the last 30 days
          </span>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '0.85rem 1.5rem' }}>Route Path</th>
              <th style={{ padding: '0.85rem 1rem' }}>Page Description</th>
              <th style={{ padding: '0.85rem 1.5rem', textAlign: 'right' }}>Total Views</th>
            </tr>
          </thead>
          <tbody>
            {analytics.topPages.map((page, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <code style={{ color: '#4F46E5', fontWeight: 600 }}>{page.path}</code>
                </td>
                <td style={{ padding: '1rem', color: '#374151' }}>
                  {page.title}
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right', fontWeight: 600, color: '#111827' }}>
                  {page.views.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
