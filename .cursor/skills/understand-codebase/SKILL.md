---
name: understand-codebase
description: Systematically explore and deeply understand an entire codebase — its structure, architecture, data flow, models, training pipelines, and utilities. Use ONLY when the user manually invokes this skill via /skill-understand-codebase. After exploration, the agent is ready to modify code, build features, explain functionality, or answer questions about the codebase.
disable-model-invocation: true
---

# Understand Codebase

当用户手动调用此 skill 时，对当前项目代码库进行全面、系统的探索和理解。探索完成后，准备好回答后续问题或执行代码修改任务。

## 核心原则

- **并行优先**：尽可能同时启动多个探索任务，最大化效率
- **智能适应**：根据项目规模自动调整探索深度（小项目全读，大项目分层抽样）
- **自主驱动**：不要询问用户"要不要开始探索"，直接开始
- **全面覆盖**：不遗漏关键模块，特别关注 ML/DL 项目中的模型、数据、训练、推理等部分

## 探索流程

### Phase 1: 项目概览（并行执行）

同时启动以下所有探索任务：

**任务 A — 文档与配置**
- 读取 `README.md`（及任何 `docs/` 目录下的关键文档）
- 读取包管理文件：`requirements.txt`, `setup.py`, `pyproject.toml`, `package.json`, `Cargo.toml` 等
- 读取配置文件：`.env.example`, `config/`, `*.yaml`, `*.toml`, `*.json`（配置类）

**任务 B — 目录结构**
- 使用 Glob 获取完整文件树，识别顶层目录结构
- 重点关注：`src/`, `lib/`, `models/`, `data/`, `scripts/`, `train/`, `eval/`, `inference/`, `utils/`, `tests/`
- 统计代码规模（文件数、主要语言分布）

**任务 C — 入口点识别**
- 搜索 `main`, `__main__`, `if __name__`, `entry`, `app`, `cli` 等关键入口模式
- 搜索 `Makefile`, `Dockerfile`, `docker-compose`, CI/CD 配置（`.github/workflows/`）
- 搜索脚本文件：`scripts/`, `bin/`, `*.sh`

### Phase 2: 深度理解（根据 Phase 1 结果规划）

根据项目类型，智能选择重点探索方向：

**ML/DL 项目（检测到模型定义、训练脚本、数据处理时）**
1. **模型架构**：读取模型定义文件，理解网络结构、层定义、前向传播逻辑
2. **数据管线**：读取 Dataset/DataLoader 定义，理解数据格式、预处理、增强策略
3. **训练流程**：读取训练脚本，理解优化器、损失函数、学习率调度、训练循环
4. **推理/评估**：读取推理脚本，理解模型加载、预测流程、评估指标
5. **配置管理**：理解超参数配置方式（argparse / yaml / hydra 等）

**Web/API 项目（检测到路由、中间件、数据库时）**
1. **路由与 API**：读取路由定义，理解端点、请求/响应格式
2. **数据层**：读取模型/schema 定义，理解数据结构和关系
3. **业务逻辑**：读取 service/controller 层，理解核心业务流程
4. **中间件与工具**：理解认证、日志、错误处理等横切关注点

**通用项目**
1. **核心模块**：读取 `src/` 或主包下的核心文件
2. **公共 API**：理解对外暴露的接口和类
3. **工具函数**：读取 `utils/`, `helpers/`, `common/` 等
4. **测试**：浏览测试文件以理解预期行为

### Phase 3: 关联分析

- 理解模块间的依赖关系和调用链
- 识别核心数据流：输入 → 处理 → 输出 的完整路径
- 注意设计模式、抽象层次、扩展点

## 探索工具使用策略

| 需求 | 推荐工具 | 说明 |
|------|---------|------|
| 获取文件列表与目录结构 | `Glob` | 快速获取文件树 |
| 按文件名模式搜索 | `Glob` | 如 `**/model*.py`, `**/train*.py` |
| 搜索特定代码模式 | `Grep` | 如类定义、函数签名、import 语句 |
| 理解功能和行为 | `SemanticSearch` | 如"训练循环在哪里"、"数据如何预处理" |
| 读取文件内容 | `Read` | 读取关键文件的完整内容 |
| 大规模并行探索 | `Task (explore)` | 启动多个子代理并行探索不同模块 |

### 关键搜索模式参考

```
# 模型相关
**/model*.py, **/network*.py, **/arch*.py, **/backbone*.py
class.*Model, class.*Net, def forward

# 数据相关
**/data*.py, **/dataset*.py, **/loader*.py, **/preprocess*.py
class.*Dataset, DataLoader, transform

# 训练相关
**/train*.py, **/fit*.py, **/run*.py
optimizer, loss, criterion, backward, scheduler, epoch

# 推理相关
**/predict*.py, **/infer*.py, **/eval*.py, **/test*.py
model.eval, torch.no_grad, predict, inference

# 配置相关
**/config*, **/*.yaml, **/*.yml, **/*.toml
argparse, hydra, OmegaConf
```


## 规模适应策略

| 项目规模 | 文件数参考 | 策略 |
|---------|-----------|------|
| 小型 | < 50 文件 | 尝试读取所有核心代码文件 |
| 中型 | 50-200 文件 | 读取所有核心模块，抽样读取工具类 |
| 大型 | > 200 文件 | 分层探索：先目录结构 → 入口点 → 核心模块 → 按需深入 |

## 注意事项

- 不要跳过测试文件，它们是理解预期行为的重要来源
- 关注 `__init__.py` 文件，它们揭示模块的公共 API
- 如果发现 `CHANGELOG.md` 或 `HISTORY.md`，浏览最近的变更了解项目演进
- 对于 monorepo，先识别子项目边界，再逐个探索
- 遇到生成的代码（如 protobuf、swagger）时标注但不深入分析
