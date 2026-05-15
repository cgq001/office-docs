---
title: npm 发布
outline: deep
---

# npm 发布

本组件包名为 `@norio-office/rich-text`，内部 npm registry 地址为：

```bash
http://192.168.0.146:40087/
```

## 发布前检查

在组件仓库执行发布前检查：

```bash
cd D:\work\office\rich-text
npm run typecheck
npm run build:all
npm run publish:dry-run
```

如果当前版本已经发布过，需要先修改组件仓库里的版本号，再重新发布。npm 不允许覆盖同名同版本包。

## 一次性发布到内网 npm

如果只想本次发布指定内网 registry，可以直接把 registry 参数透传给 `npm publish`：

```bash
cd D:\work\office\rich-text
npm login --registry http://192.168.0.146:40087/
npm run publish:npm -- --registry http://192.168.0.146:40087/
```

项目里的 `publish:npm` 脚本会先执行 `publish:prepare`，再从生成的 `npm/` 目录执行真正的 `npm publish`。`--` 后面的参数会继续传给 `npm publish`。

## 设置 scope 默认 registry

如果希望以后 `@norio-office` 作用域下的包默认都从内网 npm 安装和发布，可以配置：

```bash
npm config set @norio-office:registry http://192.168.0.146:40087/
npm login --registry http://192.168.0.146:40087/
```

配置后，发布可以简化为：

```bash
cd D:\work\office\rich-text
npm run publish:npm
```

## 使用 token

如果内网 npm 使用 token 鉴权，可以在本机或 CI 的 `.npmrc` 中配置：

```ini
@norio-office:registry=http://192.168.0.146:40087/
//192.168.0.146:40087/:_authToken=YOUR_TOKEN
always-auth=true
```

不要把真实 token 提交到代码仓库。

## 验证发布结果

发布后可以检查 registry 上的最新版本：

```bash
npm view @norio-office/rich-text version --registry http://192.168.0.146:40087/
```

业务项目安装时建议显式指定 scope registry：

```bash
npm config set @norio-office:registry http://192.168.0.146:40087/
npm install @norio-office/rich-text
```

## 常见问题

### 提示版本已存在

说明当前 `package.json` 里的版本已经发布过。修改组件仓库版本号后重新执行发布流程。

### 提示未登录或没有权限

重新登录内网 registry：

```bash
npm login --registry http://192.168.0.146:40087/
```

如果使用 CI 发布，检查 `.npmrc` 中的 token 是否有效。

### HTTP registry 需要设置 strict-ssl 吗

不需要。`strict-ssl` 只和 HTTPS 证书校验有关，当前 registry 是 HTTP 地址。
