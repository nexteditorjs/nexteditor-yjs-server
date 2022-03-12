const { genId } = require('@nexteditorjs/nexteditor-core/dist/common');

const setDocTemplate = require('./src/utils').setDocTemplate;
//

const template = {
  meta: {},
  blocks: {
    root: [
      {
        id: genId(),
        type: 'text',
        text: [],
        'style-heading': 1,
      },
      {
        id: genId(),
        type: 'text',
        text: [],
      },
    ],
  },
};

setDocTemplate(template);
//
require('./src/server');
