import {createDescriptionOfPhoto} from './data.js';
import {createThumbnail} from './thumbnails.js';
import {openForm} from './edit-form.js';

const descriptionsOfPhotos = Array.from({length: 12}, createDescriptionOfPhoto);

createThumbnail(descriptionsOfPhotos);
openForm();
