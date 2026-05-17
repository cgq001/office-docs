import { cpSync, existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'docs/.vitepress/dist')
const githubDist = resolve(root, 'docs/.vitepress/dist-github')

function runDocsBuild(base) {
  return spawnSync(
    'npm run docs:build',
    [],
    {
      cwd: root,
      env: {
        ...process.env,
        VITEPRESS_BASE: base,
      },
      stdio: 'inherit',
      shell: true,
    },
  )
}

const result = runDocsBuild('/office-docs/')

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}

if (existsSync(githubDist)) {
  rmSync(githubDist, { recursive: true, force: true })
}

cpSync(dist, githubDist, { recursive: true })

const restoreResult = runDocsBuild('')

if (restoreResult.status !== 0) {
  process.exit(restoreResult.status ?? 1)
}
