import axios from 'axios';

// const API_KEY = '?key=p_dharampal';
const API_URL = 'https://lab5-platform-api-fruityysocks.onrender.com/api/posts';
// const API_URL = 'http://localhost:9090/api/posts';
const getProjects = async (term) => {
  try {
    // const response = await axios.get(`${API_URL}/${API_KEY}`, {
    const response = await axios.get(API_URL, {

      params: {
        fields: ['coverUrl', 'title', 'content', 'tags'],
        term,
      },
    });
    // // const projectsWithTagsArray = response.data.map((project) => ({
    // //   ...project,
    // //   tags: project.tags?.split(',').map((t) => t.trim()) || [],
    // // }));

    // return projectsWithTagsArray;
    return response.data;
    // used chatGPT to convert the tags string to an array
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

const postProject = async (project) => {
  try {
    // const response = await axios.post(`${API_URL}/${API_KEY}`, project);
    const response = await axios.post(`${API_URL}`, project);

    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

const updateProject = async (project) => {
  try {
    // const response = await axios.put(`${API_URL}/${project.id}/${API_KEY}`, project);
    const response = await axios.put(`${API_URL}/${project.id}`, project);
    console.log('Project updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

const getProject = async ({ id }) => {
  try {
    // const response = await axios.get(`${API_URL}/${id}/${API_KEY}`);
    // const projectWithTagsArray = {
    //   ...response.data,
    //   tags: response.data.tags?.split(',').map((t) => t.trim()) || [],
    // };
    // return projectWithTagsArray;
    const response = await axios.get(`${API_URL}/${id}`);

    return response.data;
  } catch (error) {
    console.error('Error getting project:', error);
    throw error;
  }
};

const deleteProject = async ({ id }) => {
  try {
    // const response = await axios.delete(`${API_URL}/${id}/${API_KEY}`);
    const response = await axios.delete(`${API_URL}/${id}`);

    return response.data;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

export {
  getProjects,
  postProject,
  updateProject,
  getProject,
  deleteProject,
};
