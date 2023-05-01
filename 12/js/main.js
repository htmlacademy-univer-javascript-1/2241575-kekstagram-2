import {openForm} from './edit-form.js';
import {addHandlersToZoomSettings} from './image-zoom-editor.js';
import {getData} from './api.js';
import {createThumbnails} from './thumbnails.js';
import {imageFiltering} from './filters.js';

getData(createThumbnails);
getData(imageFiltering);
openForm();
addHandlersToZoomSettings();
