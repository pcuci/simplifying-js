import { setLatestPost } from './test';
import { getPost } from './services/postService';

const sidebar = document.getElementById('sidebar');
setLatestPost(1, sidebar, getPost);
// Sets sidebar
