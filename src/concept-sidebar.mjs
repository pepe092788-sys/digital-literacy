// Approved concept classifications. Slugs are stable article URLs without the base or trailing slash.
// An article can appear in more than one concept; every article must be covered.
export const conceptGroups = [
  { label: "抽象化", slugs: ["level-1/programming/programming-language"] },
  { label: "構造化", slugs: ["level-1/data/data-types","level-2/ai/information-layout","level-2/development/development-process","level-3/information-design/front-matter"] },
  { label: "標準化", slugs: ["level-1/programming/languages-and-formats"] },
  { label: "再利用", slugs: ["level-2/ai/skills"] },
  { label: "最適化", slugs: ["level-1/history/computer-miniaturization"] },
  { label: "信頼と検証", slugs: ["level-1/security/multi-factor-authentication","level-1/security/passkey"] },
  { label: "管理", slugs: ["level-2/infrastructure/active-directory","level-2/development/cms","level-3/organization/data-management","level-3/organization/it-governance","level-3/organization/ai-governance"] },
  { label: "リスク", slugs: ["level-1/security/security-hole","level-1/security/malware","level-1/security/ransomware","level-1/security/public-wifi","level-1/security/shadow-it-ai","level-1/security/hardcoding","level-1/network/network-troubles"] },
  { label: "共有", slugs: ["level-1/infrastructure/servers"] },
  { label: "表現", slugs: ["level-2/ai/information-design","level-2/ai/visual-expression","level-2/ai/diagram-methods","level-2/ai/output-formats","level-2/ai/interactive-content"] },
  { label: "学習", slugs: ["prologue","prologue/learning-attitude","prologue/learning-skills","level-1/security/security-information-sources"] },
  { label: "人工知能", slugs: ["level-2/ai/machine-learning","level-2/ai/natural-language-numerical-representation"] },
  { label: "思考と判断", slugs: ["prologue/thinking-skills","prologue/ai-mindset","level-3/organization/data-driven"] },
  { label: "品質と性能", slugs: ["level-1/computer-basics/pc-specifications","level-2/development/software-quality"] },
  { label: "情報処理", slugs: ["level-1/computer-basics/computer-structure","level-1/software/software-basics","level-1/algorithms/basic-control-structures"] },
  { label: "トラブル事例", slugs: ["extra/crowdstrike-2024","extra/tokyo-stock-exchange-2020","extra/mars-climate-orbiter-1999","extra/kddi-2022","extra/gitlab-2017","extra/mizuho-2021"] },
]

export const commonSlugs = ["","level-1","level-2","level-3","about"]

// Starlight collection IDs may include /index; normalize to public page slugs.
export function normalizeSlug(id) {
  return id.replace(/(^|\/)index$/, '').normalize()
}

export function validateConceptCoverage(slugs) {
  const known = new Set(slugs)
  const assigned = new Set([...commonSlugs, ...conceptGroups.flatMap(group => group.slugs)])
  const missing = [...known].filter(slug => !assigned.has(slug))
  const unknown = [...assigned].filter(slug => !known.has(slug))
  if (missing.length || unknown.length) {
    throw new Error('概念別メニューの分類を確認してください。未分類: ' + missing.join(', ') + ' / 存在しないページ: ' + unknown.join(', '))
  }
  if (new Set(conceptGroups.map(group => group.label)).size !== conceptGroups.length ||
      conceptGroups.some(group => new Set(group.slugs).size !== group.slugs.length)) {
    throw new Error('概念名または同一概念内の記事が重複しています。')
  }
}
