import {openForm} from './edit-form.js';
import {addHandlersToZoomSettings} from './image-zoom-editor.js';
import {getData} from './api.js';
import {createThumbnails} from './thumbnails.js';

getData(createThumbnails);
openForm();
addHandlersToZoomSettings();
