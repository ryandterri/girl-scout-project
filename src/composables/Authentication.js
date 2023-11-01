import { computed, ref } from 'vue'
import { supabase } from '@/lib/supabase_client'

const user = ref(null)
const is_authenticated = computed(() => {
  return !!user.value;
})

supabase.auth.onAuthStateChange((event, session) => {
  switch (event) {
    case 'SIGNED_IN':
      user.value = session.user
      break
    case 'SIGNED_OUT':
      user.value = null
      break
  }
})

export default () => {
  return {
    user,
    is_authenticated
  }
}