import {createDescriptionOfPhoto} from './data.js';
import {createThumbnail} from './thumbnails.js';
import {openForm} from './edit-form.js';
import {addHandlersToZoomSettings} from './image-zoom-editor.js';
import {filterEditor} from './image-filter-editor.js';

const descriptionsOfPhotos = Array.from({length: 12}, createDescriptionOfPhoto);

createThumbnail(descriptionsOfPhotos);

openForm();
addHandlersToZoomSettings();
filterEditor();
