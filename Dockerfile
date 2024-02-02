# 使用官方 Node.js 18 版本的轻量级 Alpine Linux 镜像作为基础镜像
FROM node:20-alpine AS base

# 安装可能需要的系统依赖
RUN apk add --no-cache libc6-compat

# 设置工作目录
WORKDIR /app

# 阶段 1: 依赖安装
FROM base AS deps
# 复制 package.json 和 package-lock.json 文件
COPY package.json package-lock.json* ./

# 安装依赖
RUN npm ci

# 阶段 2: 构建应用
FROM base AS builder
WORKDIR /app

# 从 deps 阶段复制 node_modules
COPY --from=deps /app/node_modules ./node_modules
# 复制所有项目文件到工作目录
COPY . .

# 设置环境变量以禁用 Next.js 的匿名遥测功能
ENV NEXT_TELEMETRY_DISABLED 1

# 构建应用
RUN npm run build

# 阶段 3: 运行应用
FROM base AS runner
WORKDIR /app

# 设置环境变量，定义为生产环境
ENV NODE_ENV production
# 禁用 Next.js 的匿名遥测功能
ENV NEXT_TELEMETRY_DISABLED 1

# 创建并设置合适的用户和用户组
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 从构建阶段复制构建好的文件
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./next

# 设置运行时的端口和主机名
EXPOSE 10322
ENV PORT 10322
ENV HOSTNAME "0.0.0.0"

# 切换到非 root 用户运行应用
USER nextjs

# 指定容器启动时执行的命令
CMD ["node", "server.js"]
