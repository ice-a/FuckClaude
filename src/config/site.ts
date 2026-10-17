export interface SiteAuthor {
  id: 'linxiaotao';
  name: string;
  email: string;
  github: string;
  githubUrl: string;
  xUrl: string;
  bio: { en: string; zh: string };
}

export const SITE_AUTHOR: SiteAuthor = {
  id: 'linxiaotao',
  name: 'LinXiaoTao',
  email: 'linxiaotao1993@gmail.com',
  github: 'LinXiaoTao',
  githubUrl: 'https://github.com/LinXiaoTao',
  xUrl: 'https://x.com/linxiaotao1993',
  bio: {
    en: 'Independent developer who built Fuck Claude from public reverse-engineering of Claude Code fingerprinting. This site is a reference tool and educational knowledge base — not affiliated with Anthropic.',
    zh: '独立开发者,基于 Claude Code 指纹检测的公开逆向分析构建了 Fuck Claude。本站是参考工具与教育型知识库,与 Anthropic 无任何关联。',
  },
};
