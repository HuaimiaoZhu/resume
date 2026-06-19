import { ScrollReveal, StaggerReveal } from "@/components/animations";
import { Briefcase, GraduationCap, Flask, Medal, User, PuzzlePiece, Sparkle } from "@phosphor-icons/react/dist/ssr";

function SecTitle({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Icon size={16} weight="light" className="text-accent" />
      <h2 className="text-base font-bold text-text">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-block text-[10px] text-text-dim bg-highlight rounded px-1.5 py-0.5 font-mono mr-1.5 mb-1">{children}</span>;
}

export default function Page() {
  return (
    <div className="px-8 md:px-12 py-12 md:py-16">
      <div className="grid grid-cols-3 gap-8">

        {/* ═══════ LEFT ═══════ */}
        <div className="col-span-2 space-y-10">

          {/* 项目经历 */}
          <section>
            <SecTitle icon={Briefcase} title="项目经历" />

            <div className="mb-5">
              <span className="text-[10px] text-text-muted font-mono">2026.01 — 2026.03 · 炎熵智能</span>
              <h3 className="text-sm font-bold text-accent mt-0.5">两款四足机器人二次开发与交付</h3>
              <p className="text-xs font-semibold text-text mt-0.5">独立负责全链路 · 宇树 Go2 + 智身"钢蹦"</p>
              <ul className="text-xs text-text-dim mt-1.5 space-y-1 leading-relaxed list-disc list-inside marker:text-accent/40">
                <li>独立完成两款机械狗的定制化电路设计（供电、通信链路、传感器接口），结合实际应用场景优化机身结构，提升运动稳定性</li>
                <li>基于 ego-planner 路径规划算法，完成 2D 平面导航与 3D 复杂地形导航的算法移植、参数调优与功能实现</li>
                <li>完成电路—结构—算法全链路联调，两款机械狗在不同场景下导航功能稳定可用，<strong className="text-accent font-semibold">项目验收交付</strong></li>
              </ul>
              <div className="mt-2">{["ego-planner","ROS","嵌入式C","电路设计","系统联调"].map(t=><Tag key={t}>{t}</Tag>)}</div>
            </div>

            <div className="mb-5">
              <span className="text-[10px] text-text-muted font-mono">2025.03 — 2025.08 · 3人团队</span>
              <h3 className="text-sm font-bold text-accent mt-0.5">RAICOM 睿抗机器人开发者大赛</h3>
              <p className="text-xs font-semibold text-text mt-0.5">队长 · 全国一等奖（Top 1%）</p>
              <ul className="text-xs text-text-dim mt-1.5 space-y-1 leading-relaxed list-disc list-inside marker:text-accent/40">
                <li>主导硬件体系搭建：树莓派 4B 主控（ROS1）+ ESP32 机械臂控制 + STM32 底盘驱动 + OpenCV 视觉，10+ 组件采购、组装及电路调试</li>
                <li>3 周内零基础自学 ROS1 与 Python，完成上位机与下位机通信协议适配，主导多设备协同控制程序编写</li>
                <li>制定 12 周备赛计划，统筹硬件组、软件组、算法组分工，每日站会跟踪进度，协调解决技术分歧 20+ 次</li>
                <li>赛中处理主控板烧毁、视觉识别异常、无线通信中断等多起突发故障，通过备用硬件替换、算法鲁棒性优化、应急控制逻辑写入等方案，<strong className="text-accent font-semibold">10 分钟内恢复</strong>设备运行，关键赛程零失误</li>
              </ul>
              <div className="mt-2">{["ROS1","树莓派4B","STM32","ESP32","OpenCV"].map(t=><Tag key={t}>{t}</Tag>)}</div>
            </div>

            <div className="mb-5">
              <span className="text-[10px] text-text-muted font-mono">2024.04 — 2025.08</span>
              <h3 className="text-sm font-bold text-accent mt-0.5">中国机器人及人工智能大赛</h3>
              <p className="text-xs font-semibold text-text mt-0.5">核心成员 · 全国一等奖 · 脑控机器人赛道</p>
              <ul className="text-xs text-text-dim mt-1.5 space-y-1 leading-relaxed list-disc list-inside marker:text-accent/40">
                <li>自主学习 BCL 脑控系统原理，主导 EEG 信号采集模块调试</li>
                <li>通过电极布置优化与滤波参数调整，信号噪声比从 <strong className="text-accent font-semibold">25dB 提升至 38dB（+52%）</strong></li>
                <li>与团队成员协同开发，每周输出跟踪进度，推动团队整体水平提升</li>
              </ul>
              <div className="mt-2">{["BCL","EEG","信号处理","脑机接口"].map(t=><Tag key={t}>{t}</Tag>)}</div>
            </div>

            <div className="mb-5">
              <span className="text-[10px] text-text-muted font-mono">2025.07 — 2026.01</span>
              <h3 className="text-sm font-bold text-accent mt-0.5">智控无人机实验室搭建</h3>
              <p className="text-xs font-semibold text-text mt-0.5">核心开发 · 科研平台建设</p>
              <ul className="text-xs text-text-dim mt-1.5 space-y-1 leading-relaxed list-disc list-inside marker:text-accent/40">
                <li>负责实验室无人机设备的组装、接线与整机调试，排查设备连接及运行故障，保障硬件性能稳定</li>
                <li>精准复现 ego-planner 路径规划算法，完成算法与无人机系统的适配调试</li>
                <li>基于 MATLAB 搭建<strong className="text-accent font-semibold">滑模控制策略仿真验证平台</strong>，完成仿真与实测双重验证，支撑实验室后续研究</li>
              </ul>
              <div className="mt-2">{["MATLAB","ego-planner","滑模控制","Simulink"].map(t=><Tag key={t}>{t}</Tag>)}</div>
            </div>

            <div className="bg-highlight rounded-lg p-3.5 border border-border text-xs text-text-dim leading-relaxed">
              <span className="text-text font-semibold">带队方法论</span>——分层组队+定向培养：依据成员技能精准分配任务。协同指导老师搭建"学习→调试→比赛"闭环系统，制定周学习计划，组织多次设备调试模拟，<strong className="text-accent font-semibold">赛事备赛效率提升约 30%</strong>。
            </div>
          </section>

          {/* 学术与科研 */}
          <section>
            <SecTitle icon={Flask} title="学术与科研成果" />

            <div className="mb-4">
              <span className="text-[10px] text-text-muted font-mono">2026.06 · MDPI Machines 14(6), 667</span>
              <h3 className="text-sm font-bold text-accent mt-0.5">无人机 SPMSM 改进滑模控制研究</h3>
              <p className="text-xs font-semibold text-text mt-0.5">SCI 论文 · 第二作者 · 导师：胡明远、张东军*</p>
              <ul className="text-xs text-text-dim mt-1.5 space-y-1 leading-relaxed list-disc list-inside marker:text-accent/40">
                <li>论文：<em className="text-text">Improved Terminal Integral Sliding Mode Adaptive Disturbance Rejection Control Method for UAV SPMSM</em></li>
                <li>提出 <strong className="text-accent font-semibold">ITISMC-ADSTA-TISMO</strong> 复合控制策略——改进终端积分滑模控制器抑制积分饱和与抖振，自适应超螺旋趋近律动态平衡收敛速度，终端积分滑模观测器实现扰动实时估计与前馈补偿</li>
                <li>TMS320F28379D DSP 实测：无负载启动 <strong className="text-accent font-semibold">0.45s</strong>（较 SMC-STA 缩短 43.75%）；稳态速度波动 <strong className="text-accent font-semibold">仅 3rpm</strong>；负载突变、正弦扰动、参数摄动下均超越 5 种基准算法</li>
                <li>资助：山东省自然科学基金 (ZR2025QC2202Z) · 德州市智能装备研发中心 (PT2025KJT004)</li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] text-text-muted font-mono">2026.05 · 中国自动化学会 · 北京顺义</span>
              <h3 className="text-sm font-bold text-accent mt-0.5">RoboCup 2026 机器人世界杯中国赛</h3>
              <p className="text-xs font-semibold text-text mt-0.5">足球机器人 · 类人组 (Large) · 三等奖</p>
              <p className="text-xs text-text-dim mt-1.5 leading-relaxed">
                参赛单位：山东华宇工学院 · 队伍：海底小纵队 · 指导教师：胡明远、周旭、王小语。16 人跨年级团队协作完成自主导航与竞技。本人负责硬件调试与赛场应急保障，<strong className="text-accent font-semibold">团队顺利完赛</strong>。
              </p>
            </div>
          </section>

          {/* 在校经历 */}
          <section>
            <SecTitle icon={User} title="在校经历" />

            <div className="mb-3">
              <span className="text-[10px] text-text-muted font-mono">2025.04 — 至今</span>
              <h3 className="text-xs font-semibold text-text mt-0.5">先进鲁棒控制科研实验室 · 学生负责人</h3>
              <p className="text-xs text-text-dim mt-1 leading-relaxed">
                设计分层组队+定向培养模式，依据成员技能分配任务。完成 <strong className="text-text font-semibold">5 次</strong>赛事报名与组织。协同指导老师搭建学—调—赛闭环系统，制定周学习计划，组织多次设备调试模拟，备赛效率提升约 30%。
              </p>
            </div>

            <div className="mb-3">
              <span className="text-[10px] text-text-muted font-mono">2024.09 — 至今</span>
              <h3 className="text-xs font-semibold text-text mt-0.5">电气工程及其自动化 2403 班 · 副班长</h3>
              <p className="text-xs text-text-dim mt-1 leading-relaxed">
                管理 44 人班级事务。配合辅导员、学校老师安排学习督促、安全教育、奖助评选及党团工作。策划组织班级活动累计 <strong className="text-text font-semibold">10+</strong> 次，负责节目审核、彩排、场地租赁、会场布置等全流程。
              </p>
            </div>

            <div className="mb-3">
              <span className="text-[10px] text-text-muted font-mono">2024 — 2025</span>
              <h3 className="text-xs font-semibold text-text mt-0.5">辩论与演讲</h3>
              <p className="text-xs text-text-dim mt-1 leading-relaxed">
                智理杯辩论赛<strong className="text-text font-semibold">最佳辩手</strong>及团队三等奖 · 演讲啦比赛三等奖 · 红韵向党寻根沂蒙演讲比赛三等奖。
              </p>
            </div>
          </section>

          {/* 教育 */}
          <section>
            <SecTitle icon={GraduationCap} title="教育背景" />
            <div>
              <h3 className="text-sm font-bold text-accent">山东华宇工学院</h3>
              <p className="text-xs font-semibold text-text mt-0.5">电气工程及其自动化 · 全日制本科 · 大二在读</p>
              <div className="text-xs text-text-dim mt-1.5 space-y-0.5 leading-relaxed">
                <p>GPA <strong className="text-text font-semibold">3.81</strong>/5.0 · 学习成绩排名 <strong className="text-text font-semibold">1</strong>/46 · 综合测评排名 9/135 · 专业排名 <strong className="text-text font-semibold">3</strong>/132（前 2.3%）· 班级排名 <strong className="text-text font-semibold">1</strong>/44</p>
                <p>主修：电路原理 · 模拟/数字电子技术 · 电机学 · 电力系统分析 · 自动控制原理 · 嵌入式系统设计 · 高等数学 · 大学物理 · Python 语言基础 · 线性代数</p>
              </div>
              <p className="text-[10px] text-text-muted font-mono mt-2">2024.09 — 2028.06（在读）</p>
            </div>
          </section>
        </div>

        {/* ═══════ RIGHT ═══════ */}
        <div className="col-span-1 space-y-8">

          {/* 关键数据 */}
          <section>
            <SecTitle icon={Sparkle} title="关键数据" />
            <div className="space-y-2">
              {[
                ["GPA", "3.81 / 5.0"],
                ["班级排名", "1 / 44"],
                ["专业排名", "3 / 132（前 2.3%）"],
                ["学习成绩排名", "1 / 46"],
                ["国赛一等奖", "2 项"],
                ["独立交付项目", "4 个"],
                ["SCI 论文", "1 篇（第二作者）"],
                ["赛事组织", "5 次"],
              ].map(([l,n])=>(
                <div key={l} className="flex justify-between items-baseline pb-1.5 border-b border-border last:border-b-0">
                  <span className="text-xs text-text-dim">{l}</span>
                  <span className="text-xs font-bold text-accent font-mono text-right">{n}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 能力雷达 */}
          <section>
            <SecTitle icon={PuzzlePiece} title="专业能力" />
            <div className="space-y-3.5">
              <div>
                <span className="text-[10px] font-bold text-accent font-mono tracking-wide">机器人系统</span>
                <p className="text-[11px] text-text-dim leading-relaxed mt-0.5">ROS1/ROS2 开发 · ego-planner 路径规划 · 滑模控制 · BCL 脑控 · Matlab/Simulink 仿真</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent font-mono tracking-wide">嵌入式硬件</span>
                <p className="text-[11px] text-text-dim leading-relaxed mt-0.5">STM32 · ESP32 · 树莓派 4B · Keil uVision5 · 供电/通信/传感器电路设计 · 多传感器融合</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent font-mono tracking-wide">软件开发</span>
                <p className="text-[11px] text-text-dim leading-relaxed mt-0.5">Python（ROS/数据处理）· C/C++（嵌入式/电机控制）· SQL</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent font-mono tracking-wide">工程工具</span>
                <p className="text-[11px] text-text-dim leading-relaxed mt-0.5">SolidWorks · VMware · Git · SPSS · Stata · Photoshop · Vegas</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-accent font-mono tracking-wide">项目协作</span>
                <p className="text-[11px] text-text-dim leading-relaxed mt-0.5">3-16 人团队管理 · 备赛计划 · 进度跟踪 · 跨模块协调 · 应急故障响应</p>
              </div>
            </div>
          </section>

          {/* 荣誉精选 */}
          <section>
            <SecTitle icon={Medal} title="主要荣誉" />
            <div className="space-y-0.5 text-[11px] text-text-dim">
              {[
                "国赛一等奖 · RAICOM 2025（队长 · Top1%）",
                "国赛一等奖 · 第27届机器人及AI大赛",
                "国赛二等奖 · 第17届电工杯数学建模（队长）",
                "SCI 论文 · Machines 期刊（第二作者）",
                "RoboCup 三等奖 · 2026 中国赛（类人组）",
                "省赛一等奖 · 睿抗开发者大赛山东赛区",
                "省赛二等奖 · 机器人及AI大赛山东赛区",
                "省赛三等奖 · 统计建模大赛山东赛区（队长）",
                "省赛铜奖 · 建行杯大学生创新大赛",
                "省/区域三等奖 · 信息安全与对抗竞赛",
                "校级一等奖 · 机器人智创未来大赛",
                "最佳辩手 · 智理杯辩论赛",
                "优秀学生奖学金 · 学习标兵（学科竞赛+数学）",
                "计算机二级 · 普通话二级乙等",
              ].map((h,i)=>(
                <div key={i} className="flex items-start gap-1.5 pb-1 border-b border-border last:border-b-0">
                  <Sparkle size={9} weight="fill" className="text-accent shrink-0 mt-[3px]" />
                  {h}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <p className="text-[10px] text-text-muted font-mono mt-16 text-center opacity-40">
        zhu_huaimiao · robotics_engineer
      </p>
    </div>
  );
}
