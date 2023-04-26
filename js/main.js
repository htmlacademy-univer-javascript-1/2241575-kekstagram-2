import {openForm} from './edit-form.js';
import {addHandlersToZoomSettings} from './image-zoom-editor.js';
import {getData} from './api.js';

getData();
openForm();
addHandlersToZoomSettings();
