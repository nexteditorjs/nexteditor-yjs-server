const Y = require('yjs')
const { genId } = require('@nexteditorjs/nexteditor-core/dist/common');

const setDocTemplate = require('./src/utils').setDocTemplate;
//

function getDefaultTemplate() {
  //
  // create empty doc
  const titleBlockData = new Y.Map(Object.entries({
    id: genId(),
    type: 'text',
    text: new Y.Text(),
    'style-heading': 1,
  }));
  const contentBlockData = new Y.Map(Object.entries({
    id: genId(),
    type: 'text',
    text: new Y.Text(),
  }));
  //
  const blocks = new Y.Array();
  blocks.push([titleBlockData, contentBlockData]);
  //
  const allBlocksObject = new Y.Map();
  allBlocksObject.set('root', blocks);
  //
  return {
    blocks: allBlocksObject,
    meta: new Y.Map(),
  };
}

setDocTemplate(getDefaultTemplate());
//
require('./src/server');
