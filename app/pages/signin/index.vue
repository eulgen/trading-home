<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden font-sans">
    <!-- Ambient Background Blur Elements -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Fine grid pattern overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

    <div class="w-full max-w-md relative z-10 my-8">
      
      <!-- Top Brand Header -->
      <div class="text-center mb-8 space-y-2">
        <NuxtLink to="/" class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/25 mb-3 transition-transform hover:scale-105">
          <svg class="w-7 h-7 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </NuxtLink>
        <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Sign in to <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ApexTrader</span>
        </h1>
        <p class="text-slate-400 text-xs sm:text-sm">
          Enter your credentials to access your trading workspace
        </p>
      </div>

      <!-- Auth Card Container -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        
        <!-- Social Sign-in Buttons -->
        <div class="grid grid-cols-2 gap-3">
          <BaseButton variant="secondary" size="md">
            <template #iconLeft>
              <svg class="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z"/>
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
              </svg>
            </template>
            Google
          </BaseButton>

          <BaseButton variant="secondary" size="md">
            <template #iconLeft>
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </template>
            GitHub
          </BaseButton>
        </div>

        <!-- Separator -->
        <div class="relative flex items-center justify-center">
          <div class="border-t border-slate-800 w-full"></div>
          <span class="bg-slate-900 px-3 text-[11px] font-mono text-slate-500 uppercase tracking-wider relative z-10">Or sign in with email</span>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSignIn" class="space-y-4">
          
          <!-- Email Input -->
          <div class="space-y-1.5">
            <label for="signin-email" class="block text-xs font-semibold text-slate-300">
              Email Address
            </label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              <input 
                id="signin-email" 
                v-model="email" 
                type="email" 
                required 
                placeholder="name@company.com" 
                class="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <label for="signin-password" class="block text-xs font-semibold text-slate-300">
                Password
              </label>
              <a href="#" class="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Forgot password?
              </a>
            </div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input 
                id="signin-password" 
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                required 
                placeholder="••••••••••••" 
                class="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
              />
              <button 
                type="button" 
                @click="toggleShowPassword" 
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors">
                <svg v-if="!showPassword" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.682-.693c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.088-3.036a3 3 0 10-4.243-4.243m4.243 4.243L3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember me checkbox -->
          <div class="flex items-center">
            <input 
              id="remember" 
              v-model="rememberMe" 
              type="checkbox" 
              class="w-4 h-4 rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900 accent-cyan-500 cursor-pointer"
            />
            <label for="remember" class="ml-2 block text-xs text-slate-400 cursor-pointer">
              Remember this device for 30 days
            </label>
          </div>

          <!-- Error message if any -->
          <div v-if="error" class="p-2.5 rounded-lg bg-rose-950/80 border border-rose-800/80 text-rose-300 text-xs">
            {{ error }}
          </div>

          <!-- Submit Button using BaseButton -->
          <BaseButton 
            type="submit" 
            variant="primary" 
            size="lg" 
            :full-width="true" 
            :loading="isLoading" 
            :disabled="!isFormValid"
          >
            {{ isLoading ? 'Authenticating...' : 'Sign In to Workspace' }}
          </BaseButton>
        </form>

        <!-- Footer Sign-up link -->
        <div class="text-center text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          Don't have an account? 
          <NuxtLink to="/signup" class="text-cyan-400 font-semibold hover:underline">Create an account</NuxtLink>
        </div>
      </div>

      <!-- Security / Encryption Note -->
      <div class="mt-6 text-center flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
        <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>256-bit SSL Encrypted • Biometric 2FA Support</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useSignIn } from '../../../composables/useSignIn'

useHead({
  title: 'Sign In - ApexTrader'
})

const {
  email,
  password,
  rememberMe,
  showPassword,
  isLoading,
  error,
  isFormValid,
  toggleShowPassword,
  handleSignIn
} = useSignIn()
</script>