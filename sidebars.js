/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'manglacharan',
    'jay-dhvani',
    {
      type: 'category',
      label: 'Jaiva Dharma',
      items: ['Jaiva-Dharma/notes'],
    },

    // {
    //   type: 'category',
    //   label: 'Tags',
    //   items: [
    //     {
    //       type: 'link',
    //       label: 'Tutorial Tags', // The link label
    //       href: '/docs/tags', // The internal path
    //     },
    //     {
    //       type: 'link',
    //       label: 'Blog Tags', // The link label
    //       href: '/blog/tags', // The internal path
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;
