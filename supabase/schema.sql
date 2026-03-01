create table if not exists public.app_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.app_snapshots (
  state_id text not null,
  snapshot_date date not null,
  state jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (state_id, snapshot_date)
);
