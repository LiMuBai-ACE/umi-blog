(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    F75G: function (g, e, b) {
      g.exports = b.p + 'static/img/logo.c6b6e9a7.1598588741787.jpg';
    },
    aK4F: function (g, e, b) {},
    mdWp: function (g, e, b) {
      'use strict';
      b.r(e);
      var q = b('lUTK'),
        c = b('BvKs'),
        r = b('B9cy'),
        d = b('Ol7k'),
        h = b('q1tI'),
        a = b.n(h),
        f = b('55Ip'),
        i = b('aK4F'),
        s = b.n(i),
        j = d.a.Header,
        k = d.a.Content,
        t = d.a.Footer,
        l = d.a.Sider,
        m = c.a.SubMenu,
        n = function U(o) {
          return a.a.createElement(
            d.a,
            { style: { height: '100%' } },
            a.a.createElement(
              l,
              {
                breakpoint: 'lg',
                collapsedWidth: '0',
                onBreakpoint: function V(p) {},
                onCollapse: function V(p, u) {},
              },
              a.a.createElement(
                'div',
                { className: 'logo' },
                a.a.createElement('img', { src: b('F75G') }),
              ),
              a.a.createElement(
                c.a,
                { theme: 'dark', mode: 'inline', defaultSelectedKeys: ['1'] },
                a.a.createElement(
                  c.a.Item,
                  { key: '1' },
                  a.a.createElement(f.a, { to: '/home' }, '首页'),
                ),
                a.a.createElement(
                  m,
                  { key: 'sub2', title: '文章管理' },
                  a.a.createElement(
                    c.a.Item,
                    { key: '2' },
                    a.a.createElement(
                      f.a,
                      { to: '/admin/articleList' },
                      '文章列表',
                    ),
                  ),
                  a.a.createElement(
                    c.a.Item,
                    { key: '3' },
                    a.a.createElement(
                      f.a,
                      { to: '/admin/writeArticle' },
                      '编写文章',
                    ),
                  ),
                ),
                a.a.createElement(
                  c.a.Item,
                  { key: '5' },
                  a.a.createElement(f.a, { to: '/admin/analysis' }, '数据分析'),
                ),
              ),
            ),
            a.a.createElement(
              d.a,
              null,
              a.a.createElement(
                j,
                {
                  className: 'site-layout-sub-header-background',
                  style: { padding: 0 },
                },
                'height',
              ),
              a.a.createElement(
                k,
                { style: { padding: 30 } },
                a.a.createElement(
                  'div',
                  { className: 'site-layout-background' },
                  o.children,
                ),
              ),
            ),
          );
        };
      e.default = n;
    },
  },
]);
