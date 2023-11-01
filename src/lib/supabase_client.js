import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://bacbspijvbyyltqcnugx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhY2JzcGlqdmJ5eWx0cWNudWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNzM4OTUsImV4cCI6MjAxMzk0OTg5NX0.n3G78fmmoVhd4kRGu04ZqLiRAiHWqsSM1L8o0wWNXKg'
)
