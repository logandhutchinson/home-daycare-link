# Home Health and Adult Daycare EMR

# CareHub 🏥

**A unified, production-ready platform for Home Health agencies and Adult Daycare centers — built with AI-assisted product development.**

> Live Prototype → https://home-daycare-link.lovable.app

---

## What Is CareHub?

CareHub is a full-stack healthcare operations platform that combines two distinct service lines — **Home Health** and **Adult Daycare** — into a single, unified product. It was designed from the ground up for real operational workflows: scheduling that field staff can actually use, documentation that doesn't get in the way, and family-facing portals that build trust.

This project was built as a prototype to explore how modern AI-assisted development tools (Lovable + Claude) can accelerate product ideation and delivery in regulated, complex healthcare environments.

---

## Key Features

### Scheduling (Core)
- Drag-and-drop calendar with day/week/month views
- Mobile-first "My Schedule" for field staff with 1-tap accept/decline
- Conflict detection: double-booking, credential mismatch, overtime flags
- Open shift pickup with approval rules
- Smart staff matching by skills, proximity, and availability

### Home Health Workflows
- Referral intake → eligibility → care plan → visit scheduling
- EVV-style check-in/out with GPS timestamp
- Structured visit notes with supervisor review and lock
- ADL checklists, medication reminders, wound care tasks
- Family view-only portal with visit confirmations

### Adult Daycare Workflows
- Enrollment, consents, medical info, and attendance planning
- Daily kiosk-mode check-in/out with capacity tracking
- Activities scheduling with participant rosters and incident notes
- Transportation pickup/dropoff route management
- Meal tracking and family announcement portal

### Chat Assistant
- Context-aware: knows your role, current screen, and selected client
- Scheduling help: "find coverage for 3pm visit", "move Ms. Smith to next Tuesday"
- Documentation assist: draft visit notes, summarize prior notes
- Policy Q&A sourced from internal Knowledge Base (with citations)
- Action preview pattern: proposes → user approves → executes → audit logged

### Security & Compliance
- Role-Based Access Control (RBAC) with 9 defined roles
- Audit logging for all PHI-adjacent actions
- Field-level encryption for sensitive data
- Signed URLs for secure document access
- Security & Compliance admin screen with retention and export controls

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TypeScript + Tailwind CSS |
| Backend | Node/Express with versioned REST API (`/api/v1/`) |
| Database | PostgreSQL via Supabase |
| Auth | Email/password + optional MFA + JWT |
| Real-time | Supabase Realtime (schedule updates + chat notifications) |
| Storage | Supabase Storage with signed URLs |
| AI Assistant | Claude API (Anthropic) |

---

## Roles & Permissions

| Role | Description |
|---|---|
| Owner / Super Admin | Full system access, org config, security settings |
| Admin / Office Manager | User management, reports, all operational data |
| Scheduler / Dispatcher | Schedule CRUD, open shifts, conflict resolution |
| Nurse / Clinician | Patient records, visit notes, care plans |
| Caregiver / Aide | Own schedule, check-in/out, task checklists |
| Adult Daycare Staff | Attendance, activities, transportation |
| Billing / Payroll | Invoices, timecards, billing items |
| Family / Responsible Party | Read-only portal: visit summaries, attendance, announcements |
| QA / Compliance Reviewer | Audit logs, documentation review, incident reports |

Full permission matrix is viewable inside the app under **Settings → Roles**.

---

## Seed Data Included

- 2 locations
- 15 staff members across all roles
- 20 home health patients
- 25 adult daycare clients
- 2 weeks of schedules and attendance history
- Sample incidents and documentation
- Knowledge Base seeded with HIPAA basics, incident reporting protocols, shift swap rules, and documentation standards

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/logandhutchinson/carehub.git
cd carehub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Supabase URL, anon key, and Claude API key

# Run database migrations
npm run db:migrate

# Seed demo data
npm run db:seed

# Start development server
npm run dev
```

### Environment Variables

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ANTHROPIC_API_KEY=your_claude_api_key
JWT_SECRET=your_jwt_secret
```

---

## Project Structure

```
carehub/
├── src/
│   ├── components/       # Shared UI components
│   ├── modules/
│   │   ├── scheduling/   # Calendar, shifts, conflict engine
│   │   ├── homehealth/   # Intake, visits, notes, EVV
│   │   ├── daycare/      # Attendance, activities, transportation
│   │   ├── assistant/    # Chat assistant + knowledge base
│   │   ├── billing/      # Invoices, timecards
│   │   └── reports/      # Dashboards and utilization reports
│   ├── api/              # REST endpoints (/api/v1/)
│   ├── auth/             # RBAC, JWT, MFA
│   └── lib/              # Supabase client, utilities
├── supabase/
│   ├── migrations/       # DB schema migrations
│   └── seed.sql          # Demo seed data
└── docs/
    └── architecture.md   # System architecture overview
```

---

## Why I Built This

I built CareHub as a product prototype to explore three things simultaneously:

1. **AI-assisted development at speed** — using Lovable and Claude to compress a concept that would normally take months into a working prototype
2. **Applied AI in healthcare operations** — specifically how a context-aware assistant can reduce documentation burden and scheduling friction for field staff who are already stretched thin
3. **Personal context** — my wife and I own and operate [Young at Heart Adult Daycare & Home Health](https://youngatheartcare.com), so the workflows in this app reflect real operational pain I've watched up close

This sits at the intersection of my work as a Product Lead for AI/ML at Knowtion Health and 25+ years of product management across healthcare, autonomous vehicles, and IoT.

---

## About the Builder

**Logan Hutchinson** — Product Lead, AI/ML

- 🔗 GitHub: [github.com/logandhutchinson](https://github.com/logandhutchinson)
- 💼 Product Portfolio: [toptal.com/product-managers/resume/logan-hutchinson](https://www.toptal.com/product-managers/resume/logan-hutchinson)
- 🏥 Currently: Product Lead, AI/ML @ Knowtion Health — shipping AI products that reduce manual review time for healthcare appeals
- 🎓 Instructor: Applied AI & Product Management @ Techademy

---

## Roadmap (Post-Prototype)

- [ ] Full EVV compliance with state-specific validation rules
- [ ] Medicaid/Medicare billing integration
- [ ] Native iOS/Android apps with full offline mode
- [ ] Advanced scheduling AI: predictive staffing, churn risk, route optimization
- [ ] EHR integration layer (HL7/FHIR)
- [ ] Family mobile app with push notifications
