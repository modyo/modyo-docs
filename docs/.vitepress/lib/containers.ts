import type { MarkdownRenderer } from 'vitepress'

export function localizeContainerTitle(
  md: MarkdownRenderer,
  type: string,
  labels: Record<string, string>,
): void {
  const rule = `container_${type}_open`
  const render = md.renderer.rules[rule]
  if (!render) throw new Error(`Container "${type}" is not registered`)

  md.renderer.rules[rule] = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const locale = String(env?.relativePath ?? '').split('/')[0]
    const label = labels[locale]
    if (label && token.info.trim() === type) token.info = `${type} ${label}`
    return render(tokens, idx, options, env, self)
  }
}
