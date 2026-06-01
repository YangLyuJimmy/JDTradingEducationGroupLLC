import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChartCandlestick,
  CircleDollarSign,
  ShieldCheck,
  Users,
} from 'lucide-react'

const DISCORD_LINK = 'https://discord.gg/N8nD3HTRB2'
const YOUTUBE_LINK = 'https://www.youtube.com/@DayTrade-x6l'
const LOGO_SRC = '/community-logo.png'

const tradingTargets = [
  { symbol: 'SPX/SPY', accent: 'text-emerald-300', glow: 'shadow-emerald-500/20' },
  { symbol: 'QQQ', accent: 'text-cyan-300', glow: 'shadow-cyan-500/20' },
  { symbol: 'NVDA', accent: 'text-violet-300', glow: 'shadow-violet-500/20' },
  { symbol: 'TSLA', accent: 'text-rose-300', glow: 'shadow-rose-500/20' },
]

const stats = [
  { label: '0DTE 期权', value: '专注' },
  { label: '早盘交易', value: '90 min' },
  { label: 'Pine Script', value: '自研' },
  { label: '风险优先', value: 'Risk-First' },
]

const corePillars = [
  {
    title: '盘前计划',
    desc: '提前梳理盘前分析框架，明确关键观察位与假设条件，培养计划化思考习惯。',
    icon: ChartCandlestick,
    color: 'emerald',
  },
  {
    title: '点位精确',
    desc: '围绕结构、成交量与波动节奏理解市场，建立有据可依的分析与风控意识。',
    icon: BarChart3,
    color: 'cyan',
  },
  {
    title: '仓位管理',
    desc: '讲解账户风险预算与仓位原则，强调风险优先的学习路径。',
    icon: BriefcaseBusiness,
    color: 'violet',
  },
]

const features = [
  {
    title: '实盘直播与逻辑拆解',
    desc: '通过实盘直播演示分析过程，逐步讲解逻辑框架、风险边界与复盘思路，帮助学员建立独立思考能力。',
    icon: CircleDollarSign,
    color: 'emerald',
  },
  {
    title: '独家 Pine Script 交易指标库',
    desc: '沉淀教学与实践验证过的指标组件，辅助理解趋势延续、反转与关键流动性区域。',
    icon: ShieldCheck,
    color: 'cyan',
  },
  {
    title: '从零到一的交易系统教学',
    desc: '从框架搭建到执行复盘，帮助你形成可复制、可迭代的个人交易系统。',
    icon: Users,
    color: 'violet',
  },
]

const founders = [
  {
    name: 'Jimmy',
    role: '核心导师',
    accent: 'emerald',
    initial: 'J',
    desc: '聚焦盘前结构梳理与早盘分析演示，强调"计划先行 + 纪律优先"，通过数据回测与复盘提升方法论稳定性。',
  },
  {
    name: 'DT',
    role: '核心导师',
    accent: 'cyan',
    initial: 'D',
    desc: '擅长交易逻辑系统化与指标工程化，持续开发 Pine Script 自研工具，配合严格风险管理打造可复制方法。',
  },
]

const accentMap = {
  emerald: {
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    icon: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
    ring: 'ring-emerald-400/30',
    avatar: 'from-emerald-500 to-emerald-700',
    hover: 'hover:border-emerald-500/40',
  },
  cyan: {
    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    icon: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400',
    ring: 'ring-cyan-400/30',
    avatar: 'from-cyan-500 to-cyan-700',
    hover: 'hover:border-cyan-500/40',
  },
  violet: {
    badge: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
    icon: 'border-violet-500/20 bg-violet-500/10 text-violet-400',
    ring: 'ring-violet-400/30',
    avatar: 'from-violet-500 to-violet-700',
    hover: 'hover:border-violet-500/40',
  },
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19.54 5.39a17.4 17.4 0 0 0-4.27-1.36l-.2.4a15.6 15.6 0 0 1 3.75 1.8 12.2 12.2 0 0 0-3.54-1.4 17.1 17.1 0 0 0-6.56 0 12.2 12.2 0 0 0-3.54 1.4 15.6 15.6 0 0 1 3.75-1.8l-.2-.4A17.4 17.4 0 0 0 4.46 5.4C1.83 9.35 1.13 13.2 1.48 17a17.5 17.5 0 0 0 5.24 2.62l1.13-1.85c-.64-.22-1.26-.5-1.84-.84.15.11.31.21.46.3 2.87 1.53 5.97 1.53 8.82 0 .15-.09.31-.19.46-.3-.58.34-1.2.62-1.84.84l1.13 1.85A17.5 17.5 0 0 0 22.52 17c.41-4.37-.7-8.19-2.98-11.61ZM8.66 14.64c-.95 0-1.72-.88-1.72-1.97s.77-1.97 1.72-1.97 1.74.88 1.72 1.97c0 1.09-.77 1.97-1.72 1.97Zm6.68 0c-.95 0-1.72-.88-1.72-1.97s.77-1.97 1.72-1.97 1.74.88 1.72 1.97c0 1.09-.77 1.97-1.72 1.97Z"
        fill="currentColor"
      />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M22 12.2c0 2.1-.24 4.2-.24 4.2s-.23 1.44-.94 2.07c-.9.84-1.9.84-2.36.9-3.3.24-8.26.24-8.26.24s-6.12-.05-8.01-.23c-.52-.1-1.68-.07-2.58-.9C.9 17.85.67 16.4.67 16.4S.43 14.3.43 12.2.67 8 .67 8s.23-1.44.94-2.07C2.5 5.1 3.5 5.1 3.96 5.05 7.26 4.8 12.2 4.8 12.2 4.8h.02s4.94 0 8.24.24c.47.05 1.47.05 2.36.88.71.64.94 2.08.94 2.08S22 10.1 22 12.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]"
    >
      {children}
    </a>
  )
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium tracking-widest text-slate-400 uppercase">
          {eyebrow}
        </p>
      )}
      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h3>
      {desc && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">{desc}</p>}
    </div>
  )
}

function IconBox({ icon: Icon, color }) {
  const styles = accentMap[color]
  return (
    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${styles.icon}`}>
      <Icon className="h-5 w-5" />
    </div>
  )
}

function CandlestickDecor() {
  const bars = [
    { x: '8%', h: 40, color: 'bg-emerald-500/30', delay: '0s' },
    { x: '18%', h: 65, color: 'bg-emerald-500/20', delay: '0.5s' },
    { x: '28%', h: 30, color: 'bg-red-500/25', delay: '1s' },
    { x: '75%', h: 55, color: 'bg-emerald-500/25', delay: '0.3s' },
    { x: '85%', h: 35, color: 'bg-red-500/20', delay: '0.8s' },
    { x: '92%', h: 70, color: 'bg-emerald-500/20', delay: '1.2s' },
  ]
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`absolute bottom-0 w-1 rounded-t-sm ${bar.color}`}
          style={{ left: bar.x, height: bar.h, animationDelay: bar.delay }}
        />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed inset-0 bg-noise" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent),radial-gradient(ellipse_60%_50%_at_90%_20%,rgba(14,165,233,0.10),transparent),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(139,92,246,0.08),transparent)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Nav */}
        <nav className="sticky top-0 z-30 mt-4 flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 blur-sm" />
              <img
                src={LOGO_SRC}
                alt="美股日内实战室 Logo"
                className="relative h-11 w-11 rounded-full border border-slate-600/80 object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-widest text-slate-500 uppercase">
                JD Trading Education Group
              </p>
              <h1 className="text-base font-bold tracking-wide text-white sm:text-lg">美股日内实战室</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SocialLink href={YOUTUBE_LINK} label="YouTube">
              <YouTubeIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={DISCORD_LINK} label="Discord">
              <DiscordIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </nav>

        <main className="pb-32 pt-8 sm:pt-12 md:pb-16">
          {/* Hero */}
          <section className="glow-border animate-fade-up relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-950 px-6 py-12 sm:px-10 lg:px-14 lg:py-20">
            <CandlestickDecor />
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 px-4 py-1.5 text-xs font-medium tracking-[0.12em] text-cyan-300 uppercase">
                  <ChartCandlestick className="h-3.5 w-3.5" />
                  US Intraday Trading Community
                </p>

                <h2 className="max-w-3xl text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  美股日内实战室
                  <span className="mt-1 block text-gradient">精准狙击，稳定复利</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                  专注 0DTE 期权与强势股日内交易，用数据和纪律克服人性弱点。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={DISCORD_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-pulse group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:from-emerald-400 hover:to-emerald-300"
                  >
                    加入 Discord 核心圈
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={YOUTUBE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-cyan-500/8 hover:text-cyan-200"
                  >
                    订阅 YouTube 复盘
                    <YouTubeIcon className="h-4 w-4" />
                  </a>
                </div>

                {/* Stats bar */}
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3 backdrop-blur-sm"
                    >
                      <p className="text-lg font-bold text-white">{value}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero logo showcase — desktop only */}
              <div className="hidden lg:flex lg:items-center lg:justify-center">
                <div className="animate-float relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-violet-500/20 blur-2xl" />
                  <div className="relative rounded-full border border-slate-700/60 bg-slate-900/60 p-3 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                    <img
                      src={LOGO_SRC}
                      alt=""
                      aria-hidden="true"
                      className="h-44 w-44 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founders */}
          <section className="animate-fade-up delay-100 mt-16">
            <SectionHeader eyebrow="About" title="核心导师团队" desc="两位实战派导师，专注方法论沉淀与系统化教学。" />
            <div className="grid gap-5 md:grid-cols-2">
              {founders.map(({ name, role, accent, initial, desc }) => {
                const styles = accentMap[accent]
                return (
                  <article
                    key={name}
                    className={`glass-card glass-card-hover glow-border rounded-2xl border border-slate-800/80 p-7 ${styles.hover}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.avatar} text-xl font-bold text-white shadow-lg ring-2 ${styles.ring}`}
                      >
                        {initial}
                      </div>
                      <div>
                        <p className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-widest uppercase ${styles.badge}`}>
                          {role}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white">{name}</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-slate-400">{desc}</p>
                  </article>
                )
              })}
            </div>
          </section>

          {/* Trading Focus */}
          <section className="animate-fade-up delay-200 mt-16">
            <div className="glass-card glow-border rounded-3xl border border-slate-800/80 p-7 sm:p-10">
              <SectionHeader
                eyebrow="Philosophy"
                title="交易聚焦与实战哲学"
                desc='我们长期研究高流动性标的，围绕波动结构讲解分析框架，强调"严谨方法论 + 严格风险意识"。'
              />

              {/* Ticker cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {tradingTargets.map(({ symbol, accent, glow }) => (
                  <div
                    key={symbol}
                    className={`ticker-pill group relative rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-5 text-center shadow-lg ${glow} transition duration-200 hover:-translate-y-1 hover:border-slate-600`}
                  >
                    <p className={`font-mono text-xl font-bold tracking-wider ${accent}`}>{symbol}</p>
                    <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
                  </div>
                ))}
              </div>

              {/* Pillars */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {corePillars.map(({ title, desc, icon, color }) => (
                  <article
                    key={title}
                    className={`glass-card glass-card-hover rounded-2xl border border-slate-800/70 p-6 ${accentMap[color].hover}`}
                  >
                    <IconBox icon={icon} color={color} />
                    <h4 className="mt-4 text-lg font-semibold text-white">{title}</h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="animate-fade-up delay-300 mt-16">
            <SectionHeader eyebrow="Features" title="为什么加入我们" />
            <div className="grid gap-5 lg:grid-cols-3">
              {features.map(({ title, desc, icon, color }, i) => (
                <article
                  key={title}
                  className={`glass-card glass-card-hover group relative overflow-hidden rounded-2xl border border-slate-800/80 p-7 ${accentMap[color].hover}`}
                >
                  <span className="absolute top-5 right-6 font-mono text-4xl font-bold text-slate-800/80 select-none">
                    0{i + 1}
                  </span>
                  <IconBox icon={icon} color={color} />
                  <h4 className="mt-5 text-lg font-semibold text-white">{title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{desc}</p>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700/60 via-slate-600/30 to-transparent" />
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA banner — desktop */}
          <section className="animate-fade-up delay-400 mt-16 hidden md:block">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-cyan-950/60 px-10 py-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_60%)]" />
              <div className="relative flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-medium tracking-widest text-emerald-400 uppercase">Ready to Start?</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">加入核心圈，开始系统化学习之旅</h3>
                  <p className="mt-2 text-sm text-slate-400">与志同道合的交易者一起，用纪律和数据驱动成长。</p>
                </div>
                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-pulse shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
                >
                  加入 Discord <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mb-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 px-6 py-7 backdrop-blur-sm">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={LOGO_SRC}
                alt="JD Trading Education Group Logo"
                className="h-11 w-11 rounded-full border border-slate-700/80 object-cover ring-2 ring-cyan-400/15"
              />
              <div className="text-sm">
                <p className="font-medium text-slate-300">© 2026 JD Trading Education Group LLC.</p>
                <p className="mt-0.5 text-slate-500">All rights reserved.</p>
                <a
                  href="mailto:support@jdtradingedu.com"
                  className="mt-1 inline-block text-slate-400 transition hover:text-cyan-300"
                >
                  support@jdtradingedu.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SocialLink href={YOUTUBE_LINK} label="YouTube">
                <YouTubeIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={DISCORD_LINK} label="Discord">
                <DiscordIcon className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
          <p className="mt-5 border-t border-slate-800/60 pt-4 text-xs leading-relaxed text-slate-600">
            Trading options involves risk. Not financial advice.
          </p>
        </footer>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
        <div className="border-t border-slate-800/80 bg-slate-950/90 px-4 py-3 backdrop-blur-xl">
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer"
            className="cta-pulse flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 py-3.5 text-sm font-bold text-slate-950"
          >
            立即加入 Discord 核心圈
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
