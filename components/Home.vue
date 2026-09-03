<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
    <!-- Top Navigation Header -->
    <header class="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo & Brand -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <svg class="w-6 h-6 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span class="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Apex<span class="text-cyan-400">Trader</span>
            </span>
            <span class="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50">PRO v4.0</span>
          </div>
        </NuxtLink>

        <!-- Ticker Bar Preview -->
        <div class="hidden md:flex items-center gap-6 text-xs font-mono">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <span class="text-slate-400">BTC/USDT</span>
            <span class="text-emerald-400 font-semibold">$96,420.50</span>
            <span class="text-emerald-400/90 text-[10px] bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/50">+4.25%</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <span class="text-slate-400">ETH/USDT</span>
            <span class="text-emerald-400 font-semibold">$3,480.12</span>
            <span class="text-emerald-400/90 text-[10px] bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/50">+2.18%</span>
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <span class="text-slate-400">SOL/USDT</span>
            <span class="text-rose-400 font-semibold">$214.75</span>
            <span class="text-rose-400/90 text-[10px] bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-800/50">-1.12%</span>
          </div>
        </div>

        <!-- Right User Auth Actions using BaseButton -->
        <div class="flex items-center gap-3">
          <NuxtLink to="/signin">
            <BaseButton variant="ghost" size="sm">
              Sign In
            </BaseButton>
          </NuxtLink>

          <NuxtLink to="/signup">
            <BaseButton variant="primary" size="sm">
              Get Started
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- Welcome Hero Banner -->
      <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <!-- Glow accents -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Real-time Algorithmic Engine Active
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Next-Gen Trading & <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio Intelligence</span>
            </h1>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              Track live positions, execute sub-millisecond orders, and manage digital asset portfolios with institutional precision.
            </p>
          </div>

          <!-- Quick Navigation Actions -->
          <div class="flex flex-wrap items-center gap-3">
            <NuxtLink to="/signup">
              <BaseButton variant="primary" size="lg">
                <template #iconLeft>
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </template>
                Open Free Account
              </BaseButton>
            </NuxtLink>

            <NuxtLink to="/signin">
              <BaseButton variant="secondary" size="lg">
                Sign In to Platform
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Key Metrics Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Metric Card 1 -->
        <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all group relative overflow-hidden">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Total Portfolio Value</span>
            <span class="p-1 rounded bg-slate-800 text-cyan-400">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <div class="text-2xl font-bold text-white font-mono tracking-tight">$124,580.00</div>
          <div class="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>+$13,760.50 (24h)</span>
          </div>
        </div>

        <!-- Metric Card 2 -->
        <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all group relative overflow-hidden">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>24h Realized Profit</span>
            <span class="p-1 rounded bg-slate-800 text-emerald-400">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
          </div>
          <div class="text-2xl font-bold text-emerald-400 font-mono tracking-tight">+$4,230.80</div>
          <div class="mt-2 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span>Win Rate: <strong class="text-white">82.4%</strong></span>
          </div>
        </div>

        <!-- Metric Card 3 -->
        <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all group relative overflow-hidden">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Active Positions</span>
            <span class="p-1 rounded bg-slate-800 text-cyan-400">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
          </div>
          <div class="text-2xl font-bold text-white font-mono tracking-tight">6 Open</div>
          <div class="mt-2 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
            <span>Margin used: <strong class="text-slate-300">34.2%</strong></span>
          </div>
        </div>

        <!-- Metric Card 4 -->
        <div class="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all group relative overflow-hidden">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Available Margin</span>
            <span class="p-1 rounded bg-slate-800 text-purple-400">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div class="text-2xl font-bold text-white font-mono tracking-tight">$81,950.00</div>
          <div class="mt-2 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span>Max Leverage: <strong class="text-cyan-400">50x</strong></span>
          </div>
        </div>
      </div>

      <!-- Main Trading Grid: Chart & Order Form -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Interactive Chart Visualizer (2 Cols) -->
        <div class="lg:col-span-2 rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs">
                ₿
              </div>
              <div>
                <h3 class="font-bold text-white text-base">BTC / USDT - Bitcoin Perpetual</h3>
                <p class="text-xs text-slate-400">24h Vol: <span class="text-slate-200 font-mono">$1.42B</span></p>
              </div>
            </div>

            <!-- Timeframe selector -->
            <div class="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button @click="timeframe = '15m'" :class="timeframe === '15m' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'" class="px-2.5 py-1 rounded transition-colors">15m</button>
              <button @click="timeframe = '1h'" :class="timeframe === '1h' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'" class="px-2.5 py-1 rounded transition-colors">1h</button>
              <button @click="timeframe = '4h'" :class="timeframe === '4h' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'" class="px-2.5 py-1 rounded transition-colors">4h</button>
              <button @click="timeframe = '1D'" :class="timeframe === '1D' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'" class="px-2.5 py-1 rounded transition-colors">1D</button>
            </div>
          </div>

          <!-- SVG Simulated Candlestick / Area Chart -->
          <div class="relative h-64 w-full flex items-end justify-between px-2 pt-4">
            <!-- Background Grid lines -->
            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div class="border-b border-slate-600 border-dashed w-full"></div>
              <div class="border-b border-slate-600 border-dashed w-full"></div>
              <div class="border-b border-slate-600 border-dashed w-full"></div>
              <div class="border-b border-slate-600 border-dashed w-full"></div>
            </div>

            <!-- Area Gradient path preview -->
            <svg class="absolute inset-0 w-full h-full text-cyan-500/20" preserveAspectRatio="none" viewBox="0 0 500 150">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,130 Q50,110 100,120 T200,80 T300,90 T400,40 T500,20 L500,150 L0,150 Z" fill="url(#chartGradient)" />
              <path d="M0,130 Q50,110 100,120 T200,80 T300,90 T400,40 T500,20" fill="none" stroke="#06b6d4" stroke-width="3" />
            </svg>

            <!-- Dynamic price indicator line -->
            <div class="absolute top-[20%] right-0 left-0 border-t border-cyan-400/50 border-dashed flex justify-end">
              <span class="bg-cyan-500 text-slate-950 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-l shadow">
                $96,420.50
              </span>
            </div>
          </div>

          <!-- Bottom Market Summary -->
          <div class="grid grid-cols-3 gap-4 border-t border-slate-800 pt-4 text-xs font-mono">
            <div>
              <span class="text-slate-400 block mb-1">High (24h)</span>
              <span class="text-emerald-400 font-semibold">$97,850.00</span>
            </div>
            <div>
              <span class="text-slate-400 block mb-1">Low (24h)</span>
              <span class="text-rose-400 font-semibold">$92,110.00</span>
            </div>
            <div>
              <span class="text-slate-400 block mb-1">Funding Rate</span>
              <span class="text-cyan-400 font-semibold">+0.0125%</span>
            </div>
          </div>
        </div>

        <!-- Quick Execution Trading Panel (1 Col) -->
        <div class="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-6 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 class="font-bold text-white text-sm">Quick Execution</h3>
              <span class="text-xs text-slate-400 font-mono">Spot / Futures</span>
            </div>

            <!-- Order type selector -->
            <div class="grid grid-cols-2 gap-2 mb-4 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-semibold">
              <button @click="orderType = 'buy'" :class="orderType === 'buy' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'" class="py-2 rounded-lg transition-colors">
                BUY / LONG
              </button>
              <button @click="orderType = 'sell'" :class="orderType === 'sell' ? 'bg-rose-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'" class="py-2 rounded-lg transition-colors">
                SELL / SHORT
              </button>
            </div>

            <!-- Price & Amount Input -->
            <div class="space-y-4 text-xs font-mono">
              <div>
                <label class="text-slate-400 block mb-1">Order Price (USDT)</label>
                <div class="relative">
                  <input type="text" value="96420.50" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-500 transition-colors" />
                  <span class="absolute right-3 top-2 text-slate-500 text-[10px]">MARKET</span>
                </div>
              </div>

              <div>
                <label class="text-slate-400 block mb-1">Amount (BTC)</label>
                <div class="relative">
                  <input type="text" placeholder="0.25" class="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white font-semibold focus:outline-none focus:border-cyan-500 transition-colors" />
                  <span class="absolute right-3 top-2 text-slate-500 text-[10px]">BTC</span>
                </div>
              </div>

              <!-- Leverage Slider -->
              <div>
                <div class="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>Leverage</span>
                  <span class="text-cyan-400 font-bold">10x</span>
                </div>
                <div class="grid grid-cols-4 gap-1.5 font-mono text-[10px] text-center">
                  <span class="py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500 cursor-pointer">2x</span>
                  <span class="py-1 rounded bg-cyan-950 border border-cyan-700 text-cyan-400 font-bold cursor-pointer">10x</span>
                  <span class="py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500 cursor-pointer">25x</span>
                  <span class="py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500 cursor-pointer">50x</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Order Button using BaseButton -->
          <BaseButton 
            :variant="orderType === 'buy' ? 'primary' : 'danger'" 
            size="lg" 
            :full-width="true"
          >
            {{ orderType === 'buy' ? 'EXECUTE LONG (BUY)' : 'EXECUTE SHORT (SELL)' }}
          </BaseButton>
        </div>
      </div>

      <!-- Watchlist & Market Pairs Table -->
      <div class="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-xl">
        <div class="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 class="font-bold text-white text-base">Top Trading Pairs</h3>
          <span class="text-xs text-slate-400 font-mono">Live Streaming Data</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-mono">
            <thead class="bg-slate-950/60 text-slate-400 border-b border-slate-800">
              <tr>
                <th class="py-3 px-6">Pair</th>
                <th class="py-3 px-6">Last Price</th>
                <th class="py-3 px-6">24h Change</th>
                <th class="py-3 px-6">24h High</th>
                <th class="py-3 px-6">24h Volume</th>
                <th class="py-3 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 text-slate-200">
              <tr v-for="pair in pairs" :key="pair.name" class="hover:bg-slate-800/30 transition-colors">
                <td class="py-4 px-6 flex items-center gap-3 font-sans font-semibold text-white">
                  <span class="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
                    {{ pair.name.substring(0, 1) }}
                  </span>
                  {{ pair.name }}
                </td>
                <td class="py-4 px-6 font-semibold">${{ pair.price }}</td>
                <td class="py-4 px-6">
                  <span :class="pair.positive ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50' : 'text-rose-400 bg-rose-950/60 border-rose-800/50'" class="px-2 py-0.5 rounded border text-[11px] font-bold">
                    {{ pair.change }}
                  </span>
                </td>
                <td class="py-4 px-6 text-slate-400">${{ pair.high }}</td>
                <td class="py-4 px-6 text-slate-400">${{ pair.volume }}</td>
                <td class="py-4 px-6 text-right font-sans">
                  <BaseButton variant="outline" size="sm">
                    Trade
                  </BaseButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const timeframe = ref('1h')
const orderType = ref('buy')

const pairs = [
  { name: 'BTC/USDT', price: '96,420.50', change: '+4.25%', high: '97,850.00', volume: '1.42B', positive: true },
  { name: 'ETH/USDT', price: '3,480.12', change: '+2.18%', high: '3,540.00', volume: '840M', positive: true },
  { name: 'SOL/USDT', price: '214.75', change: '-1.12%', high: '221.00', volume: '512M', positive: false },
  { name: 'AVAX/USDT', price: '42.30', change: '+6.45%', high: '43.80', volume: '190M', positive: true },
  { name: 'LINK/USDT', price: '18.90', change: '-0.85%', high: '19.40', volume: '120M', positive: false }
]
</script>
