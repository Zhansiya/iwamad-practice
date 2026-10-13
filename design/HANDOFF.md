# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype): Posts → Post → Back to Posts

Components → React files:
PostCard → PostCard.tsx
Button → Button.tsx
Tag → Tag.tsx

Button variants → prop:
variant = primary | secondary

PostCard layout:
direction = vertical
gap = 12px
padding = 16px
radius = 8px

Typography:
Post title = 20px, Regular
Post date = 14px, Regular

Breakpoint change:
phone = 1 column, stacked header
desktop = 3 columns, header in one row

Tokens (all ten):
color/primary = #1D4ED8
color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF
color/surface = #FFFFFF
color/border = #D1D5DB
space/2 = 8px
space/4 = 16px
space/6 = 24px
radius/md = 8px