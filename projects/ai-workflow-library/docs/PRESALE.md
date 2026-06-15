# 图书馆最小预售验证包

## Status

- Project: `ai-workflow-library`
- Validation type: `$5` willingness-to-pay test
- Project status: `validating`
- Build authorization: Not granted
- Payment availability: Not confirmed

This document defines a presale proposition and review material only. It does not authorize product development, publishing, deployment, payment collection, or outreach.

## 1. 一句话定位

**中文：** 图书馆是一个把“如何指挥 ChatGPT + Codex 像员工一样做项目赚钱”的真实实验过程，整理成模板、清单和操作系统的资料库。

**English:** AI Workflow Library turns the real experiment of directing ChatGPT and Codex like project employees into reusable templates, checklists, and operating systems for building measurable revenue experiments.

## 2. 目标用户

### 用户一：想用 Codex 做项目但不知道怎么管理的人

- **痛点：** 会让 Codex 写代码，但任务容易失控；缺少范围、交接、检查、审批和完成标准。
- **为什么会付费：** 一套经过真实项目使用的操作模板，可以减少反复试错、返工和上下文丢失。
- **付款后期待得到什么：** 可直接放进项目的指挥文件、任务模板、检查清单、交接格式和使用示例。

### 用户二：想用 AI 做副业但不知道怎么搭结构的人

- **痛点：** 有很多点子，却不知道如何定义客户、验证需求、控制成本、设置收入路径和停止条件。
- **为什么会付费：** 愿意用小额费用换取一套从想法到验证的结构，避免先开发后发现无人需要。
- **付款后期待得到什么：** PROJECT.md、验证计划、收入实验仪表盘、7 天实验计划和复盘表。

### 用户三：想复制 AI 自养实验的人

- **痛点：** 想观察或复制 AI Self-Funding Lab，但公开记录分散，难以转成自己的执行系统。
- **为什么会付费：** 付费包把真实实验中使用的文件整理为可复制、可编辑、可衡量的完整起点。
- **付款后期待得到什么：** 五个互相连接的模板、Codex 指令合集、仪表盘数据结构和明确的执行顺序。

## 3. 五个首发资产完整定义

### A1. Codex CTO 指挥模板 / Codex CTO Operating System

- **解决什么问题：** 解决 Codex 只做一次性回答、任务边界不清、执行中断、验证不足和外部操作失控的问题。
- **交付格式：** Markdown；包括 `AGENTS.md`、任务合同、handoff 模板、验证清单和审批矩阵。
- **免费版包含什么：** 精简版 `AGENTS.md`、单任务模板和基础完成检查清单。
- **付费版多给什么：** 完整 CTO 操作系统、分阶段执行流程、handoff、风险升级规则、决策记录模板和真实示例。
- **为什么值钱：** 用户购买的是减少试错和返工的执行系统，而不是一组孤立提示词。
- **Codex 能否生成初稿：** 能；可基于公司现有工程规范和真实执行记录生成。
- **是否需要 Chairman 人工审核：** 需要；必须检查权限边界、公开信息、敏感数据和是否真实代表实验流程。

### A2. AI 项目启动说明书模板 / AI Project Launch Brief

- **解决什么问题：** 解决 AI 项目在没有客户、范围、指标、时间盒、成本上限和停止条件时直接开发的问题。
- **交付格式：** Markdown；包括 `PROJECT.md`、填写指南、审批清单和示例。
- **免费版包含什么：** 空白 `PROJECT.md` 和最小填写说明。
- **付费版多给什么：** 引导式问题、完成度评分、三类项目示例、build gate、审批记录和常见错误检查。
- **为什么值钱：** 在开发前暴露错误假设，帮助用户避免时间和 API 成本浪费。
- **Codex 能否生成初稿：** 能；现有项目模板和图书馆 PROJECT.md 可作为原始材料。
- **是否需要 Chairman 人工审核：** 需要；确保模板符合真实决策流程，不承诺结果或收益。

### A3. AI 收入实验仪表盘模板 / AI Revenue Experiment Dashboard

- **解决什么问题：** 解决 AI 项目只看“做了多少”，却不记录部署、访问、成本、收入、利润和 ROI 的问题。
- **交付格式：** JSON Schema、JSON 示例、Markdown 指标说明和 Node.js 校验脚本。
- **免费版包含什么：** 基础项目记录 JSON 和字段说明。
- **付费版多给什么：** 完整 Schema、校验器、数据窗口规则、收入/成本公式、项目组合示例和月度复盘格式。
- **为什么值钱：** 把项目从主观感觉变成可审计的收入实验，并能比较多个项目。
- **Codex 能否生成初稿：** 能；公司已经有可运行的 Portfolio Dashboard MVP。
- **是否需要 Chairman 人工审核：** 需要；确认指标定义、金额口径和示例中不含账户或个人信息。

### A4. AI 每日工作流程模板 / AI Agent Daily Workflow

- **解决什么问题：** 解决每天不知道给 AI 安排什么、如何检查、何时人工介入和如何留下交接记录的问题。
- **交付格式：** Markdown 日计划、任务队列、review loop、handoff、每日总结和指标更新清单。
- **免费版包含什么：** 一页每日工作流和基础任务清单。
- **付费版多给什么：** 角色分工、优先级规则、异常升级、审批点、日/周复盘和 Codex 可直接执行的指令模板。
- **为什么值钱：** 将偶发使用 AI 转成可持续执行、可检查、可恢复的工作系统。
- **Codex 能否生成初稿：** 能；可从现有工程执行和验证流程提炼。
- **是否需要 Chairman 人工审核：** 需要；尤其检查自动化边界和需要人工确认的外部操作。

### A5. AI 项目停止条件与复盘模板 / AI Project Kill Criteria and Retrospective

- **解决什么问题：** 解决因为沉没成本继续无需求项目，以及停止后没有积累可复用经验的问题。
- **交付格式：** Markdown kill/pause/scale 决策表、证据评分表、项目复盘表和组合决策记录。
- **免费版包含什么：** 基础停止条件清单和简短复盘问题。
- **付费版多给什么：** 分阶段门槛、证据强度评分、成本/收入复盘、决策记录、失败模式库和下一项目迁移清单。
- **为什么值钱：** 帮助用户更早停止错误方向，并把失败转化为下一次实验的资产。
- **Codex 能否生成初稿：** 能；可基于公司 DECISION、METRICS 和项目验证记录生成。
- **是否需要 Chairman 人工审核：** 需要；确认门槛务实且不把假设描述成已验证结论。

## 4. 五美元模板包定义

### 名称

`AI Self-Funding Starter Pack`

### 价格

`$5 USD`

### 包含内容

- 五个完整模板
- 总体使用说明
- 一个 7 天实验计划
- 一个项目复盘表
- 一个 Codex 指令合集

### 用户付款后拿到的具体文件

```text
ai-self-funding-starter-pack/
  README.md
  LICENSE.txt
  01-codex-cto-operating-system/
    AGENTS.md
    TASK-CONTRACT.md
    HANDOFF.md
    VERIFICATION-CHECKLIST.md
    APPROVAL-MATRIX.md
  02-ai-project-launch-brief/
    PROJECT.md
    PROJECT-REVIEW-CHECKLIST.md
    EXAMPLE-PROJECT.md
  03-ai-revenue-dashboard/
    project.schema.json
    projects.example.json
    METRICS.md
    validate-dashboard.js
  04-ai-agent-daily-workflow/
    DAILY-WORKFLOW.md
    TASK-QUEUE.md
    DAILY-REVIEW.md
  05-kill-criteria-retrospective/
    KILL-CRITERIA.md
    EVIDENCE-SCORECARD.md
    RETROSPECTIVE.md
  bonus/
    7-DAY-EXPERIMENT-PLAN.md
    CODEX-INSTRUCTION-PACK.md
    START-HERE-CHECKLIST.md
```

All files are editable, downloadable text assets. No software account, hosted service, income guarantee, ongoing subscription, or automatic update is included in the initial `$5` offer.

### Paid-value boundary

The free offer demonstrates that each template is useful. The paid pack provides the connected system, complete file set, implementation sequence, examples, checks, and reusable Codex instructions.

## 5. 最小预售页面文案

### 标题

把 ChatGPT 和 Codex 从聊天工具，变成可管理的项目执行系统

### 副标题

下载 AI Self-Funding Lab 正在真实使用的项目模板、收入仪表盘、每日工作流和停止条件。不是提示词大全，而是一套能开始、衡量和停止 AI 收入实验的文件系统。

### 适合谁

- 正在用 Codex 做项目，但任务经常失控的独立开发者
- 想用 AI 做副业，却不知道从哪里验证需求的自由职业者和 solo founder
- 想复制 AI 自养实验，而不是只看结果的人

### 你会得到什么

- Codex CTO 指挥模板
- AI 项目启动说明书模板
- AI 收入实验仪表盘模板
- AI 每日工作流程模板
- AI 项目停止条件与复盘模板
- 7 天实验计划
- Codex 指令合集

所有文件均可下载、编辑和用于自己的项目。

### 为什么这个实验可信

- 模板来自 AI Self-Funding Lab 的真实公司与项目文件
- 每个文件都有明确用途、审批边界和验证规则
- 项目公开记录假设、证据、成本、收入与失败
- 当前项目仍在验证阶段，不伪造收入或用户结果

### 免费下载区

**免费获得 Starter Files**

- 精简版 PROJECT.md
- 基础 Codex 任务模板
- 基础收入指标清单

行动按钮占位：`Download free Markdown templates`

### 付费模板包区

**AI Self-Funding Starter Pack — $5**

一次性获得五个完整模板系统、7 天计划、复盘表和 Codex 指令合集。

购买按钮占位：`Get the $5 template pack`

当前状态说明：付款链接尚未确认，按钮不得启用。

### PayPal 支持链接占位

如果免费模板帮助了你的项目，可以支持这个公开实验。

链接占位：`Support the experiment with PayPal`

当前状态说明：必须由 Chairman 确认真实 PayPal 链接后才能显示。

### 常见问题

**这是课程吗？**  
不是。交付物是可直接编辑的 Markdown、JSON、清单和模板文件。

**购买后能保证赚钱吗？**  
不能。模板帮助你更结构化地验证和执行，不保证收入。

**是否需要订阅？**  
不需要。初始方案是 `$5` 一次性数字下载。

**需要会编程吗？**  
部分模板适合非技术用户，但 Codex 和 JSON 校验相关内容更适合开发者或愿意学习文件工作流的人。

**为什么免费版和付费版同时存在？**  
免费版用于验证实际价值；付费版提供完整、连接好的执行系统和示例。

### 风险声明

本项目不保证赚钱。它是一套可复制的实验系统，帮助用户定义假设、执行工作、测量结果并及时停止无效项目。AI 输出仍需人工审核，用户应自行评估安全、法律、税务、支付和平台规则。

## 6. 付费意愿验证方法

### 方法一：GitHub README 预售页

- 在现有仓库中准备一份经批准的 README 预售文案
- 展示免费文件、`$5` 包内容和禁用状态的付款占位
- 观察访问、点击、issue 反馈或明确购买询问
- 需要 Chairman 批准后才可公开发布或启用真实链接

### 方法二：五名目标用户文案审查

- 由 Chairman 或经批准的人手动发给至少五名目标用户
- 只展示预售文案和文件清单，不声称产品已经完成
- 询问：最想要哪个文件、是否愿付 `$5`、拒绝付款的原因、缺少什么
- Codex 可以起草消息和记录结构，但不得自动发送或联系用户

### 方法三：公开实验记录

- 为 Reddit、Hacker News、Indie Hackers、Codex 或 Cursor 社区准备非营销式实验记录
- 公开问题、文件清单、价格假设和未验证状态
- 请求具体反馈，而不是制造稀缺或虚假结果
- Codex 不得自动发布、评论、投票或私信；所有发布必须由 Chairman 批准并手动执行

### 方法四：PayPal 手动收款

- Chairman 确认 PayPal support 或 digital download payment link 可用
- 只使用静态链接，不开发支付 API
- 在模板包尚未完成时必须清楚说明预售交付范围和时间
- 首笔大于 `$0` 的可归因收入即为 Level 1 收入证据

## 7. 进入开发阶段的新门槛

必须同时满足：

- 五个首发资产的定义完整
- Chairman 明确确认 PayPal support 或 payment link 可用
- ChatGPT 明确批准最小页面开发
- 首发页面范围仅包含免费内容、`$5` 模板包说明、PayPal 占位和联盟链接占位
- 不接 Stripe
- 不做登录
- 不做数据库
- 不做订阅
- 不做复杂 checkout
- 不部署生产环境，除非另有 Chairman 明确批准

当前满足情况：

- 五个资产定义：已满足
- PayPal 可用性：未满足
- ChatGPT 最小页面批准：未满足
- 生产部署批准：未满足

当前结论：`NO BUILD`

## 8. Approval state

This presale pack is ready for Chairman and ChatGPT review. It is not approval to build, publish, deploy, contact users, or collect payment.
