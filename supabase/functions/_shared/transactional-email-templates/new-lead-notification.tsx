import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Wood Insurance Agency'
const OWNER_EMAIL = 'cindy@woodinsuranceagency.net'

interface NewLeadProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  service?: string
  notes?: string
  source?: string
  submittedAt?: string
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  ) : null

const NewLeadNotificationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  notes,
  source,
  submittedAt,
}: NewLeadProps) => {
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim()
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        New quote request{fullName ? ` from ${fullName}` : ''}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={brandBar}>
            <Text style={brandText}>{SITE_NAME}</Text>
          </Section>
          <Heading style={h1}>New quote request</Heading>
          <Text style={intro}>
            You just received a new submission from the website
            {source ? ` (${source})` : ''}.
          </Text>

          <Section style={card}>
            <Row label="Name" value={fullName || undefined} />
            <Row label="Email" value={email} />
            <Row label="Phone" value={phone} />
            <Row label="Service" value={service} />
            <Row label="Notes" value={notes} />
            <Row label="Submitted" value={submittedAt} />
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            This message was sent to {OWNER_EMAIL} from your website contact
            forms.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: NewLeadNotificationEmail,
  subject: (data: Record<string, any>) => {
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ').trim()
    return name
      ? `New quote request from ${name}`
      : 'New quote request from your website'
  },
  to: OWNER_EMAIL,
  displayName: 'New lead notification',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '(601) 555-0142',
    service: 'Medicare',
    notes: 'Looking to compare Medicare Supplement plans for my mother.',
    source: 'Contact page',
    submittedAt: 'May 1, 2026 10:24 AM',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  margin: 0,
  padding: 0,
}
const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '24px 24px 40px',
}
const brandBar = {
  backgroundColor: '#1740C2',
  borderRadius: '10px',
  padding: '14px 18px',
  marginBottom: '24px',
}
const brandText = {
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 'bold',
  letterSpacing: '0.4px',
  margin: 0,
}
const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0F172A',
  margin: '0 0 12px',
}
const intro = {
  fontSize: '15px',
  color: '#475569',
  lineHeight: '1.6',
  margin: '0 0 22px',
}
const card = {
  backgroundColor: '#F8FAFC',
  border: '1px solid #E2E8F0',
  borderRadius: '10px',
  padding: '8px 18px',
}
const row = {
  borderBottom: '1px solid #E2E8F0',
  padding: '12px 0',
}
const rowLabel = {
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.6px',
  color: '#64748B',
  margin: '0 0 4px',
  fontWeight: 'bold' as const,
}
const rowValue = {
  fontSize: '15px',
  color: '#0F172A',
  margin: 0,
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap' as const,
}
const hr = {
  borderColor: '#E2E8F0',
  margin: '28px 0 16px',
}
const footer = {
  fontSize: '12px',
  color: '#94A3B8',
  margin: 0,
  lineHeight: '1.5',
}