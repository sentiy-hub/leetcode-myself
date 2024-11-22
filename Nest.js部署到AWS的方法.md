将 NestJS 应用 部署到 AWS 上有多种方法，以下是几种 简便高效 的方法，适合不同需求：

1. 使用 AWS Elastic Beanstalk

Elastic Beanstalk 是 AWS 提供的全托管 PaaS（平台即服务），非常适合快速部署 Web 应用。

步骤：

  1. 准备 NestJS 应用：
    • 确保代码已经打包，通常使用 npm run build。
     • 确保 dist/main.js 是可用的入口。
  2. 创建 Elastic Beanstalk 环境：
    • 登录 AWS 管理控制台。
     • 搜索并打开 Elastic Beanstalk 服务。
     • 创建新的应用程序，选择 Node.js 平台。
  3. 部署代码：
    • 将代码压缩为 .zip 文件（包括 node_modules）。
     • 上传至 Elastic Beanstalk 的环境。
  4. 配置环境变量：
    • 在 Beanstalk 控制台中设置必要的环境变量，如 DATABASE_URL、JWT_SECRET 等。
  5. 自动扩展与负载均衡：
    • Beanstalk 提供内置扩展能力和负载均衡，配置好即可享受高可用性。

优势：

 • 简单直观，适合小型到中型应用。
 • 自动化处理服务器配置、扩展等。

2. 使用 AWS Lambda + API Gateway (无服务器架构)

AWS Lambda 是一种无服务器计算服务，可以极大降低管理复杂度和运行成本。

步骤：

  1. 安装依赖：
    • 安装 @nestjs/cli 和 serverless：

npm install -g @nestjs/cli serverless
npm install --save serverless-http


  2. 适配代码：
    • 修改 main.ts 文件，使应用兼容 Lambda：

import { Handler } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let cachedServer: any;

async function bootstrapServer() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    await app.init();
    cachedServer = createServer(app.getHttpAdapter().getInstance());
  }
  return cachedServer;
}

export const handler: Handler = async (event, context) => {
  const server = await bootstrapServer();
  return proxy(server, event, context, 'PROMISE').promise;
};


  3. 部署到 Lambda：
    • 使用 Serverless 框架部署：

npx serverless deploy


  4. 配置 API Gateway：
    • Serverless 会自动生成 API Gateway，记录下对应的 URL。

优势：

 • 按需收费：无流量时无需费用。
 • 自动扩展，非常适合短时高并发场景。

3. 使用 Docker + AWS ECS (Elastic Container Service)

ECS 是 AWS 提供的容器化服务，适合 Docker 用户。

步骤：

  1. 编写 Dockerfile：
    • 在项目根目录创建 Dockerfile：

# Use Node.js base image
FROM node:18
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]


  2. 构建并推送镜像：
    • 构建 Docker 镜像：

docker build -t <your-image-name> .


 • 推送到 AWS ECR（Elastic Container Registry）：

aws ecr create-repository --repository-name <your-repo-name>
docker tag <your-image-name> <ecr-repo-url>
docker push <ecr-repo-url>


  3. 创建 ECS 服务：
    • 登录 AWS 控制台，创建一个 ECS 集群。
     • 使用托管的 Fargate 配置以降低管理复杂性。
     • 配置任务定义并运行服务。
  4. 设置负载均衡 (可选)：
    • 为服务配置 AWS 的 Application Load Balancer (ALB)，实现流量管理。

优势：

 • 容器化便于扩展和迁移。
 • Fargate 提供无服务器体验。

4. 使用 AWS EC2 实例

如果需要更灵活的控制，可以直接在 EC2 上部署。

步骤：

  1. 启动 EC2 实例：
    • 在 AWS 管理控制台中，选择适合的实例类型（如 t2.micro）。
     • 配置安全组开放必要端口（如 3000）。
  2. 部署 NestJS 应用：
    • SSH 登录实例，安装 Node.js：

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs


 • 上传代码并安装依赖：

npm install
npm run build


 • 使用 pm2 管理服务：

npm install -g pm2
pm2 start dist/main.js


  3. 配置域名与 HTTPS：
    • 配置 AWS Route 53 和 ACM（AWS Certificate Manager），绑定域名和 SSL。

优势：

 • 适合需要自定义环境的场景。
 • 更灵活，但需要维护服务器。

推荐方法

如果您追求 简便和高效，可以选择：
  1. Elastic Beanstalk（托管服务，适合快速上线）。
  2. Lambda + API Gateway（无服务器，低成本，自动扩展）。